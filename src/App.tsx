import { useState } from 'react'
import './App.css'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Menu,
  Minus,
  X,
} from 'lucide-react'

const NAV_LINKS = ['About', 'Philosophy', 'Packages', 'Testimonials', 'FAQ']

const PACKAGES = [
  {
    name: 'Essential Refresh',
    price: 'Starting at $500',
    features: [
      'Style consultation',
      'Wardrobe recommendations',
      'Curated shopping list',
      'Outfit guidance',
    ],
  },
  {
    name: 'Executive Upgrade',
    price: 'Starting at $1,500',
    features: [
      'Full wardrobe strategy',
      'Personalized shopping links',
      'Occasion-specific outfits',
      'Async support',
    ],
    featured: true,
  },
  {
    name: 'Concierge Styling',
    price: 'Custom Pricing',
    features: [
      'Ongoing styling support',
      'Event / date / travel styling',
      'Seasonal refreshes',
      'High-touch experience',
    ],
  },
]

const TESTIMONIALS = [
  {
    name: 'David K.',
    role: 'Series B Founder, SF',
    quote:
      "I used to waste 20 minutes every morning staring at my closet. Now I get dressed in two minutes and actually feel good about it. The ROI on confidence alone has been insane.",
  },
  {
    name: 'Marcus L.',
    role: 'Engineering Director, NYC',
    quote:
      "I went from hoodies-only to getting compliments from my board. Didn't change who I am — just how I show up.",
  },
  {
    name: 'James W.',
    role: 'VP of Product, SF',
    quote:
      "My dating life changed overnight. Turns out, looking like you have your life together actually matters. Who knew.",
  },
]

