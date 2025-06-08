// pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-8">
      <header className="w-full max-w-5xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">ExitMyTimeshares</h1>
        <nav className="space-x-4 text-sm">
          <a href="#features" className="hover:underline">What’s Inside</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="mailto:info@quaerens.co.uk" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Exit Your Timeshare. Keep 100% of Your Refund.</h2>
        <p className="text-lg mb-6">No lawyers. No pressure. Just a complete kit to cancel your timeshare contract safely and legally.</p>

        <ul id="features" className="text-left list-disc list-inside mb-6">
          <li>✅ EU & US exit letter templates</li>
          <li>✅ Refund request letter (EU only)</li>
          <li>✅ Anti-harassment contact notice</li>
          <li>✅ Scam protection checklist</li>
          <li>✅ Step-by-step instruction guide</li>
        </ul>

        <div className="mb-4">
          <img src="/kit-preview.jpg" alt="Exit Kit Preview" className="mx-auto rounded shadow max-w-xs" />
        </div>

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
      </section>

      <section id="faq" className="max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4 text-left">
          <div>
            <strong>Do I need a lawyer?</strong>
            <p>No. Our kit includes all legally valid templates and guidance so you can do it yourself.</p>
          </div>
          <div>
            <strong>Can I use this outside the EU?</strong>
            <p>Yes. It includes US exit templates as well, suitable for many American resorts.</p>
          </div>
          <div>
            <strong>What if it doesn’t work?</strong>
            <p>You get a full refund if we can’t provide the right documents for your specific resort.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 mt-16">
        &copy; {new Date().getFullYear()} ExitMyTimeshares. All rights reserved.
      </footer>
    </main>
  );
}
