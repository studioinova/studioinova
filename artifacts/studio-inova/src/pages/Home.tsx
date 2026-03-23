import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ShieldCheck, CheckCircle2, Smartphone, Cpu, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract background gradient elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-accent/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Innovating the Future
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto mb-6 leading-tight">
              Building Digital Products for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Long-term Trust</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Studio Inova is a digital studio focused on building simple apps, AI-powered tools, and clean digital experiences for the future.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group">
                Explore Our Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 hover:bg-secondary">
                Partner with us
              </Button>
            </Link>
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
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Simple</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strip away the unnecessary. Our tools are designed with clean, intuitive interfaces that anyone can pick up and use immediately.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Effective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Functionality is our baseline. We solve real problems with calculated steps, ensuring every feature provides tangible value.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trusted</h3>
                <p className="text-muted-foreground leading-relaxed">
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
              <div className="bg-card rounded-2xl border border-border p-8 shadow-xl relative overflow-hidden">
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

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground -z-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Meaningful?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you need a bespoke application or want to leverage our existing AI tools, we're here to help you succeed.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 h-14 text-base bg-primary text-white hover:bg-primary/90 border-0 shadow-[0_0_20px_rgba(0,122,255,0.4)] hover:shadow-[0_0_30px_rgba(0,122,255,0.6)] transition-all">
                Start a Conversation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
