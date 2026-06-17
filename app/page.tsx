// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx — PHASE 1: Structural Wireframe Shell
// Sections are intentionally inline for zero-dependency Phase 1 delivery.
// Search "TODO Phase X" to locate all placeholders and future wiring points.
// ─────────────────────────────────────────────────────────────────────────────

import {
  ArrowRight,
  Menu,
  ChevronRight,
  MapPin,
  Users,
  Trophy,
  Building2,
  Target,
  Layers,
  Mail,
  Phone,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Music2,
  Coffee,
  Smartphone,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ═══════════════════════════════════════════════════════════
          NAVBAR
          TODO Phase 3: Add mobile drawer + scroll-aware background
      ═══════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo — TODO Phase 2: Replace with final SVG logo file */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <div className="absolute inset-0 bg-amber-500 rounded-sm rotate-6" />
                <div className="absolute inset-0 bg-slate-950 rounded-sm m-[3px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy size={14} className="text-amber-500" />
                </div>
              </div>
              <span className="font-display font-bold text-base tracking-tight">
                SKYPARK<span className="text-amber-500">.</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Vision",      href: "#vision" },
                { label: "Facilities",  href: "#facilities" },
                { label: "Kendy Token", href: "#token" },
                { label: "Gallery",     href: "#gallery" },
                { label: "Investors",   href: "#invest" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              
              <a  href="#contact"
                className="hidden md:block text-sm text-slate-400 hover:text-amber-400 transition-colors"
              >
                Investor Deck
              </a>
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold px-5 py-2 rounded transition-colors"
              >
                Partner With Us
              </a>
              {/* TODO Phase 3: Wire up mobile drawer */}
              <button className="md:hidden text-slate-400 hover:text-white transition-colors p-1">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          Signature element: amber court-lines CSS grid overlay
          TODO Phase 2: Replace background placeholder with
          <Image src="/renders/hero.webp" alt="..." fill
          className="object-cover" priority />
      ═══════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex flex-col">

        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-800/30" />

          {/* ── Court-lines grid: signature design element ── */}
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245,158,11,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Horizontal legibility gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
          {/* Bottom merge gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

          {/* Right-side image placeholder (desktop only) */}
          <div className="absolute inset-0 hidden md:flex items-center justify-end pr-12 lg:pr-20">
            <div className="w-[440px] lg:w-[560px] aspect-video bg-slate-800/25 border border-slate-700/30 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 border border-slate-600/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 size={18} className="text-slate-500" />
                </div>
                <p className="text-slate-600 text-xs font-mono">HERO RENDER PLACEHOLDER</p>
                <p className="text-slate-700 text-xs mt-1">1920 × 1080 · AI Architectural Render</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex-1 flex flex-col justify-center pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">

              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-400 text-xs font-mono tracking-[0.15em] uppercase">
                  The Kendy Initiative · Building Africa's Playgrounds
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                Community Parks.<br />
                Built for Africa.<br />
                <span className="text-amber-500">Free. For All.</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
                SKYPARK designs and builds world-class public sports parks across
                Africa's major cities — free to access, community-owned, and built
                to last generations.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#invest"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded text-sm transition-all group"
                >
                  View Investment Opportunity
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#facilities"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded text-sm transition-all"
                >
                  Explore Kendy Parks
                </a>
              </div>
            </div>

            {/* Stats row — 2 real data points from brief */}
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap gap-8 sm:gap-16">
              {[
                { value: "—",   label: "Kendy Parks in Development" },
                { value: "5",   label: "Phase 1 Cities" },
                { value: "30+", label: "Cities Targeted by 2035" },
                { value: "—",   label: "Youth Reached Daily" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display text-3xl font-bold">{stat.value}</span>
                  <span className="text-slate-500 text-xs uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TICKER STRIP — Signature brand element
          TODO Phase 3: Animate with CSS @keyframes marquee
      ═══════════════════════════════════════════════════════════ */}
      <div className="border-y border-amber-500/15 bg-amber-500/[0.04] py-3 overflow-hidden">
        <div className="flex gap-10 items-center whitespace-nowrap px-6">
          {[
            "Basketball Courts", "✦",
            "Football Turf",     "✦",
            "Skating Areas",     "✦",
            "Tennis Courts",     "✦",
            "Dancing Sections",  "✦",
            "The Kendy Token",   "✦",
            "Free Access For All","✦",
            "Pan-African Rollout","✦",
          ].map((item, i) => (
            <span
              key={i}
              className={`text-xs font-mono tracking-[0.18em] uppercase ${
                item === "✦" ? "text-amber-500" : "text-slate-500"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          VISION SECTION
          TODO Phase 2: Replace image placeholder with AI render
          TODO Phase 2: Replace placeholder copy with final text
      ═══════════════════════════════════════════════════════════ */}
      <section id="vision" className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left: Image placeholder */}
            <div className="relative order-2 lg:order-1">
              {/* TODO Phase 2: Replace with:
                  <Image src="/renders/vision.webp" alt="Kendy Park overview"
                  fill className="object-cover rounded-2xl" /> */}
              <div className="aspect-[4/3] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-12 h-12 border border-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe size={20} className="text-slate-600" />
                  </div>
                  <p className="text-slate-600 text-xs font-mono">VISION IMAGE PLACEHOLDER</p>
                  <p className="text-slate-700 text-xs mt-1">1200 × 900 · Community Overview Render</p>
                </div>
              </div>
              {/* Decorative corner frames */}
              <div className="absolute -bottom-5 -right-5 w-44 h-44 border border-amber-500/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-44 h-44 border border-amber-500/[0.06] rounded-2xl -z-10" />
              {/* Floating stat card — TODO Phase 2: Replace "—" */}
              <div className="absolute -top-5 -right-5 bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 hidden lg:block shadow-xl">
                <p className="text-amber-500 font-display font-bold text-2xl">—</p>
                <p className="text-slate-500 text-xs mt-0.5">Active Parks</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] mb-5 block">
                Our Vision
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Strong Communities<br />
                <span className="text-slate-400">Are Built Where<br />People Play.</span>
              </h2>
              {/* TODO Phase 2: Replace both paragraphs with final approved copy */}
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-5">
                Placeholder — SKYPARK's mission: to design, build, and maintain
                high-quality public spaces that encourage active lifestyles, nurture
                talent, and strengthen the social fabric of African cities.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                Placeholder — The Kendy Initiative is SKYPARK's Pan-African flagship
                program. Each Kendy Park is co-designed with local government,
                artists, and youth councils to reflect the culture of its city.
              </p>

              {/* 3 highlight points */}
              <div className="space-y-5">
                {[
                  {
                    title: "Community-First Design",
                    desc: "Every Kendy Park is co-designed with local government, youth councils, and artists to reflect each city's identity.",
                  },
                  {
                    title: "Free Access, Always",
                    desc: "The Kendy Token ensures 100% free access for every resident, school, and local club — no fees, no barriers.",
                  },
                  {
                    title: "Pan-African Scale",
                    desc: "5 cities in Phase 1, expanding to 30+ major African cities by 2035 through a blended finance model.",
                  },
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-amber-500/60 transition-colors">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{point.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FACILITIES SECTION — 6 cards, 2×3 grid
          TODO Phase 2: Replace each card image placeholder with
          <Image src="/renders/[facility].webp" fill ... />
      ═══════════════════════════════════════════════════════════ */}
      <section id="facilities" className="py-24 lg:py-32 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] mb-5 block">
                What's Inside a Kendy Park
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Six Spaces.<br />
                <span className="text-slate-400">One Community.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed md:text-right">
              Every Kendy Park is a complete recreation hub — six world-class
              facilities in one accessible, free public space.
            </p>
          </div>

          {/* 6-card grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                tag: "01",
                name: "Basketball Court",
                spec: "FIBA-standard, floodlit for evening leagues",
                icon: Target,
                features: ["FIBA markings", "LED floodlights", "Spectator seating", "Perimeter fencing"],
                imgNote: "1200 × 800 · Aerial Render",
              },
              {
                tag: "02",
                name: "7-Aside Football Turf",
                spec: "FIFA-quality artificial turf for matches & academies",
                icon: Layers,
                features: ["FIFA-grade turf", "Stadium lighting", "Team dugouts", "Electronic scoreboard"],
                imgNote: "1200 × 800 · Aerial Render",
              },
              {
                tag: "03",
                name: "Skating Area",
                spec: "Smooth-surface rink for skate, rollerblade & roller sports",
                icon: Zap,
                features: ["Smooth concrete", "Safety barriers", "Beginner zones", "Evening lighting"],
                imgNote: "1200 × 800 · Ground Render",
              },
              {
                tag: "04",
                name: "Tennis Court",
                spec: "Competition-grade hard court for casual play & tournaments",
                icon: Shield,
                features: ["ITF-grade surface", "Shade canopies", "Scoreboard", "Night lighting"],
                imgNote: "1200 × 800 · Aerial Render",
              },
              {
                tag: "05",
                name: "Dancing Section",
                spec: "Open-air platform with sound hookup for dance & fitness",
                icon: Music2,
                features: ["Sound system hookup", "Open-air stage", "Fitness classes", "Cultural events"],
                imgNote: "1200 × 800 · Ground Render",
              },
              {
                tag: "06",
                name: "Chilling Area",
                spec: "Landscaped green zones with seating, shade & Wi-Fi",
                icon: Coffee,
                features: ["Landscaped seating", "Shade structures", "Free Wi-Fi", "Water points"],
                imgNote: "1200 × 800 · Landscape Render",
              },
            ].map((facility) => {
              const FacilityIcon = facility.icon;
              return (
                <div
                  key={facility.tag}
                  className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-amber-500/20 transition-all duration-300 flex flex-col"
                >
                  {/* Image placeholder — TODO Phase 2: Replace with <Image> */}
                  <div className="aspect-[3/2] bg-slate-800/50 border-b border-slate-800 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10">
                      <FacilityIcon size={22} className="text-slate-600 mx-auto mb-2" />
                      <p className="text-slate-700 text-xs font-mono">{facility.imgNote}</p>
                    </div>
                    <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/[0.03] transition-all duration-500" />
                  </div>

                  {/* Card content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-amber-500 text-xs font-mono">{facility.tag}</span>
                      <ChevronRight
                        size={14}
                        className="text-slate-700 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">{facility.name}</h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">{facility.spec}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {facility.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-slate-800 border border-slate-700/50 text-slate-400 px-2.5 py-1 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          KENDY TOKEN SECTION
          Key investor differentiator — free access model.
          TODO Phase 2: Replace token card with actual app UI mockup render
      ═══════════════════════════════════════════════════════════ */}
      <section id="token" className="py-24 lg:py-32 border-t border-slate-800/50 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left: Token visual */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative">
                {/* TODO Phase 2: Replace with Kendy Token app UI mockup image */}
                <div className="w-72 h-44 bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30 rounded-3xl flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-amber-500/15 border border-amber-500/40 rounded-2xl flex items-center justify-center">
                    <Smartphone size={26} className="text-amber-400" />
                  </div>
                  <div className="text-center">
                    <p className="text-amber-400 font-display font-bold text-lg tracking-wide">
                      KENDY TOKEN
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">Free Digital Community Pass</p>
                  </div>
                </div>
                {/* Ambient glow */}
                <div className="absolute inset-0 rounded-3xl blur-3xl bg-amber-500/10 -z-10 scale-125" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] mb-5 block">
                Access Model
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Kendy Token.<br />
                <span className="text-slate-400">Free. Always.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-4">
                Every Kendy Park is 100% free for anyone holding a Kendy Token —
                a free digital community pass issued to residents, schools, and
                local clubs at no cost.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                The token system manages capacity, ensures security, maintains
                facilities, and gathers community impact data — while keeping
                access permanently free for all.
              </p>

              {/* Token capabilities grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Capacity Management",    icon: Users },
                  { label: "Facility Security",       icon: Shield },
                  { label: "Impact Data Collection",  icon: TrendingUp },
                  { label: "Community Identity",      icon: Globe },
                ].map((item) => {
                  const CapIcon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 hover:border-amber-500/20 transition-colors"
                    >
                      <CapIcon size={14} className="text-amber-500 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GALLERY / CAROUSEL SECTION
          Phase 1: Static horizontal scrollable strip
          TODO Phase 2: Populate with AI renders
          TODO Phase 3: Convert to infinite auto-scroll carousel
      ═══════════════════════════════════════════════════════════ */}
      <section id="gallery" className="py-24 lg:py-32 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] mb-5 block">
            Project Gallery
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              See the Vision<br />
              <span className="text-slate-400">Come to Life.</span>
            </h2>
            {/* TODO Phase 3: Wire up prev/next carousel controls */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-amber-500/40 hover:text-amber-400 transition-all text-sm">
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center text-slate-950 font-bold transition-all text-sm">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Carousel strip */}
        <div className="w-full overflow-x-auto no-scrollbar pb-2">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: "max-content" }}>
            {[
              { id: "01", label: "Kendy Park Nairobi — Basketball Complex" },
              { id: "02", label: "Kendy Park Lagos — Football Turf" },
              { id: "03", label: "Kendy Park Accra — Skating Area" },
              { id: "04", label: "Kendy Park Johannesburg — Tennis Court" },
              { id: "05", label: "Kendy Park Cairo — Community Hub" },
            ].map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[480px] aspect-video bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center hover:border-amber-500/15 transition-all"
              >
                {/* TODO Phase 2: Replace with <Image src={`/renders/gallery-${slide.id}.webp`} fill className="object-cover" /> */}
                <span className="font-display font-bold text-4xl text-slate-800 mb-2">{slide.id}</span>
                <p className="text-slate-700 text-xs font-mono">RENDER PLACEHOLDER</p>
                <p className="text-slate-700 text-xs mt-1 tracking-wide px-4 text-center">
                  {slide.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots — TODO Phase 3: Make interactive */}
        <div className="flex justify-center gap-1.5 mt-7">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all ${
                i === 0 ? "w-8 bg-amber-500" : "w-2 bg-slate-700"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IMPACT STATS SECTION
          2 real data points (5 cities, 30+) from client brief.
          TODO Phase 2: Fill remaining "—" values with real data
      ═══════════════════════════════════════════════════════════ */}
      <section id="impact" className="py-24 border-y border-amber-500/10 bg-amber-500/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] mb-5 block">
              Scale & Impact
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
              Built to Scale.<br />
              <span className="text-slate-400">Built to Last.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "—",  suffix: "",   label: "Kendy Parks in Development", icon: Building2 },
              { stat: "5",  suffix: "",   label: "Phase 1 Cities",             icon: MapPin },
              { stat: "—",  suffix: "K+", label: "Youth Impacted Daily",       icon: Users },
              { stat: "30", suffix: "+",  label: "Cities Targeted by 2035",    icon: Globe },
            ].map((item, i) => {
              const StatIcon = item.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                      <StatIcon size={16} className="text-amber-500" />
                    </div>
                  </div>
                  <div className="font-display text-5xl lg:text-6xl font-bold mb-2">
                    {item.stat}
                    <span className="text-amber-500/60 text-3xl">{item.suffix}</span>
                  </div>
                  <p className="text-slate-500 text-sm">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY IT MATTERS / INVESTOR SECTION
          Right column: Real city data from brief — no placeholder needed.
          TODO Phase 2: Fill investment thesis copy
      ═══════════════════════════════════════════════════════════ */}
      <section id="invest" className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* Left: Content */}
            <div>
              <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] mb-5 block">
                Why It Matters
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Africa's Next Stars<br />
                <span className="text-slate-400">Are on the Streets.<br />Not in Clubs.</span>
              </h2>
              {/* TODO Phase 2: Replace with final investor pitch copy */}
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-10">
                Placeholder — The investment thesis: rising urbanization, the
                sports talent infrastructure gap, public health urgency, and the
                social equity case for permanently free access in Africa's
                fastest-growing cities.
              </p>

              {/* The 4 "Why It Matters" pillars from the brief */}
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  { label: "Youth & Talent Development", icon: Trophy },
                  { label: "Public Health at Scale",     icon: Zap },
                  { label: "Social Equity & Inclusion",  icon: Users },
                  { label: "Urban Regeneration",         icon: Building2 },
                ].map((item) => {
                  const PillarIcon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors"
                    >
                      <PillarIcon size={14} className="text-amber-500 mb-2" />
                      <p className="text-slate-400 text-xs leading-relaxed">{item.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded text-sm transition-all group"
                >
                  Request Investor Deck
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded text-sm transition-all"
                >
                  Schedule Discovery Call
                </a>
              </div>
            </div>

            {/* Right: Scale plan — real data, no placeholder needed */}
            <div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
                <h4 className="font-display font-bold text-lg mb-2 text-white">
                  Scale Plan: City by City
                </h4>
                <p className="text-slate-500 text-sm mb-8">
                  Each park co-designed with local government, artists, and youth councils.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      phase: "Phase 1 · Active",
                      cities: "Nairobi, Lagos, Accra, Johannesburg, Cairo",
                      active: true,
                    },
                    {
                      phase: "Phase 2 · Next",
                      cities: "Kigali, Dar es Salaam, Dakar, Addis Ababa, Kampala",
                      active: false,
                    },
                    {
                      phase: "Phase 3 · 2035",
                      cities: "30+ additional major African cities",
                      active: false,
                    },
                  ].map((row) => (
                    <div
                      key={row.phase}
                      className={`rounded-xl border p-4 transition-colors ${
                        row.active
                          ? "border-amber-500/30 bg-amber-500/5"
                          : "border-slate-800 bg-slate-800/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            row.active ? "bg-amber-500" : "bg-slate-600"
                          }`}
                        />
                        <span
                          className={`text-xs font-mono font-bold ${
                            row.active ? "text-amber-500" : "text-slate-500"
                          }`}
                        >
                          {row.phase}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed pl-3.5">
                        {row.cities}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Dot-grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.025] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(245,158,11,1) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONTACT / PARTNER INQUIRY FORM
          Phase 1: Static layout shell
          TODO Phase 3: Wire inputs + connect to Resend server action
          TODO Phase 4: Set RESEND_API_KEY in .env.local
      ═══════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-slate-900/40 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left: Contact info */}
            <div>
              <span className="text-amber-500 text-xs font-mono uppercase tracking-[0.2em] mb-5 block">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Let's Build<br />
                <span className="text-slate-400">Together.</span>
              </h2>
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-12">
                We invite national governments, city councils, corporates, NGOs,
                sports federations, and foundations to co-invest in Africa's urban
                future. Partners receive city-level impact data, ESG reporting,
                and permanent facility branding.
              </p>

              {/* TODO Phase 4: Replace placeholder emails and phone */}
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Headquarters",      value: "Nairobi, Kenya" },
                  { icon: Mail,   label: "Investor Relations", value: "invest@skypark.africa" },
                  { icon: Phone,  label: "Direct Line",        value: "+254 700 000 000" },
                  { icon: Users,  label: "Partnerships",       value: "partners@skypark.africa" },
                ].map((item, i) => {
                  const ContactIcon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/35 transition-colors">
                        <ContactIcon size={15} className="text-amber-500" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Form shell */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl mb-1">Partner Inquiry</h3>
              <p className="text-slate-500 text-sm mb-8">
                Governments, corporates, NGOs, and investors — let's talk.
              </p>

              <div className="space-y-5">
                {/* TODO Phase 3: Replace each div below with a real <input> */}
                {[
                  { label: "Full Name",           hint: "e.g. John Kamau" },
                  { label: "Email Address",        hint: "e.g. john@organization.com" },
                  { label: "Organization / Fund",  hint: "e.g. Acacia Capital Partners" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-slate-400 text-xs font-medium mb-2 block">
                      {field.label}
                    </label>
                    <div className="h-11 bg-slate-800 border border-slate-700/80 rounded-lg px-4 flex items-center hover:border-slate-600 transition-colors">
                      <span className="text-slate-600 text-sm">{field.hint}</span>
                    </div>
                  </div>
                ))}

                {/* Partnership type — TODO Phase 3: Replace with <select> */}
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-2 block">
                    Partnership Type
                  </label>
                  <div className="h-11 bg-slate-800 border border-slate-700/80 rounded-lg px-4 flex items-center justify-between hover:border-slate-600 transition-colors">
                    <span className="text-slate-600 text-sm">
                      Investor · Government · Corporate CSR · NGO...
                    </span>
                    <ChevronRight size={14} className="text-slate-600 rotate-90 flex-shrink-0" />
                  </div>
                </div>

                {/* Message — TODO Phase 3: Replace with <textarea> */}
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-2 block">Message</label>
                  <div className="h-28 bg-slate-800 border border-slate-700/80 rounded-lg px-4 py-3 hover:border-slate-600 transition-colors flex items-start">
                    <span className="text-slate-600 text-sm">
                      Tell us about your interest in the Kendy Initiative...
                    </span>
                  </div>
                </div>

                {/* Submit — TODO Phase 3: Add server action + Resend integration */}
                <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-sm mt-1">
                  Send Inquiry
                  <ArrowRight size={15} />
                </button>
                <p className="text-slate-600 text-xs text-center">
                  We respond to all partner inquiries within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER
          TODO Phase 4: Confirm legal entity name + final domain
      ═══════════════════════════════════════════════════════════ */}
      <footer className="border-t border-slate-800/50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 mb-14">

            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <div className="absolute inset-0 bg-amber-500 rounded-sm rotate-6" />
                  <div className="absolute inset-0 bg-slate-950 rounded-sm m-[3px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy size={14} className="text-amber-500" />
                  </div>
                </div>
                <span className="font-display font-bold text-base">
                  SKYPARK<span className="text-amber-500">.</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-2 font-medium">
                Free sport. Open doors. Stronger cities.
              </p>
              <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
                A community-focused development company building inclusive public
                recreation spaces across Africa.
              </p>
            </div>

            {/* Link columns */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              {[
                {
                  heading: "Company",
                  links: ["About SKYPARK", "The Kendy Initiative", "Our Cities", "Careers"],
                },
                {
                  heading: "Facilities",
                  links: ["Basketball Courts", "Football Turf", "Skating Areas", "Tennis & Dance"],
                },
                {
                  heading: "Partners",
                  links: ["Investor Deck", "CSR Opportunities", "Government Partners", "Contact Us"],
                },
              ].map((col) => (
                <div key={col.heading}>
                  <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
                    {col.heading}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-slate-500 hover:text-white text-sm transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800/50">
            <p className="text-slate-600 text-xs">
              © 2025 SKYPARK. The Kendy Initiative. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                Terms
              </a>
              <span className="text-slate-800 text-xs font-mono">Phase 1 · v0.1.0</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}