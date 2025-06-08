import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  const setLanguage = (langPair) => {
    const lang = langPair.split('|')[1];
    const newLang = '/en/' + lang;
    document.cookie = `googtrans=${newLang}; path=/`;
    document.cookie = `googtrans=${newLang}; domain=${window.location.hostname}; path=/`;
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Exit My Timeshare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>
        <style>{`
          body { font-family: 'Inter', sans-serif; }
          .goog-te-banner-frame.skiptranslate, .goog-te-gadget-icon, .goog-logo-link, .goog-te-gadget, body > .skiptranslate { display: none !important; }
          .goog-te-gadget { font-size: 0 !important; }
        `}</style>
      </Head>

      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <header className="bg-white shadow px-4 py-4 flex justify-between items-center">
        <img src="/images/logo-exitmytimeshares.png" alt="Logo" className="h-12 w-auto" />

        <div className="relative inline-block text-left text-sm">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center border border-gray-300 px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded"
          >
            🌐 Language
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 8l5 5 5-5H5z" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow bg-white z-50">
              {[
                { code: 'en', flag: '🇬🇧 English' },
                { code: 'fr', flag: '🇫🇷 Français' },
                { code: 'es', flag: '🇪🇸 Español' },
                { code: 'de', flag: '🇩🇪 Deutsch' },
                { code: 'it', flag: '🇮🇹 Italiano' },
                { code: 'nl', flag: '🇳🇱 Nederlands' },
                { code: 'sv', flag: '🇸🇪 Svenska' },
                { code: 'el', flag: '🇬🇷 Ελληνικά' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(`en|${lang.code}`)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <img src="/images/hero-exit.jpg" alt="Hero" className="rounded-lg mb-6 w-full object-cover" />

          <h1 className="text-4xl font-bold mb-4">Exit Your Timeshare. Keep 100% of Your Refund.</h1>
          <p className="text-lg mb-6">No lawyers. No pressure. Just a complete kit with everything you need to cancel your timeshare contract safely.</p>

          <ul className="text-left list-disc list-inside mb-6">
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
        </div>
      </main>
    </>
  );
}
