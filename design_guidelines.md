{
  "brand": {
    "name": "TeachBack AI",
    "attributes": [
      "premium",
      "sharp",
      "evidence-driven",
      "calm confidence (no hype)",
      "mobile-first",
      "dark-mode craft"
    ],
    "north_star": "Make the product feel real and trustworthy: a focused waitlist page with one job—capture email—supported by a believable app preview and crisp learning outcomes."
  },

  "visual_personality": {
    "style": [
      "Deep-black + neon-cyan glassmorphism",
      "Linear-like restraint (clean hierarchy, no clutter)",
      "Bento-ish cards with generous spacing",
      "Subtle grain + controlled glow (only where it helps focus)"
    ],
    "what_to_avoid": {
      "anti_patterns": [
        "Random gradient blobs",
        "Robot faces / humanoid AI mascots",
        "Floating cubes / generic 3D shapes",
        "Generic SaaS icon packs",
        "Fake dashboard clutter",
        "Overly saturated gradients (purple/pink, blue/purple, etc.)",
        "Over-animated sections (spinning, bouncing, parallax overload)",
        "Center-aligned everything (hurts reading flow)",
        "Vibe-coded look (inconsistent spacing, arbitrary shadows, mismatched radii)"
      ],
      "copy_tone": [
        "No AI hype words: 'revolutionary', 'magic', 'supercharge'",
        "Prefer proof language: 'shows what you missed', 'pinpoints gaps', 'retention over time'"
      ]
    }
  },

  "typography": {
    "fonts": {
      "headings": {
        "family": "Sora",
        "weights": [600, 700],
        "usage": "Hero headline, section titles, key metric labels"
      },
      "body": {
        "family": "DM Sans (preferred) or Inter",
        "weights": [400, 500, 600],
        "usage": "Body copy, UI labels, form text, FAQ"
      }
    },
    "google_fonts_import": {
      "instruction": "In /app/frontend/public/index.html add <link> tags for Sora and DM Sans (or Inter). Use CSS variables for font families.",
      "hrefs": [
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@600;700&display=swap"
      ]
    },
    "type_scale_tailwind": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl tracking-tight",
      "h2": "text-base md:text-lg text-muted-foreground",
      "section_title": "text-2xl sm:text-3xl font-semibold tracking-tight",
      "card_title": "text-base font-semibold",
      "body": "text-sm sm:text-base leading-relaxed",
      "small": "text-xs text-muted-foreground"
    },
    "letter_spacing": {
      "headings": "tracking-tight",
      "labels": "tracking-[0.01em]"
    }
  },

  "color_system": {
    "notes": "User preference: deep black background (#05070D), glass dark cards, neon cyan accent. Keep gradients minimal and only as subtle section overlays (<=20% viewport).",
    "tokens_hsl_for_shadcn": {
      "root_dark_mode_only": true,
      "background": "222 56% 4%",
      "foreground": "210 40% 98%",
      "card": "222 45% 7%",
      "card_foreground": "210 40% 98%",
      "popover": "222 45% 7%",
      "popover_foreground": "210 40% 98%",
      "primary": "186 100% 55%",
      "primary_foreground": "222 56% 4%",
      "secondary": "222 28% 12%",
      "secondary_foreground": "210 40% 98%",
      "muted": "222 22% 14%",
      "muted_foreground": "215 16% 70%",
      "accent": "186 100% 55%",
      "accent_foreground": "222 56% 4%",
      "destructive": "0 72% 52%",
      "destructive_foreground": "210 40% 98%",
      "border": "222 22% 18%",
      "input": "222 22% 18%",
      "ring": "186 100% 55%",
      "radius": "1.5rem"
    },
    "hex_palette": {
      "bg": "#05070D",
      "bg_2": "#070B14",
      "surface_glass": "rgba(10, 16, 28, 0.62)",
      "surface_glass_strong": "rgba(10, 16, 28, 0.78)",
      "border_subtle": "rgba(255, 255, 255, 0.08)",
      "border_cyan": "rgba(0, 229, 255, 0.22)",
      "text": "#F5F7FF",
      "text_soft": "rgba(245, 247, 255, 0.82)",
      "text_muted": "rgba(245, 247, 255, 0.62)",
      "accent_cyan": "#00E5FF",
      "accent_cyan_2": "#2AF6D6",
      "success": "#2AF6D6",
      "warning": "#F7C948",
      "danger": "#FF4D6D"
    },
    "allowed_gradients": {
      "rule": "Only for hero/section background overlays; never on text-heavy cards; never on small elements; never exceed 20% viewport.",
      "examples": [
        "radial-gradient(600px circle at 20% 10%, rgba(0,229,255,0.14), transparent 55%)",
        "radial-gradient(520px circle at 80% 0%, rgba(42,246,214,0.10), transparent 60%)"
      ]
    },
    "shadow_recipes": {
      "card": "0 10px 30px rgba(0,0,0,0.45)",
      "glow_cyan_soft": "0 0 0 1px rgba(0,229,255,0.14), 0 0 24px rgba(0,229,255,0.10)",
      "glow_cyan_hover": "0 0 0 1px rgba(0,229,255,0.22), 0 0 34px rgba(0,229,255,0.16)",
      "focus_ring": "0 0 0 4px rgba(0,229,255,0.18)"
    }
  },

  "spacing_and_layout": {
    "spacing_scale_px": {
      "xs": 8,
      "sm": 12,
      "md": 16,
      "lg": 24,
      "xl": 32,
      "2xl": 48,
      "3xl": 64,
      "4xl": 96
    },
    "radius_scale": {
      "card": "rounded-[24px]",
      "button": "rounded-[22px]",
      "input": "rounded-[20px]",
      "pill": "rounded-full"
    },
    "grid": {
      "container": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
      "hero": "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center",
      "hero_left": "lg:col-span-6",
      "hero_right": "lg:col-span-6",
      "three_cards": "grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6",
      "six_features": "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
      "section_padding": "py-16 sm:py-20 lg:py-24"
    },
    "section_order": [
      "Sticky navbar",
      "Hero (headline + CTA + app preview)",
      "Problem (3 cards)",
      "Solution (3 steps)",
      "Features (6 cards)",
      "Waitlist CTA (email form)",
      "FAQ (accordion)",
      "Footer"
    ]
  },

  "hero_app_preview_mock": {
    "goal": "A believable, premium 'real screenshot' style mock—no generic AI imagery. It should look like an actual TeachBack AI screen.",
    "composition": {
      "device": "iPhone-like frame with subtle inner bevel; no heavy reflections; keep it matte.",
      "screen_background": "#05070D with a faint cyan radial glow behind the top metric only.",
      "layout": [
        "Top: 'Overall Score' with large number 87 and small delta badge (+6 this week)",
        "Card: 'Feynman Verdict' with 1–2 sentence evaluation",
        "Two-column mini cards: 'Strengths' and 'Gaps to Review'",
        "Retention bar: labeled 'Retention (7 days)' with animated fill to ~72%",
        "Bottom: XP gained row 'XP +120' and 'Streak 5 days'"
      ]
    },
    "content_copy": {
      "feynman_verdict": "Clear explanation with strong intuition. Missed one key constraint and a definition edge-case.",
      "strengths": [
        "Explained the core idea simply",
        "Used a correct example",
        "Good causal reasoning"
      ],
      "gaps": [
        "Skipped the limiting case",
        "Mixed two similar terms",
        "Needs one formula recall"
      ]
    },
    "ui_details": {
      "metric_typography": "Sora 700 for 87; DM Sans 500 for labels",
      "chips": "Use Badge component with cyan border + translucent fill",
      "dividers": "1px rgba(255,255,255,0.06)",
      "icons": "Use lucide-react icons only (e.g., CheckCircle2, AlertTriangle, Sparkles, TrendingUp)"
    },
    "motion": {
      "float": "Very slight translateY (6–10px) over 6–8s ease-in-out, infinite; disabled for prefers-reduced-motion.",
      "entrance": "Fade + slide up 12px on load (hero only)."
    }
  },

  "components": {
    "component_path": {
      "shadcn": {
        "button": "/app/frontend/src/components/ui/button.jsx",
        "card": "/app/frontend/src/components/ui/card.jsx",
        "input": "/app/frontend/src/components/ui/input.jsx",
        "label": "/app/frontend/src/components/ui/label.jsx",
        "accordion": "/app/frontend/src/components/ui/accordion.jsx",
        "progress": "/app/frontend/src/components/ui/progress.jsx",
        "badge": "/app/frontend/src/components/ui/badge.jsx",
        "separator": "/app/frontend/src/components/ui/separator.jsx",
        "sonner": "/app/frontend/src/components/ui/sonner.jsx"
      },
      "recommended_extras": {
        "framer_motion": "For scroll reveal + hero entrance (subtle).",
        "class_variance_authority": "Already used by shadcn button; keep variants consistent."
      }
    },
    "navbar": {
      "layout": "Sticky top-0; transparent initially; on scroll add glass background + border.",
      "classes": {
        "wrapper": "sticky top-0 z-50",
        "inner": "backdrop-blur-xl bg-[rgba(5,7,13,0.55)] border-b border-white/10",
        "container": "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
        "brand": "font-[var(--font-heading)] text-base tracking-tight",
        "cta": "rounded-[22px] bg-[var(--accent-cyan)] text-[#05070D] hover:shadow-[var(--shadow-glow-hover)]"
      },
      "data_testids": {
        "join_button": "navbar-join-waitlist-button",
        "brand_link": "navbar-brand-link"
      }
    },
    "primary_button": {
      "base": "rounded-[22px] bg-[#00E5FF] text-[#05070D] font-medium px-5 py-3 shadow-[0_0_0_1px_rgba(0,229,255,0.18)]",
      "hover": "hover:shadow-[0_0_0_1px_rgba(0,229,255,0.22),0_0_34px_rgba(0,229,255,0.16)] hover:brightness-[1.02]",
      "active": "active:scale-[0.98]",
      "focus": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]/40 focus-visible:ring-offset-0",
      "transition": "transition-[box-shadow,filter] duration-200"
    },
    "glass_card": {
      "classes": "rounded-[24px] border border-white/10 bg-[rgba(10,16,28,0.62)] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
      "hover": "hover:border-[#00E5FF]/25 hover:shadow-[0_0_0_1px_rgba(0,229,255,0.14),0_0_24px_rgba(0,229,255,0.10)]",
      "transition": "transition-[box-shadow,border-color] duration-200"
    },
    "email_form": {
      "structure": "Label (sr-only on desktop ok, but keep accessible) + Input + Submit button + helper text + status message.",
      "input_classes": "h-12 rounded-[20px] bg-[rgba(10,16,28,0.55)] border border-white/10 text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-[#00E5FF]/35 focus-visible:border-[#00E5FF]/35 transition-[box-shadow,border-color]",
      "states": {
        "default": "No glow",
        "focus": "Cyan ring + subtle outer glow",
        "loading": "Disable input/button; show inline spinner in button",
        "success": "Show success text + subtle green/cyan badge",
        "error": "Show error text + red border (no glow)"
      },
      "data_testids": {
        "email_input": "waitlist-email-input",
        "submit_button": "waitlist-submit-button",
        "status_text": "waitlist-status-text"
      }
    },
    "faq": {
      "component": "Accordion",
      "accordion_item_classes": "rounded-[20px] border border-white/10 bg-[rgba(10,16,28,0.55)] backdrop-blur-xl",
      "data_testids": {
        "faq_section": "faq-section",
        "faq_item": "faq-item"
      }
    },
    "retention_bar": {
      "component": "Progress",
      "classes": {
        "track": "h-2 rounded-full bg-white/10",
        "indicator": "bg-[#00E5FF]"
      },
      "animation": "On mount/in-view animate value from 0 to target over 900ms ease-out (respect prefers-reduced-motion).",
      "data_testids": {
        "retention_progress": "app-preview-retention-progress"
      }
    }
  },

  "motion_and_micro_interactions": {
    "library": {
      "framer_motion": {
        "install": "npm i framer-motion",
        "usage": "Use for hero entrance + scroll reveal. Keep durations 0.35–0.6s, y offset 10–16px, opacity 0->1."
      }
    },
    "recipes": {
      "hero_entrance": {
        "effect": "fade + slide up",
        "spec": "opacity: 0 -> 1, y: 14 -> 0, duration: 0.55, ease: [0.22,1,0.36,1]",
        "reduced_motion": "If prefers-reduced-motion: no transform, only opacity"
      },
      "app_preview_float": {
        "effect": "slow float",
        "spec": "translateY: 0 -> -8 -> 0 over 7s easeInOut infinite",
        "reduced_motion": "Disable"
      },
      "scroll_reveal_cards": {
        "effect": "staggered reveal",
        "spec": "whileInView: opacity 0->1, y 12->0, duration 0.45; stagger children 0.06",
        "threshold": "viewport once: true, amount: 0.25"
      },
      "button_hover_glow": {
        "effect": "shadow intensifies + slight brightness",
        "spec": "transition-[box-shadow,filter] duration-200; active scale 0.98"
      },
      "input_focus_glow": {
        "effect": "ring + subtle outer glow",
        "spec": "focus-visible:ring-2 ring-[#00E5FF]/35 + shadow focus_ring"
      },
      "retention_bar_fill": {
        "effect": "progress fill",
        "spec": "animate value 0->72 over 900ms easeOut when preview enters viewport"
      }
    }
  },

  "section_blueprints": {
    "1_navbar": {
      "content": ["Brand: TeachBack (white) + AI (cyan)", "Join Waitlist button"],
      "behavior": "On scroll add glass background + border; keep height 64px; CTA always visible.",
      "spacing": "px-4 mobile; px-6 sm; px-8 lg"
    },
    "2_hero": {
      "layout": "Left copy + CTAs; right app preview mock.",
      "copy": {
        "headline": "Learn it by teaching it.",
        "subhead": "Upload notes. Explain out loud. TeachBack AI shows what you truly understand—and what to study next.",
        "bullets": [
          "Pinpoints missing concepts (not just wrong answers)",
          "Turns studying into proof of understanding",
          "Built for fast, mobile-first sessions"
        ]
      },
      "cta": ["Join the waitlist", "See how it works (scroll to Solution)"],
      "background": "Deep black with two subtle radial cyan/mint overlays + grain.",
      "data_testids": {
        "hero_primary_cta": "hero-join-waitlist-button",
        "hero_secondary_cta": "hero-see-how-it-works-button"
      }
    },
    "3_problem": {
      "title": "Rereading notes feels productive. It usually is not.",
      "cards": [
        {"title": "Familiarity ≠ understanding", "body": "Recognition tricks your brain into thinking you know it."},
        {"title": "You miss the gaps", "body": "Without explaining, weak spots stay invisible until the test."},
        {"title": "No feedback loop", "body": "Studying without evaluation wastes time on what you already know."}
      ],
      "layout": "3 glass cards; icon + title + 2 lines body; keep copy tight.",
      "data_testids": {"problem_section": "problem-section"}
    },
    "4_solution": {
      "title": "TeachBack turns studying into proof of understanding.",
      "steps": [
        {"step": "01", "title": "Upload notes", "body": "Drop a PDF or paste text. TeachBack extracts the key concepts."},
        {"step": "02", "title": "Teach it out loud", "body": "Explain like you’re teaching a 12-year-old. No scripts."},
        {"step": "03", "title": "Get your gaps", "body": "See what you nailed, what you missed, and what to study next."}
      ],
      "layout": "3 step cards with numeric badge; connect with subtle divider line on desktop only.",
      "data_testids": {"solution_section": "solution-section"}
    },
    "5_features": {
      "title": "Everything you need to study with receipts.",
      "cards": [
        "AI Teaching Evaluation",
        "Warm-Up Questions",
        "Personalized Study Plan",
        "Socratic Tutor",
        "XP / Streaks / Goals",
        "Spaced Repetition & Retention Decay"
      ],
      "layout": "6 cards; each has icon, title, 1–2 sentence description; keep consistent heights.",
      "data_testids": {"features_section": "features-section"}
    },
    "6_waitlist": {
      "title": "Be first to try TeachBack AI.",
      "subhead": "Early access invites go out in small batches.",
      "form": "Email input + submit button; show privacy microcopy.",
      "trust_row": ["No spam", "Unsubscribe anytime", "iPad legacy, rebuilt for mobile"],
      "data_testids": {"waitlist_section": "waitlist-section"}
    },
    "7_faq": {
      "title": "FAQ",
      "items": [
        {"q": "How is this different from flashcards?", "a": "Flashcards test recall. TeachBack tests explanation—whether you can teach the idea clearly and correctly."},
        {"q": "What formats can I upload?", "a": "Start with pasted text and PDFs. More formats will follow."},
        {"q": "Does it grade me like a teacher?", "a": "It evaluates clarity, correctness, and missing concepts—then suggests what to review next."},
        {"q": "When will I get access?", "a": "We’re onboarding in batches. Join the waitlist to get the earliest invite."}
      ],
      "data_testids": {"faq_accordion": "faq-accordion"}
    },
    "8_footer": {
      "content": ["TeachBack AI", "Short mission line", "Privacy / Terms links"],
      "style": "Minimal; no heavy gradients; subtle top border.",
      "data_testids": {"footer": "footer"}
    }
  },

  "accessibility": {
    "requirements": [
      "All inputs have <Label> (can be visually hidden with sr-only but must exist)",
      "Keyboard navigation: visible focus states on links/buttons/accordion triggers",
      "ARIA live region for form status (success/error)",
      "Respect prefers-reduced-motion: disable floating + reduce transforms",
      "Color contrast: body text uses text_soft on bg; avoid low-contrast cyan text on black for paragraphs",
      "Hit targets: buttons/inputs min 44px height",
      "Accordion: use shadcn Accordion for correct aria-expanded/controls"
    ]
  },

  "images": {
    "image_urls": [
      {
        "category": "background_texture",
        "description": "Optional subtle grain texture overlay (use very low opacity 0.06–0.10).",
        "url": "https://images.pexels.com/photos/7599717/pexels-photo-7599717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "category": "background_texture_alt",
        "description": "Alternative grain/scratch texture; use sparingly and blur slightly.",
        "url": "https://images.pexels.com/photos/18599094/pexels-photo-18599094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ],
    "usage_rules": [
      "Never use stock 'AI' imagery (robots, brains, circuits).",
      "Prefer abstract texture overlays and the custom app preview mock as the hero visual.",
      "If using texture images: apply as background-image with mix-blend-mode: overlay/soft-light and opacity <= 0.10."
    ]
  },

  "implementation_notes_for_react_js": {
    "global_css_tokens": {
      "instruction": "Update /app/frontend/src/index.css : set :root/.dark tokens to match the palette; set --radius to 1.5rem; set body font-family to DM Sans; headings use a utility class or CSS var.",
      "css_vars_example": ":root { --font-heading: 'Sora', ui-sans-serif, system-ui; --font-body: 'DM Sans', ui-sans-serif, system-ui; --accent-cyan: #00E5FF; --shadow-glow-hover: 0 0 0 1px rgba(0,229,255,0.22), 0 0 34px rgba(0,229,255,0.16); }"
    },
    "do_not_use": [
      "Do not rely on App.css default CRA styles (remove centered header patterns).",
      "Do not add transition: all anywhere.",
      "Do not use HTML dropdown/calendar/toast; use shadcn components only.",
      "Do not introduce purple (especially in gradients) for AI chat/assistant vibes."
    ],
    "data_testid_policy": "All interactive and key informational elements MUST include data-testid in kebab-case describing role (e.g., waitlist-submit-button)."
  },

  "instructions_to_main_agent": [
    "Replace CRA default App.css usage; build the landing page with Tailwind + shadcn components only.",
    "Set the entire app to dark mode tokens (background #05070D). Avoid light theme defaults.",
    "Implement sections in the exact order specified; keep one primary CTA (email capture) repeated in hero + waitlist section.",
    "Build a custom hero app preview mock component (not an image) using Card/Badge/Progress so it feels real and crisp on all DPIs.",
    "Use Framer Motion for subtle entrance + scroll reveal; respect prefers-reduced-motion.",
    "Ensure every button/link/input/accordion trigger has data-testid.",
    "Keep gradients only as subtle radial overlays in hero background (<=20% viewport)."
  ],

  "general_ui_ux_design_guidelines": "- You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals."
}
