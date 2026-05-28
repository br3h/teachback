#!/usr/bin/env python3
"""
Backend API tests for TeachBack AI Waitlist
Tests all endpoints and edge cases
"""
import requests
import sys
from datetime import datetime
import time

# Use the public endpoint
BASE_URL = "https://learn-by-teaching-4.preview.emergentagent.com/api"

class WaitlistAPITester:
    def __init__(self):
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []
        self.timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')

    def log_test(self, name, passed, details=""):
        """Log test result"""
        self.tests_run += 1
        if passed:
            self.tests_passed += 1
            print(f"✅ PASS: {name}")
        else:
            print(f"❌ FAIL: {name}")
        if details:
            print(f"   {details}")
        self.test_results.append({
            "name": name,
            "passed": passed,
            "details": details
        })

    def test_health_endpoint(self):
        """Test GET /api/health"""
        try:
            response = requests.get(f"{BASE_URL}/health", timeout=10)
            passed = response.status_code == 200 and response.json().get("status") == "ok"
            self.log_test(
                "GET /api/health",
                passed,
                f"Status: {response.status_code}, Response: {response.json()}"
            )
            return passed
        except Exception as e:
            self.log_test("GET /api/health", False, f"Error: {str(e)}")
            return False

    def test_root_endpoint(self):
        """Test GET /api"""
        try:
            response = requests.get(f"{BASE_URL}/", timeout=10)
            data = response.json()
            passed = (
                response.status_code == 200 and
                "message" in data and
                "TeachBack AI API is running" in data["message"]
            )
            self.log_test(
                "GET /api root",
                passed,
                f"Status: {response.status_code}, Message: {data.get('message', 'N/A')}"
            )
            return passed
        except Exception as e:
            self.log_test("GET /api root", False, f"Error: {str(e)}")
            return False

    def test_waitlist_count(self):
        """Test GET /api/waitlist/count"""
        try:
            response = requests.get(f"{BASE_URL}/waitlist/count", timeout=10)
            data = response.json()
            passed = response.status_code == 200 and "count" in data and isinstance(data["count"], int)
            self.log_test(
                "GET /api/waitlist/count",
                passed,
                f"Status: {response.status_code}, Count: {data.get('count', 'N/A')}"
            )
            return passed, data.get("count", 0)
        except Exception as e:
            self.log_test("GET /api/waitlist/count", False, f"Error: {str(e)}")
            return False, 0

    def test_valid_new_email(self):
        """Test POST /api/waitlist with valid new email"""
        email = f"test-{self.timestamp}@teachback.test"
        try:
            response = requests.post(
                f"{BASE_URL}/waitlist",
                json={"email": email, "source": "backend-test"},
                timeout=15
            )
            data = response.json()
            passed = (
                response.status_code == 200 and
                data.get("status") == "success" and
                "on the list" in data.get("message", "").lower()
            )
            self.log_test(
                f"POST /api/waitlist - valid new email ({email})",
                passed,
                f"Status: {response.status_code}, Response: {data}"
            )
            return passed, email
        except Exception as e:
            self.log_test(f"POST /api/waitlist - valid new email ({email})", False, f"Error: {str(e)}")
            return False, email

    def test_duplicate_email(self, email):
        """Test POST /api/waitlist with duplicate email"""
        try:
            response = requests.post(
                f"{BASE_URL}/waitlist",
                json={"email": email, "source": "backend-test"},
                timeout=15
            )
            data = response.json()
            passed = (
                response.status_code == 200 and
                data.get("status") == "duplicate" and
                "already on the list" in data.get("message", "").lower()
            )
            self.log_test(
                f"POST /api/waitlist - duplicate email ({email})",
                passed,
                f"Status: {response.status_code}, Response: {data}"
            )
            return passed
        except Exception as e:
            self.log_test(f"POST /api/waitlist - duplicate email ({email})", False, f"Error: {str(e)}")
            return False

    def test_invalid_emails(self):
        """Test POST /api/waitlist with various invalid emails"""
        invalid_emails = [
            ("bad-email", "no @ symbol"),
            ("foo@", "missing domain"),
            ("@bar.com", "missing local part"),
            ("", "empty string"),
            ("test@", "incomplete domain"),
            ("@test.com", "missing local"),
        ]
        
        all_passed = True
        for email, description in invalid_emails:
            try:
                response = requests.post(
                    f"{BASE_URL}/waitlist",
                    json={"email": email, "source": "backend-test"},
                    timeout=15
                )
                # Should return 422 validation error
                passed = response.status_code == 422
                self.log_test(
                    f"POST /api/waitlist - invalid email: {description} ('{email}')",
                    passed,
                    f"Status: {response.status_code} (expected 422)"
                )
                if not passed:
                    all_passed = False
            except Exception as e:
                self.log_test(
                    f"POST /api/waitlist - invalid email: {description} ('{email}')",
                    False,
                    f"Error: {str(e)}"
                )
                all_passed = False
        
        return all_passed

    def test_email_normalization(self):
        """Test email normalization - spaces and case"""
        base_email = f"normalize-{self.timestamp}@teachback.test"
        
        # First, submit with spaces and uppercase
        email_with_spaces = f"  {base_email.upper()}  "
        try:
            response1 = requests.post(
                f"{BASE_URL}/waitlist",
                json={"email": email_with_spaces, "source": "backend-test"},
                timeout=15
            )
            data1 = response1.json()
            passed1 = response1.status_code == 200 and data1.get("status") == "success"
            self.log_test(
                f"POST /api/waitlist - email with spaces/uppercase ('{email_with_spaces}')",
                passed1,
                f"Status: {response1.status_code}, Response: {data1}"
            )
            
            # Now submit the same email in lowercase without spaces - should be duplicate
            time.sleep(0.5)  # Small delay
            response2 = requests.post(
                f"{BASE_URL}/waitlist",
                json={"email": base_email, "source": "backend-test"},
                timeout=15
            )
            data2 = response2.json()
            passed2 = response2.status_code == 200 and data2.get("status") == "duplicate"
            self.log_test(
                f"POST /api/waitlist - normalized duplicate ('{base_email}')",
                passed2,
                f"Status: {response2.status_code}, Response: {data2}"
            )
            
            return passed1 and passed2
        except Exception as e:
            self.log_test("POST /api/waitlist - email normalization", False, f"Error: {str(e)}")
            return False

    def test_honeypot_field(self):
        """Test honeypot field - should return success but not store"""
        email = f"honeypot-{self.timestamp}@teachback.test"
        
        try:
            # Get count before
            count_before_response = requests.get(f"{BASE_URL}/waitlist/count", timeout=10)
            count_before = count_before_response.json().get("count", 0)
            
            # Submit with honeypot filled
            response = requests.post(
                f"{BASE_URL}/waitlist",
                json={"email": email, "hp": "bot-filled-this", "source": "backend-test"},
                timeout=15
            )
            data = response.json()
            
            # Should return success
            success_returned = response.status_code == 200 and data.get("status") == "success"
            
            time.sleep(0.5)  # Small delay
            
            # Get count after
            count_after_response = requests.get(f"{BASE_URL}/waitlist/count", timeout=10)
            count_after = count_after_response.json().get("count", 0)
            
            # Count should NOT have increased
            count_unchanged = count_after == count_before
            
            passed = success_returned and count_unchanged
            self.log_test(
                f"POST /api/waitlist - honeypot field ('{email}')",
                passed,
                f"Status: {response.status_code}, Response: {data}, Count before: {count_before}, Count after: {count_after}"
            )
            return passed
        except Exception as e:
            self.log_test(f"POST /api/waitlist - honeypot field ('{email}')", False, f"Error: {str(e)}")
            return False

    def test_count_increments(self):
        """Test that count increments after successful signup"""
        try:
            # Get count before
            count_before_response = requests.get(f"{BASE_URL}/waitlist/count", timeout=10)
            count_before = count_before_response.json().get("count", 0)
            
            # Submit new email
            email = f"count-test-{self.timestamp}@teachback.test"
            response = requests.post(
                f"{BASE_URL}/waitlist",
                json={"email": email, "source": "backend-test"},
                timeout=15
            )
            
            time.sleep(0.5)  # Small delay
            
            # Get count after
            count_after_response = requests.get(f"{BASE_URL}/waitlist/count", timeout=10)
            count_after = count_after_response.json().get("count", 0)
            
            # Count should have increased by 1
            passed = count_after == count_before + 1
            self.log_test(
                "GET /api/waitlist/count - increments after signup",
                passed,
                f"Count before: {count_before}, Count after: {count_after} (expected +1)"
            )
            return passed
        except Exception as e:
            self.log_test("GET /api/waitlist/count - increments after signup", False, f"Error: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 70)
        print("TeachBack AI Waitlist - Backend API Tests")
        print(f"Base URL: {BASE_URL}")
        print(f"Test Run: {self.timestamp}")
        print("=" * 70)
        print()

        # Test basic endpoints first
        print("📡 Testing Basic Endpoints...")
        self.test_health_endpoint()
        self.test_root_endpoint()
        count_passed, initial_count = self.test_waitlist_count()
        print()

        if not count_passed:
            print("⚠️  Basic endpoints failing. Stopping tests.")
            return False

        # Test waitlist functionality
        print("📝 Testing Waitlist Functionality...")
        
        # Valid new email
        valid_passed, test_email = self.test_valid_new_email()
        
        # Duplicate email
        if valid_passed:
            time.sleep(0.5)
            self.test_duplicate_email(test_email)
        
        # Invalid emails
        self.test_invalid_emails()
        
        # Email normalization
        self.test_email_normalization()
        
        # Honeypot
        self.test_honeypot_field()
        
        # Count increments
        self.test_count_increments()
        
        print()
        print("=" * 70)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        print("=" * 70)
        
        return self.tests_passed == self.tests_run

def main():
    tester = WaitlistAPITester()
    success = tester.run_all_tests()
    
    if success:
        print("\n✅ All backend tests passed!")
        return 0
    else:
        print(f"\n❌ {tester.tests_run - tester.tests_passed} test(s) failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())
