export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/images/logo-exitmytimeshares.png" alt="Logo" className="h-12 w-auto" />
          <div className="text-sm text-right">
            <select
              onChange={(e) => {
                const lang = e.target.value;
                document.cookie = `googtrans=/en/${lang}; path=/`;
                document.cookie = `googtrans=/en/${lang}; domain=${location.hostname}; path=/`;
                location.reload();
              }}
              className="border rounded px-2 py-1"
            >
              <option value="en">🇬🇧 English</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="es">🇪🇸 Español</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="it">🇮🇹 Italiano</option>
              <option value="nl">🇳🇱 Nederlands</option>
              <option value="sv">🇸🇪 Svenska</option>
              <option value="el">🇬🇷 Ελληνικά</option>
            </select>
          </div>
        </div>
      </header>

      <section className="w-full">
        <img src="/images/hero-exit.jpg" className="w-full h-auto object-cover" alt="Timeshare Exit" />
      </section>
    </main>
  );
}
