import { useState, useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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
                <Badge className="w-fit mb-6 border-0" style={{ background: "rgba(0,122,255,0.1)", color: "#007AFF" }}>
                  <Sparkles className="w-3 h-3 mr-1.5" />
                  Coming Soon
                </Badge>

                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <img
                      src="/manga-translator-logo.png"
                      alt="AI Manga Translator"
                      className="w-12 h-12 rounded-xl object-cover shadow-sm"
                    />
                    <Sparkles className="absolute -top-1 -right-1 w-3.5 h-3.5" style={{ color: "#007AFF" }} />
                  </div>
                  <h2 className="text-3xl font-bold">AI Manga Translator — Intelligent Manga Translation</h2>
                </div>

                <div
                  className="detect-ai-scroll mb-8 pr-3 space-y-5"
                  style={{ height: "180px", overflowY: "auto" }}
                >
                  <div className="text-sm leading-relaxed space-y-4">
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>The Concept — </span>
                      <span className="text-muted-foreground">A revolutionary tool for Manga, Manhua, and E-book lovers. We don't just translate words; we translate the soul of the story.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>Emotion Engine — </span>
                      <span className="text-muted-foreground">Our AI detects the context and emotion behind every dialogue to ensure the translation feels natural and keeps the original impact.</span>
                    </div>
                    <div>
                      <span className="font-bold" style={{ color: "#007AFF" }}>Era-Specific Translation — </span>
                      <span className="text-muted-foreground">Whether it's a historical Samurai manga or a futuristic Sci-fi, the language style adapts to the era and genre for an authentic reading experience.</span>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-1">
                    {[
                      "Automatic Speech Bubble Detection: No need to select text; our AI finds and replaces text within bubbles.",
                      "Timeline Translation: Keeps track of names and terms for consistency across chapters.",
                      "Age-Verified Filtering: Ensures a safe reading experience for all ages.",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground font-medium opacity-80">
                        <div className="mr-3 mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center" style={{ background: "rgba(0,122,255,0.1)" }}>
                          <Check className="w-3 h-3" style={{ color: "#007AFF" }} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>


              </div>

              {/* Code Editor Mockup */}
              <div className="lg:w-1/2 bg-slate-950 flex items-stretch relative overflow-hidden border-t lg:border-t-0 lg:border-r border-border min-h-[400px]">

                {/* VS Code-style editor */}
                <div className="w-full flex flex-col font-mono text-xs">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e1e1e] border-b border-slate-800">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                    <span className="ml-3 text-slate-400 text-[11px]">manga-status.json — AI Manga Translator</span>
                  </div>

                  {/* Tab bar */}
                  <div className="flex bg-[#252526] border-b border-slate-800">
                    <div className="px-4 py-1.5 bg-[#1e1e1e] border-r border-slate-800 text-slate-300 text-[11px]">manga-status.json</div>
                    <div className="px-4 py-1.5 text-slate-500 text-[11px]">translator-config.json</div>
                  </div>

                  {/* Code body */}
                  <div className="flex-1 p-5 overflow-hidden leading-relaxed" style={{ background: "#1e1e1e" }}>
                    {[
                      { ln: "1",  code: <span className="text-slate-300">{"{"}</span> },
                      { ln: "2",  code: <><span className="text-[#9cdcfe]">&nbsp;&nbsp;"MangaTitle"</span><span className="text-slate-300">: </span><span className="text-[#ce9178]">"Project Samurai"</span><span className="text-slate-300">,</span></> },
                      { ln: "3",  code: <><span className="text-[#9cdcfe]">&nbsp;&nbsp;"CurrentStatus"</span><span className="text-slate-300">: </span><span className="text-[#ce9178]">"UNDER DEVELOPMENT"</span><span className="text-slate-300">,</span></> },
                      { ln: "4",  code: <><span className="text-[#9cdcfe]">&nbsp;&nbsp;"Module"</span><span className="text-slate-300">: </span><span className="text-[#ce9178]">"EMOTION_ENGINE"</span><span className="text-slate-300">,</span></> },
                      { ln: "5",  code: <><span className="text-[#9cdcfe]">&nbsp;&nbsp;"Task"</span><span className="text-slate-300">: </span><span className="text-[#ce9178]">"Integrating Automatic Bubble Detection"</span><span className="text-slate-300">,</span></> },
                      { ln: "6",  code: <><span className="text-[#9cdcfe]">&nbsp;&nbsp;"ReleaseDate"</span><span className="text-slate-300">: </span><span className="text-[#ce9178]">"TBD"</span></> },
                      { ln: "7",  code: <span className="text-slate-300">{"}"}</span> },
                    ].map(({ ln, code }) => (
                      <div key={ln} className="flex gap-4">
                        <span className="select-none text-slate-600 w-4 text-right shrink-0">{ln}</span>
                        <span className="text-slate-300">{code}</span>
                      </div>
                    ))}

                    {/* Blinking cursor */}
                    <div className="flex gap-4 mt-0.5">
                      <span className="select-none text-slate-600 w-4 text-right shrink-0">8</span>
                      <span className="inline-block w-2 h-3.5 bg-[#007AFF] animate-pulse" />
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 py-1 text-[10px] text-white" style={{ background: "#007AFF" }}>
                    <span>JSON</span>
                    <span>Ln 8, Col 1</span>
                  </div>
                </div>

                {/* Overlay banner */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <div
                    className="px-6 py-3 rounded-lg text-white font-semibold text-sm shadow-2xl backdrop-blur-sm text-center"
                    style={{ background: "rgba(0,122,255,0.75)", border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    Under Active Development — Coming Soon
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
