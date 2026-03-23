import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#007AFF] hover:underline mb-10">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-black mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Effective Date: January 1, 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-black mb-3">1. Introduction</h2>
            <p>
              Studio Inova ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our digital products, AI-powered tools, and visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Contact Information:</strong> Name, email address, and message content when you submit our contact form.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our apps and tools, including device type, browser, and pages visited.</li>
              <li><strong>Content You Submit:</strong> Text or images you provide when using tools like Detect AI for analysis purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">3. Google Ads & Third-Party Advertising</h2>
            <p>
              Some of our apps and tools use <strong>Google AdSense</strong> and other Google Ads services to display advertisements. Google may use cookies and similar technologies to serve ads based on your prior visits to our apps or other websites.
            </p>
            <p className="mt-3">
              You can opt out of personalized advertising by visiting{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] hover:underline">
                Google's Ads Settings
              </a>. We do not control the data collected by Google's advertising services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">4. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To respond to your inquiries submitted via our contact form.</li>
              <li>To improve and maintain our digital products and services.</li>
              <li>To analyze usage trends and optimize user experience.</li>
              <li>To display relevant advertising through Google Ads.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">5. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (such as Google) strictly to operate our services, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">6. Data Retention</h2>
            <p>
              Contact form submissions are retained for a reasonable period to allow us to respond to your inquiry. Content submitted to our AI tools is processed in real time and is not stored beyond the active session unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at{" "}
              <a href="mailto:hello@studioinova.com" className="text-[#007AFF] hover:underline">hello@studioinova.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">8. Cookies</h2>
            <p>
              We and our advertising partners (including Google) use cookies to enhance your experience and serve relevant ads. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out to us at{" "}
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