const FAQ_ITEMS = [
  {
    q: 'Do you work with clients remotely?',
    a: 'Yes. Most of our clients are remote. We work via video calls, curated shopping links, and async communication.',
  },
  {
    q: 'What brands do you recommend?',
    a: "We're brand-agnostic. We focus on fit, quality, and aesthetic — not logos. Think COS, Aime Leon Dore, APC, Reigning Champ, and similar.",
  },
  {
    q: 'How much should I expect to spend on clothes?',
    a: "It depends on your goals and starting point. Most clients invest $2K\u2013$5K on their initial wardrobe refresh, but we work within your comfort zone.",
  },
  {
    q: 'How long does the process take?',
    a: 'The Essential Refresh is typically completed in 1\u20132 weeks. Executive and Concierge packages are ongoing relationships.',
  },
  {
    q: "I have zero fashion sense. Is that okay?",
    a: "That's exactly who we work with. You don't need to know anything about fashion. That's our job.",
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-stone-50 antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-stone-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <button
            onClick={() => scrollTo('hero')}
            className="text-lg font-normal tracking-widest uppercase text-stone-100"
          >
            Styled
          </button>

          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-xs font-medium tracking-wider uppercase text-stone-400 transition-colors hover:text-stone-100"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('apply')}
              className="border border-stone-100 px-7 py-2.5 text-xs font-medium tracking-wider uppercase text-stone-100 transition-all hover:bg-stone-100 hover:text-stone-950"
            >
              Apply for Styling
            </button>
          </div>

          <button
            className="text-stone-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-stone-800 bg-stone-950 px-6 pb-6 pt-4 lg:hidden">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="block w-full py-3 text-left text-sm font-medium tracking-wide text-stone-300"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('apply')}
              className="mt-4 w-full border border-stone-100 py-3 text-xs font-medium tracking-wider uppercase text-stone-100"
            >
              Apply for Styling
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center bg-stone-950"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Well-dressed man in minimalist setting"
            className="h-full w-full object-cover opacity-40"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/1920x1080/1c1917/a8a29e/png?text=STYLED'
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-medium tracking-widest uppercase text-stone-400">
              Personal styling for ambitious men in tech
            </p>
            <h1 className="mb-8 text-5xl leading-none font-light tracking-tight text-stone-100 md:text-7xl lg:text-8xl">
              Look like the person{' '}
              <span className="italic text-stone-300">
                you're becoming.
              </span>
            </h1>
            <p className="mb-12 max-w-xl text-lg leading-relaxed font-light text-stone-400">
              Executive presence through personal style. For founders, builders,
              and operators who want to show up with confidence — without
              fashion becoming a hobby.
            </p>
            <button
              onClick={() => scrollTo('apply')}
              className="group inline-flex items-center gap-3 bg-stone-100 px-10 py-4 text-xs font-medium tracking-wider uppercase text-stone-950 transition-all hover:bg-white"
            >
              Apply for Styling
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Problem / Emotional Resonance */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-6 text-xs font-medium tracking-widest uppercase text-stone-400">
            Sound familiar?
          </p>
          <h2 className="mb-12 text-3xl font-light leading-snug text-stone-900 md:text-4xl">
            You've optimized everything in your career.{' '}
            <span className="text-stone-400">
              But when it comes to how you present yourself, you're still
              winging it.
            </span>
          </h2>
          <div className="mx-auto grid max-w-3xl gap-6 text-left md:grid-cols-2">
            {[
              'High income, low confidence in personal style',
              'Decision fatigue around what to wear',
              'Want to look polished — not "fashionable"',
              'No time to make clothing a project',
              'Underdressed for dates, dinners, and conferences',
              'Ready to invest in how you show up',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Minus size={16} className="mt-1 shrink-0 text-stone-300" />
                <p className="text-base leading-relaxed text-stone-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-stone-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="Stylist portrait"
                className="h-full w-full object-cover grayscale"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://placehold.co/800x1000/1c1917/a8a29e/png?text=About'
                }}
              />
            </div>

            <div>
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-stone-400">
                About
              </p>
              <h2 className="mb-8 text-3xl font-light text-stone-900 md:text-4xl">
                Built for builders.
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-stone-500">
                <p>
                  We understand the world you operate in — the board meetings
                  that require gravitas, the investor dinners where first
                  impressions close deals, and the daily grind where you need to
                  feel sharp without thinking about it.
                </p>
                <p>
                  This isn't generic fashion advice. It's a system designed for
                  ambitious men in tech who want fewer decisions, better
                  outcomes, and a wardrobe that matches their trajectory.
                </p>
                <p>
                  Based in NYC and SF, we work with founders, engineers, PMs,
                  and executives who are ready to invest in how they show up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Philosophy */}
      <section id="philosophy" className="bg-stone-950 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-stone-500">
                Our Philosophy
              </p>
              <h2 className="mb-8 text-3xl font-light text-stone-100 md:text-4xl">
                Confidence through simplicity.
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-stone-400">
                <p>
                  We don't believe in trend-chasing or loud branding. We believe
                  in fewer, better pieces — a refined system that makes getting
                  dressed effortless.
                </p>
                <p>
                  Think of it as a founder uniform, elevated. Clean lines,
                  quality materials, intentional fits. The kind of wardrobe that
                  signals you have your life together — without trying too hard.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                {[
                  { label: 'Fewer decisions', desc: 'Curated, not complicated' },
                  { label: 'Better pieces', desc: 'Quality over quantity' },
                  { label: 'Founder uniform', desc: 'Polished, not performative' },
                  { label: 'Elevated basics', desc: 'Timeless, not trendy' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-medium text-stone-200">{item.label}</p>
                    <p className="mt-1 text-xs text-stone-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <img
                src="/images/transform.jpg"
                alt="Elevated menswear aesthetic"
                className="h-full w-full object-cover grayscale"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://placehold.co/800x1000/1c1917/a8a29e/png?text=Philosophy'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-stone-400">
              Packages
            </p>
            <h2 className="mb-4 text-3xl font-light text-stone-900 md:text-4xl">
              Choose your level.
            </h2>
            <p className="mx-auto max-w-xl text-base text-stone-500">
              Every engagement starts with a conversation. Pick the package that
              fits where you are — we'll handle the rest.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col border p-10 transition-all ${
                  pkg.featured
                    ? 'border-stone-900 bg-stone-950 text-stone-100'
                    : 'border-stone-200 bg-white text-stone-900 hover:border-stone-400'
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-10 bg-stone-100 px-4 py-1 text-xs font-medium tracking-wider uppercase text-stone-900">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-medium tracking-wide">{pkg.name}</h3>
                <p
                  className={`mt-2 text-sm ${
                    pkg.featured ? 'text-stone-400' : 'text-stone-500'
                  }`}
                >
                  {pkg.price}
                </p>
                <div className="my-8 h-px w-full bg-current opacity-10" />
                <ul className="flex-1 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          pkg.featured ? 'text-stone-400' : 'text-stone-400'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.featured ? 'text-stone-300' : 'text-stone-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo('apply')}
                  className={`mt-10 w-full py-3.5 text-xs font-medium tracking-wider uppercase transition-all ${
                    pkg.featured
                      ? 'bg-stone-100 text-stone-950 hover:bg-white'
                      : 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
                  }`}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-stone-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-stone-400">
              Results
            </p>
            <h2 className="text-3xl font-light text-stone-900 md:text-4xl">
              From our clients.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col border border-stone-200 bg-white p-10"
              >
                <p className="flex-1 text-base leading-relaxed text-stone-600">
                  "{t.quote}"
                </p>
                <div className="mt-8 border-t border-stone-100 pt-6">
                  <p className="text-sm font-medium text-stone-900">{t.name}</p>
                  <p className="mt-1 text-xs text-stone-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-stone-400">
              FAQ
            </p>
            <h2 className="text-3xl font-light text-stone-900 md:text-4xl">
              Common questions.
            </h2>
          </div>

          <div className="divide-y divide-stone-200">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="pr-4 text-base font-medium text-stone-900">
                    {item.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="shrink-0 text-stone-400" />
                  ) : (
                    <ChevronDown size={18} className="shrink-0 text-stone-400" />
                  )}
                </button>
                {openFaq === i && (
                  <p className="mt-4 text-sm leading-relaxed text-stone-500">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Apply Section */}
      <section id="apply" className="bg-stone-950 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-4 text-xs font-medium tracking-widest uppercase text-stone-500">
            Get Started
          </p>
          <h2 className="mb-6 text-3xl font-light text-stone-100 md:text-5xl">
            Ready to elevate how you show up?
          </h2>
          <p className="mb-12 text-base leading-relaxed text-stone-400">
            Apply below and we'll schedule a free consultation to discuss your
            goals, style, and lifestyle. No obligation — just a conversation.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thank you for applying. We'll be in touch within 24 hours.")
            }}
            className="mx-auto max-w-md space-y-5 text-left"
          >
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-stone-500">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full border border-stone-700 bg-stone-900 px-4 py-3.5 text-sm text-stone-100 outline-none placeholder:text-stone-600 focus:border-stone-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-stone-500">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full border border-stone-700 bg-stone-900 px-4 py-3.5 text-sm text-stone-100 outline-none placeholder:text-stone-600 focus:border-stone-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-stone-500">
                What best describes you?
              </label>
              <select className="w-full border border-stone-700 bg-stone-900 px-4 py-3.5 text-sm text-stone-100 outline-none focus:border-stone-500">
                <option value="">Select one</option>
                <option value="founder">Founder / CEO</option>
                <option value="engineer">Engineer / Technical</option>
                <option value="pm">Product / PM</option>
                <option value="vc">Investor / VC</option>
                <option value="exec">Executive / Director</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-stone-500">
                Package Interest
              </label>
              <select className="w-full border border-stone-700 bg-stone-900 px-4 py-3.5 text-sm text-stone-100 outline-none focus:border-stone-500">
                <option value="">Select a package</option>
                <option value="essential">Essential Refresh — $500</option>
                <option value="executive">Executive Upgrade — $1,500</option>
                <option value="concierge">Concierge Styling — Custom</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-stone-500">
                What are your style goals?
              </label>
              <textarea
                rows={3}
                className="w-full resize-none border border-stone-700 bg-stone-900 px-4 py-3.5 text-sm text-stone-100 outline-none placeholder:text-stone-600 focus:border-stone-500"
                placeholder="Tell us what you're looking to improve..."
              />
            </div>
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 bg-stone-100 py-4 text-xs font-medium tracking-wider uppercase text-stone-950 transition-all hover:bg-white"
            >
              Submit Application
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm font-normal tracking-widest uppercase text-stone-400">
              Styled
            </p>
            <div className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-xs tracking-wide text-stone-500 transition-colors hover:text-stone-300"
                >
                  {link}
                </button>
              ))}
            </div>
            <p className="text-xs text-stone-600">
              &copy; {new Date().getFullYear()} Styled. NYC & SF.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
