// pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ExitMyTimeshares</h1>
          <nav className="space-x-4 text-sm">
            <a href="#kit" className="hover:underline">What's Inside</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="mailto:info@quaerens.co.uk" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Exit Your Timeshare. Keep 100% of Your Refund.</h2>
          <p className="text-lg mb-6">No lawyers. No pressure. Just a complete digital kit to cancel your timeshare contract safely and legally.</p>
          <a
            href="https://quaerens.gumroad.com/l/exitmytimeshare-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition"
          >
            Download Exit Kit – €149
          </a>
        </div>
      </section>

      {/* What’s Inside */}
      <section id="kit" className="max-w-4xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">What’s Included in the Kit</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>✅ Exit letter templates for EU & US resorts</li>
          <li>✅ Refund request template for EU owners</li>
          <li>✅ Anti-harassment contact notice</li>
          <li>✅ Scam prevention checklist</li>
          <li>✅ Easy-to-follow step-by-step guide</li>
        </ul>
        <div className="mt-6 text-center">
          <img src="/kit-preview.jpg" alt="Exit Kit Preview" className="mx-auto rounded shadow max-w-xs" />
        </div>
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
