import Head from 'next/head';
// pages/index.js

import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>Exit Your Timeshare | Keep 100% of Your Refund</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer strategy="beforeInteractive" />
      </Head>

      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          top: 0px !important;
          position: static !important;
        }
        html {
          margin-top: 0 !important;
        }
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon,
        .goog-logo-link,
        .goog-te-gadget,
        body > .skiptranslate {
          display: none !important;
        }
        .goog-te-gadget {
          font-size: 0 !important;
        }
      `}</style>

      {/* Language Dropdown & Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/">
            <img src="/images/logo-exitmytimeshares.png" alt="Logo" className="h-12 w-auto sm:h-14" />
          </a>
          <div className="w-full bg-gray-100 text-right p-2">
            <div x-data="{ open: false }" className="relative inline-block text-left">
              <button onClick={() => {}} className="inline-flex items-center justify-center rounded border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
                🌐 Language
                <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8l5 5 5-5" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow bg-white text-sm text-gray-700 z-50">
                {['en','fr','es','de','it','nl','sv','el'].map(code => (
                  <a key={code} href="#" onClick={() => setLanguage(`en|${code}`)} className="block px-4 py-2 hover:bg-gray-100">
                    {code === 'en' && '🇬🇧 English'}
                    {code === 'fr' && '🇫🇷 Français'}
                    {code === 'es' && '🇪🇸 Español'}
                    {code === 'de' && '🇩🇪 Deutsch'}
                    {code === 'it' && '🇮🇹 Italiano'}
                    {code === 'nl' && '🇳🇱 Nederlands'}
                    {code === 'sv' && '🇸🇪 Svenska'}
                    {code === 'el' && '🇬🇷 Ελληνικά'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative w-full overflow-hidden">
        <img src="/images/hero-exit.jpg" alt="Timeshare Exit Banner" className="w-full h-auto object-cover object-center" loading="eager" />
      </section>

      {/* Content Box */}
      <main className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full text-center">
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

      {/* Google Translate Hidden */}
      <div id="google_translate_element2" style={{ display: 'none' }}></div>
      <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2" strategy="afterInteractive" />
      <Script id="translate-init" strategy="afterInteractive">
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
            const lang = langPair.split('|')[1];
            document.cookie = 'googtrans=/en/' + lang + '; path=/';
            document.cookie = 'googtrans=/en/' + lang + '; domain=' + location.hostname + '; path=/';
            location.reload();
          }
        `}
      </Script>
    </div>
  );
}
