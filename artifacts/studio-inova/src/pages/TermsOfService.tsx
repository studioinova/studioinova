import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#007AFF] hover:underline mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-black mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-12">Effective Date: January 1, 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-black mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any Studio Inova digital product, AI tool, or website (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">2. Description of Services</h2>
            <p>
              Studio Inova provides AI-powered digital tools, applications, and resources including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
              <li><strong>Detect AI</strong> — a tool for identifying AI-generated text and images.</li>
              <li><strong>Vesper AI Translator</strong> — an upcoming tool for manga and ebook translation.</li>
              <li>Ebooks, guides, and other digital content produced by Studio Inova.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">3. Permitted Use</h2>
            <p>You may use our Services only for lawful purposes. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
              <li>Use the Services to violate any applicable laws or regulations.</li>
              <li>Submit content that is harmful, abusive, defamatory, or infringing on third-party rights.</li>
              <li>Attempt to reverse-engineer, copy, or reproduce any part of our AI tools or proprietary systems.</li>
              <li>Use automated scripts or bots to access the Services without prior written consent.</li>
              <li>Misrepresent the results of our AI tools as definitive legal or academic proof.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">4. AI Tool Disclaimer</h2>
            <p>
              Our AI-powered tools, including Detect AI, provide probabilistic assessments and are intended as decision-support tools only. Studio Inova does not guarantee 100% accuracy. Results should not be used as the sole basis for academic, legal, or professional decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">5. Intellectual Property</h2>
            <p>
              All content, branding, software, and materials within the Services are the exclusive property of Studio Inova and are protected by applicable intellectual property laws. You may not reproduce or distribute any part of our Services without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">6. Third-Party Services</h2>
            <p>
              Our Services may include links to or integrations with third-party platforms (e.g., Google Ads, app stores). Studio Inova is not responsible for the content, privacy practices, or terms of those third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Studio Inova shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use our Services. Our total liability shall not exceed the amount you paid, if any, to access the relevant Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our Services at any time, without notice, if we determine that you have violated these Terms or if required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">9. Changes to Terms</h2>
            <p>
              Studio Inova reserves the right to modify these Terms at any time. Continued use of the Services after any changes constitutes your acceptance of the updated Terms. We will update the effective date at the top of this page whenever changes are made.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with applicable laws. Any disputes arising from these Terms shall be resolved through good-faith negotiation before pursuing any formal legal process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">11. Contact Us</h2>
            <p>
              For any questions regarding these Terms, please contact us at{" "}
              <a href="mailto:hello@studioinova.com" className="text-[#007AFF] hover:underline">hello@studioinova.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#007AFF] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
