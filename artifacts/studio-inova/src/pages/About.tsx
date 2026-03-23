import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">About Studio Inova</h1>
          <p className="text-xl text-primary font-medium max-w-3xl mx-auto">
            "We create AI-assisted tools that solve real problems with small, calculated steps."
          </p>
        </FadeIn>
      </section>

      {/* Story & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn direction="right">
            <div className="prose prose-lg prose-slate">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Studio Inova began as an independent digital studio with a clear mandate: build technology that respects the user. In an era overwhelmed by complex, intrusive applications, we chose a different path. 
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We focus on responsible AI—tools that enhance human capability rather than replacing it. By taking small, calculated steps, we ensure every product we release is stable, secure, and genuinely useful.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="p-8 bg-secondary rounded-2xl border border-border h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-primary">
                <Target className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4 relative z-10">Our Vision</h2>
              <p className="text-lg text-foreground/80 font-medium leading-relaxed relative z-10">
                Studio Inova aims to become a leading AI-driven studio that creates smart, ethical digital solutions setting the standard for user trust globally.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Detailed */}
      <section className="bg-slate-50 py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Pillars of Our Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">These principles guide every line of code we write and every interface we design.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Simple", desc: "Complexity is easy; simplicity takes hard work. We distill powerful technology into interfaces that feel naturally intuitive." },
              { icon: Target, title: "Effective", desc: "We don't build software for the sake of it. If a feature doesn't directly solve a user's problem efficiently, it doesn't ship." },
              { icon: Shield, title: "Trusted", desc: "Trust is earned in drops and lost in buckets. We prioritize transparency, robust security, and absolute data privacy." }
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-24 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12">Leadership</h2>
          <div className="inline-block text-left">
            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center gap-6 max-w-md w-full hover:shadow-md transition-all">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-muted-foreground shrink-0 border-2 border-primary/20">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Sazid</h3>
                <p className="text-primary font-medium text-sm mb-2">Founder & CEO, Studio Inova</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leading the charge in building ethical, effective AI tools for the modern web.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
