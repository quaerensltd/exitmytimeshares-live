<header className="bg-white shadow">
  <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
    <a href="/">
      <img
        src="/images/logo-exitmytimeshares.png"
        alt="Exit My Timeshares Logo"
        className="h-8 w-auto sm:h-6"
      />
    </a>
    <div className="text-sm">
      <select
        onChange={(e) => {
          const lang = e.target.value;
          document.cookie = `googtrans=/en/${lang}; path=/`;
          document.cookie = `googtrans=/en/${lang}; domain=${location.hostname}; path=/`;
          location.reload();
        }}
        className="border border-gray-300 px-2 py-1 rounded text-gray-700 bg-white focus:outline-none"
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

      {/* Hero Section */}
      <section className="w-full">
        <img
          src="/images/hero-exit.jpg"
          className="w-full h-auto object-cover"
          alt="Timeshare Exit"
        />
      </section>
    </main>
  );
}
