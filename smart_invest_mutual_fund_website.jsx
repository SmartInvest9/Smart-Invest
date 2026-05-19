export default function SmartInvestWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-yellow-100 text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_gold,_transparent_40%)]"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 text-blue-950 rounded-full p-4 shadow-2xl text-4xl font-bold">
                ₹
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 tracking-wide">
                SMART INVEST
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">
              Mutual Fund Distributor
            </h2>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Invest today for a better tomorrow. We help you build wealth through
              SIP investment, diversification, retirement planning, and long-term
              financial growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition">
                Start Your SIP
              </button>

              <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-blue-950 px-8 py-4 rounded-2xl font-semibold text-lg transition">
                Call: 8116116450
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            <img
              src="/mnt/data/Smart invest promotional advertisement.png"
              alt="Smart Invest Banner"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Our Financial Services
          </h2>
          <p className="text-gray-200 text-lg">
            Smart investment solutions tailored for your future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: 'SIP Investment',
              icon: '📅',
            },
            {
              title: 'Children Fund',
              icon: '🔗',
            },
            {
              title: 'Wealth Creation',
              icon: '💰',
            },
            {
              title: 'Financial Growth',
              icon: '📈',
            },
            {
              title: 'Retirement Planning',
              icon: '🛡️',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-center hover:scale-105 transition shadow-xl"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Funds */}
      <section className="bg-white/90 text-blue-950 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mutual Fund Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'SBI Mutual Fund',
              'Axis Mutual Fund',
              'ICICI Prudential',
              'Bandhan Mutual Fund',
              'Kotak Mutual Fund',
              'HDFC Mutual Fund',
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-bold">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">
              Why Choose Smart Invest?
            </h2>

            <ul className="space-y-4 text-lg text-gray-200">
              <li>✔ Expert mutual fund guidance</li>
              <li>✔ Personalized SIP planning</li>
              <li>✔ Long-term wealth creation strategies</li>
              <li>✔ Retirement & financial planning support</li>
              <li>✔ Trusted mutual fund partnerships</li>
            </ul>
          </div>

          <div className="bg-yellow-400 text-blue-950 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Start Investing Today
            </h3>
            <p className="text-lg mb-6">
              Connect with us and begin your investment journey with confidence.
            </p>

            <div className="space-y-4 text-xl font-semibold">
              <p>📞 8116116450</p>
              <p>📧 sarafmf9@gmail.com</p>
              <p>📍 Garhbeta, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 border-t border-white/10 py-8 text-center text-gray-300">
        <p className="text-lg">
          © 2026 Smart Invest Mutual Fund Distributor. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
