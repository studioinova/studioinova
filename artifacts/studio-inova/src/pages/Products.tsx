import { useState, useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check, BookOpen, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DETECT_AI_SLIDES = [
  { src: "/detect-ai-slide-1.png", alt: "Detect AI — Main Interface" },
  { src: "/detect-ai-slide-2.png", alt: "Detect AI — AI Text Detector" },
  { src: "/detect-ai-slide-3.png", alt: "Detect AI — Scan Results" },
  { src: "/detect-ai-slide-4.png", alt: "Detect AI — Scan History" },
];

function DetectAICarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent(i => (i === 0 ? DETECT_AI_SLIDES.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === DETECT_AI_SLIDES.length - 1 ? 0 : i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 select-none">
      {/* Phone frame */}
      <div className="relative flex items-center justify-center w-full">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
          style={{ background: "#007AFF" }}
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Slide */}
        <div
          className="mx-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          style={{ width: "210px", aspectRatio: "9/16", background: "#fff" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={DETECT_AI_SLIDES[current].src}
            alt={DETECT_AI_SLIDES[current].alt}
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ display: "block" }}
          />
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-0 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-opacity hover:opacity-80"
          style={{ background: "#007AFF" }}
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {DETECT_AI_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              background: i === current ? "#007AFF" : "rgba(0,122,255,0.25)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools engineered for clarity, accuracy, and long-term trust.
          </p>
        </FadeIn>

        {/* ── Our Apps ── */}
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Apps</h2>
        </FadeIn>

        <div className="flex flex-col gap-16">
          {/* Featured Product: Detect AI */}
          <FadeIn>
            <div className="inova-card overflow-hidden border border-border/40 flex flex-col lg:flex-row group">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                <Badge className="w-fit mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                  Live & Available
                </Badge>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/detect-ai-logo.jpg"
                    alt="Detect AI"
                    className="w-12 h-12 rounded-xl object-cover shadow-md"
                  />
                  <h2 className="text-3xl font-bold">Detect AI — Detect what's real or fake</h2>
                </div>

                <div
                  className="detect-ai-scroll mb-8 pr-3 space-y-5"
                  style={{ height: "250px", overflowY: "auto" }}
                >
                  {/* Description */}
                  <div className="text-sm leading-relaxed space-y-4">
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>What it is — </span>
                      <span className="text-muted-foreground">Detect AI is a state-of-the-art security tool developed by Studio Inova to verify digital authenticity. It helps students, educators, journalists, and enterprises confirm whether content was created by a human or an AI.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>What it does — </span>
                      <span className="text-muted-foreground">It scans across multiple formats. For <strong className="text-foreground">Text</strong>, it identifies patterns common in LLMs like GPT-4. For <strong className="text-foreground">Images &amp; Videos</strong>, it looks for pixel inconsistencies and deepfake signatures that the human eye cannot detect.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>How it works — </span>
                      <span className="text-muted-foreground">Using advanced neural networks, our engine analyzes linguistic variance and metadata. It doesn't just guess — it calculates the probability of AI involvement through billions of data points, returning a precise confidence score.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>The Process — </span>
                      <span className="text-muted-foreground">Simply paste your content or upload a file. Our Deep Scan engine runs a 3-layer check: <strong className="text-foreground">Linguistic Analysis</strong>, <strong className="text-foreground">Metadata Verification</strong>, and <strong className="text-foreground">Pattern Recognition</strong> — all in seconds.</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-1">
                    {[
                      "AI Text Detection: Analyze articles, essays, and reports.",
                      "Image & Video Scan: Identify deepfakes and AI-generated visuals.",
                      "High Accuracy: Powered by advanced neural networks for 99%+ precision.",
                      "Simple Interface: Minimalist and easy-to-use UI for everyone.",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground font-medium">
                        <div className="mr-3 mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(0,122,255,0.12)" }}>
                          <Check className="w-3 h-3" style={{ color: "#007AFF" }} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-fit rounded-full px-8" style={{ background: "#007AFF" }} asChild>
                  <a href="https://detect-ai-official.lovable.app/" target="_blank" rel="noopener noreferrer">
                    Open Detect AI <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Carousel Area */}
              <div className="lg:w-1/2 bg-slate-50 p-8 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-border min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <DetectAICarousel />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Coming Soon: AI Manga Translator */}
          <FadeIn delay={0.1}>
            <div className="inova-card overflow-hidden border border-border/40 flex flex-col lg:flex-row-reverse group">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                <Badge className="w-fit mb-6 bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
                  Coming Soon
                </Badge>
                
                <h2 className="text-3xl font-bold mb-4">AI Manga Translator</h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  An upcoming AI-powered Manga and Ebook translation tool. Breaking language barriers for readers and creators worldwide while preserving original intent and context.
                </p>

                <ul className="space-y-3 mb-8">
                  {["Multi-language Support", "Intelligent Manga Panel Detection", "Context-aware Translation Engine"].map((feature, i) => (
                    <li key={i} className="flex items-center text-foreground font-medium opacity-70">
                      <div className="mr-3 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-fit rounded-full px-8 border-2" disabled>
                  Join Waitlist
                </Button>
              </div>

              {/* Mockup Area */}
              <div className="lg:w-1/2 bg-slate-900 p-8 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-r border-border">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 pointer-events-none" />
                
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/40 backdrop-blur-[2px]">
                  <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold shadow-2xl backdrop-blur-md">
                    In Development
                  </div>
                </div>

                <div className="w-full max-w-sm aspect-[3/4] bg-slate-800 rounded-xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden relative z-10 opacity-50">
                  <div className="p-4 border-b border-slate-700 flex justify-between">
                    <div className="w-20 h-4 bg-slate-600 rounded"></div>
                    <div className="w-6 h-4 bg-slate-600 rounded"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-2 p-2">
                    <div className="col-span-2 row-span-1 bg-slate-700 rounded border border-slate-600"></div>
                    <div className="col-span-1 row-span-2 bg-slate-700 rounded border border-slate-600"></div>
                    <div className="col-span-1 row-span-1 bg-slate-700 rounded border border-slate-600"></div>
                    <div className="col-span-1 row-span-1 bg-slate-700 rounded border border-slate-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* ── Academy ── */}
        <div className="mt-24">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Academy</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="inova-card overflow-hidden border border-border/40 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12">
              <div className="w-48 h-64 shrink-0 bg-white rounded-lg shadow-xl border border-border flex flex-col items-center justify-center text-center p-6 relative overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 w-full h-2 bg-primary"></div>
                <GraduationCap className="w-12 h-12 text-primary/40 mb-4" />
                <h4 className="font-bold text-lg leading-tight mb-2">Zero Knowledge<br/>To App Builder</h4>
                <p className="text-xs text-muted-foreground mt-auto">By Sazid</p>
              </div>

              <div>
                <Badge className="w-fit mb-4 bg-[#007AFF]/10 text-[#007AFF] border-[#007AFF]/20">
                  E-book
                </Badge>
                <h3 className="text-2xl font-bold mb-3">Inova Academy</h3>
                <p className="text-muted-foreground mb-6 max-w-xl leading-relaxed">
                  We offer an educational ebook designed to empower beginners with AI knowledge. It teaches you how to master AI tools and build products with confidence, moving from zero technical background to a creator mindset.
                </p>
                <Button variant="default" className="rounded-full">
                  Get the E-book
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
