import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, CheckCircle2, Smartphone, Cpu, Palette, Search, Paintbrush, Code2, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blurred background layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            transform: "scale(1.05)",
          }}
        />

        {/* White overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "rgba(255, 255, 255, 0.4)" }} />

        {/* Sharp text content in front */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-black uppercase mb-4 leading-none">
              STUDIO INOVA
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <p className="text-lg md:text-xl text-black/70 font-light tracking-wide">
              Innovation Starts Here
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Description Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <p className="md:text-2xl font-light text-[16px] text-[#4a5568]">
              Studio Inova is a digital studio focused on building simple apps, AI-powered tools, and clean digital experiences for the future.
            </p>
          </FadeIn>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We measure our success by the clarity and utility we bring to our users.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="inova-card p-8 border border-border/40 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Simple</h3>
                <p className="text-muted-foreground">
                  We strip away the unnecessary. Our tools are designed with clean, intuitive interfaces that anyone can pick up and use immediately.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="inova-card p-8 border border-border/40 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Effective</h3>
                <p className="text-muted-foreground">
                  Functionality is our baseline. We solve real problems with calculated steps, ensuring every feature provides tangible value.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="inova-card p-8 border border-border/40 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trusted</h3>
                <p className="text-muted-foreground">
                  Engineered for long-term trust. We prioritize your privacy and data security above all, building platforms you can rely on for years.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Studio Inova operates at the intersection of modern design and advanced technology. We build solutions that feel effortless to the user while performing complex tasks under the hood.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center text-primary">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">App Development</h4>
                    <p className="text-muted-foreground">Modern, responsive web and mobile applications built on robust, scalable architectures.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center text-primary">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">AI-Based Tools</h4>
                    <p className="text-muted-foreground">Intelligent utilities leveraging machine learning to automate and simplify complex workflows.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center text-primary">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Digital Branding</h4>
                    <p className="text-muted-foreground">Cohesive identity design that establishes trust and authority in competitive markets.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>

            <FadeIn direction="right" className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-accent/50 rounded-[2rem] -z-10 transform rotate-3"></div>
              <div className="inova-card border border-border/40 p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-300"></div>
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe in clarity, privacy, and long-term value over short-term trends. Every product we launch goes through rigorous refinement to ensure it meets our standard of excellence.
                </p>
                <div className="p-6 bg-secondary rounded-xl border border-border/50">
                  <p className="text-sm font-medium italic text-foreground border-l-2 border-primary pl-4">
                    "We don't just build features; we build trust through consistent, reliable performance."
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Column */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#007AFF]/10 to-transparent rounded-[2rem] -z-10" />
                <img
                  src="/our-approach.jpg"
                  alt="Studio Inova workspace — design, code and deploy"
                  className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg border border-border/40 px-5 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#007AFF] flex items-center justify-center text-white">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">End-to-end</p>
                    <p className="text-sm font-bold text-black leading-none">From idea to launch</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Steps Column */}
            <FadeIn direction="right">
              <p className="text-sm font-semibold text-[#007AFF] uppercase tracking-widest mb-3">How We Work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F3C] mb-4">Our Approach</h2>
              <p className="text-[#4A5568] mb-10">
                Every Studio Inova product follows the same disciplined four-step process — ensuring what we ship is polished, purposeful, and built to last.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    icon: Search,
                    title: "Discovery",
                    desc: "We listen deeply to understand your vision, goals, and target audience before writing a single line of code.",
                  },
                  {
                    step: "02",
                    icon: Paintbrush,
                    title: "Design",
                    desc: "We craft clean, intuitive interfaces that feel effortless — every pixel aligned with your brand identity and user needs.",
                  },
                  {
                    step: "03",
                    icon: Code2,
                    title: "Development",
                    desc: "We build robust, scalable solutions using modern, proven technologies — stable, secure, and fast.",
                  },
                  {
                    step: "04",
                    icon: Rocket,
                    title: "Deployment",
                    desc: "We launch with precision and stay involved — monitoring, maintaining, and iterating so your product keeps improving.",
                  },
                ].map(({ step, icon: Icon, title, desc }) => (
                  <div
                    key={step}
                    className="inova-card flex items-start gap-5 p-5 border border-border/30"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#007AFF] tracking-widest">{step}</span>
                        <h3 className="text-base font-bold text-[#0D1F3C]">{title}</h3>
                      </div>
                      <p className="text-sm text-[#4A5568]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

    </div>
  );
}
