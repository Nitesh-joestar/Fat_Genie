import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-teal-600">LifeStats</h1>
        <Link
          to="/quiz"
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition"
        >
          Start Quiz
        </Link>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 max-w-6xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800">
            🧠 What if your life had stats?
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            Answer a few fun questions and see how your everyday habits secretly shape your body, brain, and story.
          </p>
          <Link
            to="/quiz"
            className="inline-block mt-6 bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium px-6 py-3 rounded-xl transition"
          >
            🔥 Generate My Stats
          </Link>
        </div>
        <div className="flex-1">
          <img
            src="/stats-illustration.png"
            alt="Floating life stats"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">How it works</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          <div>
            <span className="text-4xl">🧾</span>
            <h4 className="text-xl font-semibold mt-2">1. Answer Questions</h4>
            <p className="text-gray-600">Fun, insightful prompts about your everyday life.</p>
          </div>
          <div>
            <span className="text-4xl">📊</span>
            <h4 className="text-xl font-semibold mt-2">2. Crunch Numbers</h4>
            <p className="text-gray-600">We estimate your real-world impact based on research.</p>
          </div>
          <div>
            <span className="text-4xl">🏆</span>
            <h4 className="text-xl font-semibold mt-2">3. Get Your Stats</h4>
            <p className="text-gray-600">Receive a unique stat sheet about your body and brain.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-100 py-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Ready to discover your hidden stats?
        </h3>
        <Link
          to="/quiz"
          className="inline-block mt-4 bg-teal-500 hover:bg-teal-600 text-white text-lg font-medium px-6 py-3 rounded-xl transition"
        >
          👉 Start Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © 2025 LifeStats — Built for curious humans
      </footer>
    </div>
  );
}
