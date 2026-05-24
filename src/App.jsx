import { useState } from "react";

export default function App() {

  const [activePage, setActivePage] = useState("home");

  const products = [
    {
      id: 1,
      title: "Business Management Textbook",
      price: "R450",
      seller: "Sarah M.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "HP Laptop i5",
      price: "R4800",
      seller: "James K.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* NAVBAR */}

      <header className="bg-slate-900 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              ThriftFind IIE
            </h1>

            <p className="text-slate-300 text-sm">
              Student Marketplace Platform
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => setActivePage("home")}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Browse Marketplace
            </button>

            <button
              onClick={() => setActivePage("messages")}
              className="bg-slate-700 text-white px-5 py-2 rounded-xl hover:bg-slate-600 transition"
            >
              Messages
            </button>

            <button
              onClick={() => setActivePage("notifications")}
              className="bg-slate-700 text-white px-5 py-2 rounded-xl hover:bg-slate-600 transition"
            >
              Notifications
            </button>

            <button
              onClick={() => setActivePage("upload")}
              className="bg-slate-700 text-white px-5 py-2 rounded-xl hover:bg-slate-600 transition"
            >
              Post Listing
            </button>

          </div>

        </div>

      </header>

      {/* HOME PAGE */}

      {activePage === "home" && (

        <div>

          {/* HERO */}

          <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 px-6">

            <div className="max-w-7xl mx-auto">

              <h2 className="text-5xl font-bold mb-6">
                Buy and Sell Within the IIE Community
              </h2>

              <p className="text-xl text-slate-200 mb-8 max-w-3xl">
                Buy textbooks, laptops, calculators, furniture,
                and residence essentials safely from verified students.
              </p>

              <button
                onClick={() => setActivePage("market")}
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
              >
                Start Browsing
              </button>

            </div>

          </section>

          {/* SEARCH */}

          <section className="max-w-7xl mx-auto px-6 py-10">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h3 className="text-2xl font-bold mb-6">
                Marketplace Search
              </h3>

              <div className="grid md:grid-cols-3 gap-4">

                <input
                  type="text"
                  placeholder="Search products..."
                  className="p-4 rounded-xl border border-slate-300"
                />

                <select className="p-4 rounded-xl border border-slate-300">
                  <option>Select Category</option>
                  <option>Technology</option>
                  <option>Academic</option>
                </select>

                <button className="bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition">
                  Search Listings
                </button>

              </div>

            </div>

          </section>

          {/* PRODUCTS */}

          <section className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Recommended Listings
              </h2>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                View All
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">

                    <div className="flex justify-between mb-4">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Verified Seller
                      </span>

                      <span className="text-slate-500 text-sm">
                        Excellent Condition
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold mb-2">
                      {product.title}
                    </h3>

                    <p className="text-3xl font-bold mb-2">
                      {product.price}
                    </p>

                    <p className="text-slate-600 mb-6">
                      Seller: {product.seller}
                    </p>

                    <div className="flex gap-3">

                      <button
                        onClick={() => setActivePage("messages")}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                      >
                        Message
                      </button>

                      <button className="flex-1 bg-slate-200 py-3 rounded-xl hover:bg-slate-300 transition">
                        Offer
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </div>

      )}

      {/* MESSAGES PAGE */}

      {activePage === "messages" && (

        <section className="max-w-5xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-slate-900 text-white p-6">

              <h2 className="text-3xl font-bold">
                Messages
              </h2>

              <p className="text-slate-300 mt-2">
                Buyer and seller communication system
              </p>

            </div>

            <div className="p-8 space-y-6">

              <div className="bg-slate-100 p-5 rounded-2xl">

                <p className="font-bold mb-2">
                  Sarah M.
                </p>

                <p>
                  Hi, is the laptop still available?
                </p>

              </div>

              <div className="bg-blue-600 text-white p-5 rounded-2xl ml-10">

                <p className="font-bold mb-2">
                  You
                </p>

                <p>
                  Yes, it is still available.
                </p>

              </div>

              <div className="bg-slate-100 p-5 rounded-2xl">

                <p className="font-bold mb-2">
                  Sarah M.
                </p>

                <p>
                  Perfect. Can we meet on campus tomorrow?
                </p>

              </div>

              <div className="flex gap-4 pt-6">

                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-slate-300 rounded-xl p-4"
                />

                <button className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition">
                  Send
                </button>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* NOTIFICATIONS PAGE */}

      {activePage === "notifications" && (

        <section className="max-w-5xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-slate-900 text-white p-6">

              <h2 className="text-3xl font-bold">
                Notifications
              </h2>

              <p className="text-slate-300 mt-2">
                Real-time marketplace updates
              </p>

            </div>

            <div className="p-8 space-y-5">

              <div className="bg-green-100 border border-green-300 p-5 rounded-2xl">

                <h3 className="font-bold text-green-800 mb-2">
                  Listing Uploaded Successfully
                </h3>

                <p className="text-green-700">
                  Your textbook listing is now visible in the marketplace.
                </p>

              </div>

              <div className="bg-blue-100 border border-blue-300 p-5 rounded-2xl">

                <h3 className="font-bold text-blue-800 mb-2">
                  New Message Received
                </h3>

                <p className="text-blue-700">
                  Sarah M. sent you a message regarding your laptop listing.
                </p>

              </div>

              <div className="bg-yellow-100 border border-yellow-300 p-5 rounded-2xl">

                <h3 className="font-bold text-yellow-800 mb-2">
                  Verification Complete
                </h3>

                <p className="text-yellow-700">
                  Your account has been verified successfully.
                </p>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* UPLOAD PAGE */}

      {activePage === "upload" && (

        <section className="max-w-5xl mx-auto px-6 py-16">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-4xl font-bold mb-8">
              Upload Listing
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Listing Title"
                className="w-full border border-slate-300 p-4 rounded-2xl"
              />

              <textarea
                rows="6"
                placeholder="Describe your product..."
                className="w-full border border-slate-300 p-4 rounded-2xl"
              />

              <input
                type="text"
                placeholder="Price"
                className="w-full border border-slate-300 p-4 rounded-2xl"
              />

              <div className="border-2 border-dashed border-slate-400 rounded-3xl p-10 text-center bg-slate-50">

                <div className="text-6xl mb-4">
                  📷
                </div>

                <p className="text-slate-600 mb-4">
                  Upload product images
                </p>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                  Select Images
                </button>

              </div>

              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold hover:bg-slate-800 transition">
                Publish Listing
              </button>

            </div>

          </div>

        </section>

      )}

    </div>
  );
}
