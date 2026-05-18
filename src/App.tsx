import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  GlassWater,
  Menu,
  Minus,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const NAV_LINKS = ['About', 'Philosophy', 'Styles', 'FAQ']

const WARDROBE_CATEGORIES = [
  { name: 'Work', desc: 'Boardrooms to standups', icon: Briefcase },
  { name: 'Casual', desc: 'Effortless everyday', icon: Sun },
  { name: 'Night Out', desc: 'Dates, dinners & drinks', icon: GlassWater },
  { name: 'Formal Events', desc: 'Galas, weddings & more', icon: Sparkles },
]

const STYLE_PICKS = [
  {
    title: 'ALD Crest Quarter-Zip',
    brand: 'Aim\u00e9 Leon Dore',
    desc: 'The perfect layering piece for spring.',
    img: '/images/md-polo-sweater.webp',
    link: 'https://www.aimeleondore.com/products/crest-quarter-zip-pullover-14',
  },
  {
    title: 'Cotton Knit Polo Sweater',
    brand: 'Massimo Dutti',
    desc: 'Refined knit polo — office to evening.',
    img: '/images/ald-pullover.jpg',
    link: 'https://www.massimodutti.com/us/cotton-knit-polo-sweater-l01210201',
  },
  {
    title: 'Kenton Cotton Pants',
    brand: 'Frankie Shop',
    desc: 'Relaxed tailoring in charcoal cotton.',
    img: '/images/frankie-pants.webp',
    link: 'https://thefrankieshop.com/products/kenton-cotton-pants-charcoal',
  },
  {
    title: 'Relaxed Linen Shirt',
    brand: 'COS',
    desc: 'Khaki linen \u2014 effortless warm-weather staple.',
    img: '/images/cos-linen-shirt.avif',
    link: 'https://www.cos.com/en-us/men/menswear/shirts/casualshirts/product/relaxed-linen-shirt-khaki-1146543021',
  },
  {
    title: 'Dice Lo Sneaker',
    brand: 'Axel Arigato',
    desc: 'Minimalist leather sneaker \u2014 the everyday essential.',
    img: '/images/axel-arigato-dice.webp',
    link: 'https://axelarigato.com/men/footwear/dice/dice-lo-sneaker-f4285002',
  },
  {
    title: 'The Quiet Power Blazer',
    brand: 'COS',
    desc: 'Unstructured, breathable, board-room ready.',
    img: '/images/style1.jpg',
    link: '',
  },
  {
    title: 'Elevated Essentials Tee',
    brand: 'Reigning Champ',
    desc: 'Premium basics that anchor every outfit.',
    img: '/images/style2.jpg',
    link: '',
  },
  {
    title: 'Weekend to Dinner',
    brand: 'APC',
    desc: 'One look that transitions seamlessly.',
    img: '/images/style3.jpg',
    link: '',
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
    q: 'What options do you offer?',
    a: "We're flexible depending on your needs. Whether you want a few email or text recommendations each week, in-person styling sessions, or an at-home try-on and feedback session to make better use of what you have.",
  },
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
    a: 'Most clients see a complete wardrobe transformation within 1\u20132 weeks. Ongoing styling relationships are available for those who want continued support.',
  },
  {
    q: "I have zero fashion sense. Is that okay?",
    a: "That's exactly who we work with. You don't need to know anything about fashion. That's our job.",
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onResize = () => setVisibleCount(window.innerWidth >= 768 ? 3 : 1)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIdx = Math.max(0, STYLE_PICKS.length - visibleCount)

  const nextSlide = useCallback(
    () => setCarouselIdx((prev) => Math.min(prev + 1, maxIdx)),
    [maxIdx]
  )
  const prevSlide = useCallback(
    () => setCarouselIdx((prev) => Math.max(prev - 1, 0)),
    []
  )

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-warm-50 font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-warm-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <button
            onClick={() => scrollTo('hero')}
            className="text-lg font-normal tracking-widest uppercase text-warm-100"
          >
            Uniform
          </button>

          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-xs font-medium tracking-wider uppercase text-warm-400 transition-colors hover:text-warm-100"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('apply')}
              className="border border-warm-100 px-7 py-2.5 text-xs font-medium tracking-wider uppercase text-warm-100 transition-all hover:bg-warm-100 hover:text-warm-950"
            >
              Apply Now
            </button>
          </div>

          <button
            className="text-warm-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-warm-800 bg-warm-950 px-6 pb-6 pt-4 lg:hidden">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="block w-full py-3 text-left text-sm font-medium tracking-wide text-warm-300"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('apply')}
              className="mt-4 w-full border border-warm-100 py-3 text-xs font-medium tracking-wider uppercase text-warm-100"
            >
              Apply Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center bg-warm-950 pt-28 pb-16 md:pt-36 md:pb-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-400">
              Personal styling for ambitious men in tech — by Uniform
            </p>
            <h1 className="mb-6 font-serif text-4xl leading-tight font-light tracking-tight text-warm-100 md:text-6xl lg:text-7xl">
              Look like the person{' '}
              <span className="italic text-warm-300">
                you're becoming.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed font-light text-warm-400">
              Build a wardrobe that feels confident, effortless, and
              distinctly your own.
            </p>
            <button
              onClick={() => scrollTo('apply')}
              className="group inline-flex items-center gap-3 bg-warm-100 px-10 py-4 text-xs font-medium tracking-wider uppercase text-warm-950 transition-all hover:bg-white"
            >
              Apply Now
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="bg-warm-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-medium tracking-widest uppercase text-warm-400">
            Meet the Founders
          </p>
          <h2 className="mb-6 font-serif text-2xl font-light text-warm-900 md:text-3xl">
            Founded by Claudia and Jenn.
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-warm-600">
            <p>
              We met five years ago through the tech world and became close
              friends over a shared appreciation for design, culture, and
              personal style. Spending years around founders, investors, and
              operators, we kept seeing the same thing: brilliant, successful
              men who had mastered every part of their lives — except the part
              that shaped first impressions and everyday confidence.
            </p>
            <p>
              Many wanted to feel more confident and put together, but didn't
              know where to start — or simply didn't have the time. Over the
              years, we naturally became the people friends and family turned to
              for outfit advice, wardrobe refreshes, and help finding pieces
              that made them feel confident, polished, and more like themselves.
            </p>
            <p>
              Uniform was created to bring that same thoughtful, personalized
              approach to ambitious men looking to build a wardrobe that feels
              effortless, refined, and aligned with the life they're building.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Emotional Resonance */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="mb-6 text-xs font-medium tracking-widest uppercase text-warm-400">
            Sound familiar?
          </p>
          <h2 className="mb-12 font-serif text-3xl font-light leading-snug text-warm-900 md:text-4xl">
            You've optimized everything in your career.{' '}
            <span className="text-warm-400">
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
                <Minus size={16} className="mt-1 shrink-0 text-warm-300" />
                <p className="text-base leading-relaxed text-warm-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-warm-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="Stylist portrait"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://placehold.co/800x1000/2A241E/B8A68E/png?text=About'
                }}
              />
            </div>

            <div>
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-400">
                About
              </p>
              <h2 className="mb-8 font-serif text-3xl font-light text-warm-900 md:text-4xl">
                Built for builders.
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-warm-500">
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

          {/* Testimonials within About */}
          <div className="mt-24 border-t border-warm-200 pt-24">
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-400">
              Results
            </p>
            <h3 className="mb-12 font-serif text-3xl font-light text-warm-900 md:text-4xl">
              From our clients.
            </h3>
            <div className="grid gap-8 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col border border-warm-200 bg-white p-10"
                >
                  <p className="flex-1 text-base leading-relaxed text-warm-600">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 border-t border-warm-100 pt-6">
                    <p className="text-sm font-medium text-warm-900">{t.name}</p>
                    <p className="mt-1 text-xs text-warm-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Philosophy */}
      <section id="philosophy" className="bg-warm-950 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-500">
                Our Philosophy
              </p>
              <h2 className="mb-8 font-serif text-3xl font-light text-warm-100 md:text-4xl">
                Confidence through simplicity.
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-warm-400">
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
                    <p className="text-sm font-medium text-warm-200">{item.label}</p>
                    <p className="mt-1 text-xs text-warm-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <img
                src="/images/transform.jpg"
                alt="Elevated menswear aesthetic"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://placehold.co/800x1000/2A241E/B8A68E/png?text=Philosophy'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* For All Your Wardrobe Needs */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-400">
              Services
            </p>
            <h2 className="font-serif text-3xl font-light text-warm-900 md:text-4xl">
              For all your wardrobe needs.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WARDROBE_CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className="group flex flex-col items-center border border-warm-200 bg-warm-50 p-10 text-center transition-all hover:border-warm-400 hover:bg-warm-100"
              >
                <cat.icon
                  size={28}
                  className="mb-5 text-warm-400 transition-colors group-hover:text-warm-900"
                  strokeWidth={1.5}
                />
                <h3 className="text-base font-medium tracking-wide text-warm-900">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm text-warm-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles We Love */}
      <section id="styles" className="bg-warm-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-400">
                This Spring
              </p>
              <h2 className="font-serif text-3xl font-light text-warm-900 md:text-4xl">
                Styles we love.
              </h2>
            </div>
            <div className="hidden gap-3 md:flex">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center border border-warm-300 text-warm-600 transition-colors hover:bg-warm-900 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center border border-warm-300 text-warm-600 transition-colors hover:bg-warm-900 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  visibleCount === 1
                    ? `translateX(calc(-${carouselIdx} * (100% + 1.5rem)))`
                    : `translateX(calc(-${carouselIdx} * (33.3333% + 0.5rem)))`,
              }}
            >
              {STYLE_PICKS.map((pick) => (
                <div
                  key={pick.title}
                  className="w-full shrink-0 md:w-1/3"
                  style={{ minWidth: visibleCount === 1 ? '100%' : undefined }}
                >
                  <div className="overflow-hidden bg-white">
                    <img
                      src={pick.img}
                      alt={pick.title}
                      className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://placehold.co/600x600/2A241E/B8A68E/png?text=Style'
                      }}
                    />
                    <div className="p-6">
                      {pick.brand && (
                        <p className="mb-1 text-xs font-medium tracking-wider uppercase text-warm-400">
                          {pick.brand}
                        </p>
                      )}
                      <h3 className="text-base font-medium text-warm-900">
                        {pick.title}
                      </h3>
                      <p className="mt-1 text-sm text-warm-500">{pick.desc}</p>
                      {pick.link && (
                        <a
                          href={pick.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-warm-900 transition-colors hover:text-warm-600"
                        >
                          Shop Now
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2 md:hidden">
            {Array.from({ length: maxIdx + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIdx(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === carouselIdx ? 'bg-warm-900' : 'bg-warm-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-400">
                FAQ
              </p>
              <h3 className="font-serif text-3xl font-light text-warm-900 md:text-4xl">
                Common questions.
              </h3>
            </div>

            <div className="divide-y divide-warm-200">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="py-6">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="pr-4 text-base font-medium text-warm-900">
                      {item.q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp size={18} className="shrink-0 text-warm-400" />
                    ) : (
                      <ChevronDown size={18} className="shrink-0 text-warm-400" />
                    )}
                  </button>
                  {openFaq === i && (
                    <p className="mt-4 text-sm leading-relaxed text-warm-500">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Final CTA / Apply Section */}
      <section id="apply" className="bg-warm-950 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-4 text-xs font-medium tracking-widest uppercase text-warm-500">
            Get Started
          </p>
          <h2 className="mb-6 font-serif text-3xl font-light text-warm-100 md:text-5xl">
            Ready to elevate how you show up?
          </h2>
          <p className="mb-12 text-base leading-relaxed text-warm-400">
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
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-warm-500">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full border border-warm-700 bg-warm-900 px-4 py-3.5 text-sm text-warm-100 outline-none placeholder:text-warm-600 focus:border-warm-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-warm-500">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full border border-warm-700 bg-warm-900 px-4 py-3.5 text-sm text-warm-100 outline-none placeholder:text-warm-600 focus:border-warm-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-warm-500">
                What best describes you?
              </label>
              <select className="w-full border border-warm-700 bg-warm-900 px-4 py-3.5 text-sm text-warm-100 outline-none focus:border-warm-500">
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
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-warm-500">
                What are you interested in?
              </label>
              <select className="w-full border border-warm-700 bg-warm-900 px-4 py-3.5 text-sm text-warm-100 outline-none focus:border-warm-500">
                <option value="">Select one</option>
                <option value="text-recs">Weekly text / email recommendations</option>
                <option value="in-person">In-person styling sessions</option>
                <option value="at-home">At-home try-on & feedback</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-warm-500">
                What are your style goals?
              </label>
              <textarea
                rows={3}
                className="w-full resize-none border border-warm-700 bg-warm-900 px-4 py-3.5 text-sm text-warm-100 outline-none placeholder:text-warm-600 focus:border-warm-500"
                placeholder="Tell us what you're looking to improve..."
              />
            </div>
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 bg-warm-100 py-4 text-xs font-medium tracking-wider uppercase text-warm-950 transition-all hover:bg-white"
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
      <footer className="border-t border-warm-800 bg-warm-950 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm font-normal tracking-widest uppercase text-warm-400">
              Uniform
            </p>
            <div className="flex gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-xs tracking-wide text-warm-500 transition-colors hover:text-warm-300"
                >
                  {link}
                </button>
              ))}
            </div>
            <p className="text-xs text-warm-600">
              &copy; {new Date().getFullYear()} Uniform Styling. NYC & SF.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
