// pages/index.js

import Script from 'next/script'

export default function Home() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Google Translate Dropdown */}
      <div className="w-full bg-gray-100 text-right p-2">
        <div id="google_translate_element2" style={{ display: 'none' }}></div>
        <div x-data="{ open: false }" className="relative inline-block text-left mr-4">
          <button onClick={() => document.querySelector('#langMenu').classList.toggle('hidden')}
            className="inline-flex items-center justify-center rounded border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
            🌐 Language
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8l5 5 5-5" />
            </svg>
          </button>
          <div id="langMenu" className="hidden absolute right-0 mt-2 w-48 rounded-md shadow bg-white text-sm text-gray-700 z-50">
            <a href="#" onClick={() => doGTranslate('en|en')} className="block px-4 py-2 hover:bg-gray-100">🇬🇧 English</a>
            <a href="#" onClick={() => doGTranslate('en|fr')} className="block px-4 py-2 hover:bg-gray-100">🇫🇷 Français</a>
            <a href="#" onClick={() => doGTranslate('en|es')} className="block px-4 py-2 hover:bg-gray-100">🇪🇸 Español</a>
            <a href="#" onClick={() => doGTranslate('en|de')} className="block px-4 py-2 hover:bg-gray-100">🇩🇪 Deutsch</a>
            <a href="#" onClick={() => doGTranslate('en|it')} className="block px-4 py-2 hover:bg-gray-100">🇮🇹 Italiano</a>
            <a href="#" onClick={() => doGTranslate('en|nl')} className="block px-4 py-2 hover:bg-gray-100">🇳🇱 Nederlands</a>
            <a href="#" onClick={() => doGTranslate('en|sv')} className="block px-4 py-2 hover:bg-gray-100">🇸🇪 Svenska</a>
            <a href="#" onClick={() => doGTranslate('en|el')} className="block px-4 py-2 hover:bg-gray-100">🇬🇷 Ελληνικά</a>
          </div>
        </div>
      </div>

      {/* Header with Logo only */}
      <header className="px-4 py-3 shadow bg-white">
        <div className="max-w-7xl mx-auto flex justify-start items-center">
          <img src="/images/logo-exitmytimeshares.png" alt="ExitMyTimeshares Logo" className="h-10" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh]">
        <img src="/images/hero-exit.jpg" alt="Hero" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Exit Your Timeshare — Keep 100% of Your Refund
          </h1>
        </div>
      </section>

      {/* Offer Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <p className="text-base sm:text-lg mb-6">
          No lawyers. No pressure. Just a complete kit to cancel your timeshare contract safely and legally.
        </p>

        <ul className="text-left list-disc list-inside mb-6 text-sm sm:text-base">
          <li>✅ Exit letter templates for EU & US resorts</li>
          <li>✅ Refund request template (EU only)</li>
          <li>✅ Anti-harassment contact notice</li>
          <li>✅ Scam protection checklist</li>
          <li>✅ Step-by-step instruction guide</li>
        </ul>

        <a href="https://quaerens.gumroad.com/l/exitmytimeshare-kit"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition"
          target="_blank" rel="noopener noreferrer">
          Download Exit Kit – €149
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8 border-t px-4">
        &copy; {new Date().getFullYear()} ExitMyTimeshares. Powered by Quaerens.co.uk.
      </footer>

      {/* Scripts */}
      <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2" />
      <Script id="translate-init">{`
        function googleTranslateElementInit2() {
          new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,fr,es,de,nl,it,sv,el',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element2');
        }
        function doGTranslate(lang_pair) {
          if (!lang_pair) return;
          var lang = lang_pair.split('|')[1];
          var select = document.querySelector('select.goog-te-combo');
          if (select && select.options) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
          }
        }
      `}</Script>

      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon,
        .goog-logo-link,
        body > .skiptranslate {
          display: none !important;
        }
        .goog-te-gadget {
          font-size: 0 !important;
        }
        body { top: 0px !important; }
      `}</style>
    </main>
  );
}
