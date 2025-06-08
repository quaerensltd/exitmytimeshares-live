// pages/index.js

import Script from 'next/script';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Google Translate Dropdown */}
      <div id="google_translate_element2" style={{ display: 'none' }}></div>

      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></Script>
      <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2" strategy="afterInteractive" />

      <Script id="google-translate-init2" strategy="afterInteractive">
        {`
          function googleTranslateElementInit2() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,fr,es,de,nl,it,sv,el',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            }, 'google_translate_element2');
          }

          function setLanguage(langPair) {
            if (!langPair) return;
            const lang = langPair.split('|')[1];
            const newLang = '/en/' + lang;
            document.cookie = 'googtrans=' + newLang + '; path=/';
            document.cookie = 'googtrans=' + newLang + '; domain=' + window.location.hostname + '; path=/';
            location.reload();
          }

          if (!document.cookie.includes("googtrans")) {
            fetch("https://ipapi.co/json/")
              .then(response => response.json())
              .then(data => {
                const countryLangMap = {
                  FR: "fr",
                  ES: "es",
                  DE: "de",
                  IT: "it",
                  NL: "nl",
                  SE: "sv",
                  GR: "el",
                  DEFAULT: "en"
                };
                const lang = countryLangMap[data.country_code] || countryLangMap.DEFAULT;
                const cookieValue = "/en/" + lang;
                document.cookie = `googtrans=${cookieValue}; path=/`;
                document.cookie = `googtrans=${cookieValue}; domain=${location.hostname}; path=/`;
                location.reload();
              })
              .catch(error => console.error("IP detection failed", error));
          }
        `}
      </Script>

      {/* Hide Google Translate UI */}
      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon,
        .goog-logo-link,
        .goog-te-gadget,
        body > .skiptranslate {
          display: none !important;
        }
        html, body {
          top: 0px !important;
        }
      `}</style>

      {/* Header with smaller logo and language dropdown */}
      <header className="bg-white shadow px-4 py-3 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/images/logo-exitmytimeshares.png" alt="ExitMyTimeshares Logo" className="h-10 w-auto" />
          <div className="relative inline-block text-left">
            <div x-data="{ open: false }">
              <button onClick={() => open = !open} className="inline-flex items-center justify-center rounded border border-gray-300 px-3 py-1 text-sm bg-white hover:bg-gray-100">
                🌐 Language
              </button>
              <div x-show="open" className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow z-50">
                <a href="#" onClick={() => setLanguage('en|en')} className="block px-4 py-2 hover:bg-gray-100">🇬🇧 English</a>
                <a href="#" onClick={() => setLanguage('en|fr')} className="block px-4 py-2 hover:bg-gray-100">🇫🇷 Français</a>
                <a href="#" onClick={() => setLanguage('en|es')} className="block px-4 py-2 hover:bg-gray-100">🇪🇸 Español</a>
                <a href="#" onClick={() => setLanguage('en|de')} className="block px-4 py-2 hover:bg-gray-100">🇩🇪 Deutsch</a>
                <a href="#" onClick={() => setLanguage('en|it')} className="block px-4 py-2 hover:bg-gray-100">🇮🇹 Italiano</a>
                <a href="#" onClick={() => setLanguage('en|nl')} className="block px-4 py-2 hover:bg-gray-100">🇳🇱 Nederlands</a>
                <a href="#" onClick={() => setLanguage('en|sv')} className="block px-4 py-2 hover:bg-gray-100">🇸🇪 Svenska</a>
                <a href="#" onClick={() => setLanguage('en|el')} className="block px-4 py-2 hover:bg-gray-100">🇬🇷 Ελληνικά</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
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

      <footer className="text-center text-sm text-gray-500 py-8 border-t px-4">
        &copy; {new Date().getFullYear()} ExitMyTimeshares. Powered by Quaerens.co.uk.
      </footer>
    </main>
  );
}
