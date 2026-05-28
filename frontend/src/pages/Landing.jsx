import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Features from "@/components/landing/Features";
import Personalization from "@/components/landing/Personalization";
import MiniDemo from "@/components/landing/MiniDemo";
import Waitlist from "@/components/landing/Waitlist";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden bg-[#05070D] text-white font-body"
      data-testid="landing-page"
    >
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Personalization />
        <MiniDemo />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
