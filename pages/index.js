// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Exit My Timeshares</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>
      </Head>

      <div className="bg-white text-gray-800">
        <header className="flex items-center justify-between p-4 shadow-md">
          <img src="/images/logo-exitmytimeshares.png" alt="Logo" className="h-12 w-auto" />
          <div className="text-right">
            <div x-data="{ open: false }" className="relative inline-block text-left">
              <button
                @click="open = !open"
                className="inline-flex items-center justify-center border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
              >
                🌐 Language
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8l5 5 5-5" />
                </svg>
              </button>
              <div
                x-show="open"
                @click.outside="open = false"
                className="absolute right-0 mt-2 w-48 rounded-md shadow bg-white z-50"
              >
                <a href="#" onclick="setLanguage('en|en')" className="block px-4 py-2 hover:bg-gray-100">🇬🇧 English</a>
                <a href="#" onclick="setLanguage('en|fr')" className="block px-4 py-2 hover:bg-gray-100">🇫🇷 Français</a>
                <a href="#" onclick="setLanguage('en|es')" className="block px-4 py-2 hover:bg-gray-100">🇪🇸 Español</a>
                <a href="#" onclick="setLanguage('en|de')" className="block px-4 py-2 hover:bg-gray-100">🇩🇪 Deutsch</a>
                <a href="#" onclick="setLanguage('en|it')" className="block px-4 py-2 hover:bg-gray-100">🇮🇹 Italiano</a>
                <a href="#" onclick="setLanguage('en|nl')" className="block px-4 py-2 hover:bg-gray-100">🇳🇱 Nederlands</a>
                <a href="#" onclick="setLanguage('en|sv')" className="block px-4 py-2 hover:bg-gray-100">🇸🇪 Svenska</a>
                <a href="#" onclick="setLanguage('en|el')" className="block px-4 py-2 hover:bg-gray-100">🇬🇷 Ελληνικά</a>
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
          <img src="/images/hero-exit.jpg" alt="Hero" className="w-full max-h-[500px] object-cover mb-6 rounded-xl" />

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Exit Your Timeshare. Keep 100% of Your Refund.</h1>
          <p className="text-lg mb-6">No lawyers. No pressure. Just a complete kit with everything you need to cancel your timeshare contract safely.</p>

          <ul className="text-left list-disc list-inside max-w-xl mx-auto mb-6">
            <li>✅ EU & US exit letter templates</li>
            <li>✅ Refund request letter (EU)</li>
            <li>✅ Anti-harassment contact notice</li>
            <li>✅ Scam protection checklist</li>
            <li>✅ Step-by-step instruction guide</li>
          </ul>

          <p className="text-xl font-semibold mb-6">Available now for just €149 – instant download.</p>

          <a
            href="https://quaerens.gumroad.com/l/exitmytimeshare-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition"
          >
            Get Your Exit Kit Now
          </a>

          <p className="mt-8 text-sm text-gray-500">
            Backed by consumer rights consultants at Quaerens.co.uk<br />
            Full refund if we can't provide the right documents for your resort.
          </p>
        </main>
      </div>

      <script>
        function setLanguage(langPair) {
          if (!langPair) return;
          const lang = langPair.split('|')[1];
          const cookieValue = '/en/' + lang;
          document.cookie = 'googtrans=' + cookieValue + '; path=/';
          document.cookie = 'googtrans=' + cookieValue + '; domain=' + location.hostname + '; path=/';
          location.reload();
        }

        function googleTranslateElementInit2() {
          new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,fr,es,de,nl,it,sv,el',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element2');
        }
      </script>
      <div id="google_translate_element2" style={{ display: 'none' }}></div>

      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-logo-link,
        .goog-te-gadget,
        body > .skiptranslate {
          display: none !important;
        }
        html {
          margin-top: 0 !important;
        }
      `}</style>
    </>
  );
}
