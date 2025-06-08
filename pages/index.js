// pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header with Logo */}
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src="/pages/images/logo-exitmytimeshares.png" alt="ExitMyTimeshares Logo" className="h-10" />
          <nav className="space-x-4 text-sm">
            <a href="#kit" className="hover:underline">What's Inside</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="mailto:info@quaerens.co.uk" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Image with Overlay Text */}
      <section className="relative w-full h-[80vh]">
        <img
          src="/pages/images/hero-exit.jpg"
          alt="Couple exiting timeshare"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Exit Your Timeshare — Keep 100% of Your Refund
          </h1>
        </div>
      </section>

      {/* Main Offer Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <p className="text-lg mb-6">
          No lawyers. No pressure. Just a complete kit to cancel your timeshare contract safely and legally — instantly downloadable.
        </p>

        <ul className="text-left list-disc list-inside mb-6">
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
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition"
        >
          Download Exit Kit – €149
        </a>

        <p className="mt-8 text-sm text-gray-500">
          Backed by consumer rights consultants at Quaerens.co.uk<br />
          Full refund if we can't provide the right documents for your resort.
        </p>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-12 px-4 border-t">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Do I need a lawyer?</h4>
              <p>No. You don’t need a lawyer to exit your timeshare. This kit includes everything legally required.</p>
            </div>
            <div>
              <h4 className="font-semibold">Is this legal in the US and Europe?</h4>
              <p>Yes. We include separate letter templates for US resorts and EU-based contracts.</p>
            </div>
            <div>
              <h4 className="font-semibold">What if my resort ignores it?</h4>
              <p>We show you how to escalate — and offer a full refund if we can’t provide suitable documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 border-t">
        &copy; {new Date().getFullYear()} ExitMyTimeshares. Powered by Quaerens.co.uk.
      </footer>
    </main>
  );
}
