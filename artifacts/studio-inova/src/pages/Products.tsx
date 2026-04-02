import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, ScanSearch, BookOpen, Sparkles } from "lucide-react";

const products = [
  {
    icon: ScanSearch,
    name: "Detect AI",
    badge: "Beta Version",
    badgeColor: "bg-[#007AFF]/10 text-[#007AFF]",
    description:
      "The ultimate tool for detecting AI-generated text, images, and videos. Ensure authenticity in every piece of content.",
    action: {
      label: "Try Now",
      href: "https://detectai.studioinova.com",
      external: true,
      disabled: false,
    },
  },
  {
    icon: BookOpen,
    name: "AI Manga Translator",
    badge: "Coming Soon",
    badgeColor: "bg-amber-100 text-amber-700",
    description:
      "Intelligent translation for Manga, Manhua, and Ebooks. We translate the emotion and era, not just the words.",
    action: {
      label: "Coming Soon",
      href: null,
      external: false,
      disabled: true,
    },
  },
  {
    icon: GraduationCap,
    name: "Inova Academy",
    badge: "E-books",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description:
      "Master AI tools and app building with our expert-led E-books. From zero knowledge to a creator mindset.",
    action: {
      label: "View Details",
      href: null,
      external: false,
      disabled: false,
    },
  },
];

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <p className="text-sm font-semibold text-[#007AFF] uppercase tracking-widest mb-3">
              What We Build
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D1F3C] mb-5 leading-tight">
              Our Innovative Products
            </h1>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              Simple, AI-driven tools designed to empower your digital journey.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {products.map(({ icon: Icon, name, badge, badgeColor, description, action }, i) => (
              <FadeIn key={name} delay={i * 0.1} className="h-full">
                <div
                  className="bg-white border border-gray-100 h-full flex flex-col p-8 cursor-default"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 20px 48px rgba(0,122,255,0.10), 0 4px 12px rgba(0,0,0,0.05)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                    style={{
                      background: "rgba(0, 122, 255, 0.09)",
                      boxShadow: "0 0 0 8px rgba(0, 122, 255, 0.04)",
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "#007AFF" }} strokeWidth={1.75} />
                  </div>

                  {/* Badge */}
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit ${badgeColor}`}
                  >
                    {badge}
                  </span>

                  {/* Name */}
                  <h2 className="text-xl font-bold text-[#0D1F3C] mb-3">{name}</h2>

                  {/* Description */}
                  <p className="text-[#4A5568] text-sm leading-relaxed flex-1">{description}</p>

                  {/* Action Button */}
                  <div className="mt-8">
                    {action.disabled ? (
                      <button
                        disabled
                        className="w-full py-2.5 rounded-xl text-sm font-semibold text-[#A0AEC0] bg-gray-100 cursor-not-allowed"
                      >
                        {action.label}
                      </button>
                    ) : action.external && action.href ? (
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: "#007AFF" }}
                      >
                        {action.label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: "#007AFF" }}
                      >
                        {action.label}
                      </button>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
