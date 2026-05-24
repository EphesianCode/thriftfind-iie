export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white p-6">
        <h1 className="text-4xl font-bold">ThriftFind IIE</h1>
        <p className="mt-2">Student Marketplace Prototype</p>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <section className="bg-white rounded-3xl p-8 shadow-lg mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Buy and Sell Safely Within the IIE Community
          </h2>

          <p className="text-slate-600 mb-6">
            This prototype demonstrates usability, interaction design,
            accessibility, and user experience principles for the HCIN6222 POE.
          </p>

          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl">
              Browse Marketplace
            </button>

            <button className="bg-slate-200 px-6 py-3 rounded-2xl">
              Post Listing
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
