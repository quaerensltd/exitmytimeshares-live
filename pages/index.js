export default function Home() {
  return (
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
  );
}
