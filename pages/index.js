// pages/index.js

import Script from 'next/script';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Google Translate Script */}
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Header with Logo and Language Dropdown */}
      <header className="bg-white shadow px-4 py-3 relative z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src="/images/logo-exitmytimeshares.png" alt="ExitMyTimeshares Logo" className="h-8" />
          <nav className="space-x-4 text-sm">
            <a href="#kit" className="hover:underline">What's Inside</a>
            <a href="mailto:info@quaerens.co.uk" className="hover:underline">Contact</a>
          </nav>
          <div id="google_translate_element" className="ml-4"></div>
        </div>
      </header>

      {/* Hide Translate Toolbar */}
      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon {
          display: none !important;
        }
        body { top: 0px !important; }
        .goog-te-gadget {
          font-size: 0;
        }
        #google_translate_element select {
          font-size: 14px;
        }
      `}</style>

      {/* Hero Image with Overlay Text */}
      <section className="relative w-full h-[60vh] sm:h-[70vh]">
        <img
          src="/images/hero-exit.jpg"
          alt="Couple exiting timeshare"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl">
            Exit Your Timeshare — Keep 100% of Your Refund
          </h1>
        </div>
      </section>

      {/* Main Offer Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <p className="text-base sm:text-lg mb-6">
          No lawyers. No pressure. Just a complete kit to cancel your timeshare contract safely and legally — instantly downloadable.
        </p>

        <ul className="text-left list-disc list-inside mb-6 text-sm sm:text-base">
          <li>✅ Exit letter templates for EU & US resorts</li>
          <li>✅ Refund request template (EU only)</li>
          <li>✅ Anti-harassment contact notice</li>
          <li>✅ Scam protection checklist</li>
          <li>✅ Step-by-step instruction guide</li>
        </ul>

        <a
          href="https://quaerens.gumroad.com/l/exitmytimeshare-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-bold hover:bg-blue-700 transition"
        >
          Download Exit Kit – €149
        </a>

        <p className="mt-8 text-xs sm:text-sm text-gray-500">
          Backed by consumer rights consultants at Quaerens.co.uk<br />
          Full refund if we can't provide the right documents for your resort.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 border-t px-4">
        &copy; {new Date().getFullYear()} ExitMyTimeshares. Powered by Quaerens.co.uk.
      </footer>
    </main>
  );
}
