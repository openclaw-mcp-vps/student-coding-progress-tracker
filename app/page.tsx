export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Coding Bootcamp Instructors
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track Student Coding Progress{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect GitHub to monitor commit patterns, skill progression, and identify at-risk students before they fall behind — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Tracking — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="text-white font-semibold mb-2">Commit Analytics</h3>
            <p className="text-[#8b949e] text-sm">Visualize daily commit frequency, code volume, and consistency trends per student.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🚨</div>
            <h3 className="text-white font-semibold mb-2">At-Risk Alerts</h3>
            <p className="text-[#8b949e] text-sm">Automatically flag students who haven't committed in days or show declining activity.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="text-white font-semibold mb-2">Skill Progression</h3>
            <p className="text-[#8b949e] text-sm">Track language usage, repo complexity, and milestone completion over time.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-4">Instructor Plan</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to run a data-driven bootcamp</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited students",
              "GitHub OAuth integration",
              "Commit pattern dashboards",
              "At-risk student alerts",
              "Skill progression tracking",
              "CSV export",
              "Email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does GitHub integration work?</h3>
            <p className="text-[#8b949e] text-sm">Students connect their GitHub accounts via OAuth. You add them to your cohort and the app automatically syncs their public and private repo activity, commit history, and language stats.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What counts as an "at-risk" student?</h3>
            <p className="text-[#8b949e] text-sm">Students with no commits in the past 3 days, a significant drop in weekly activity compared to their baseline, or who haven't pushed to required assignment repos are flagged automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I manage multiple cohorts?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Your $9/mo plan includes unlimited cohorts and unlimited students. Organize by bootcamp session, course, or any grouping that fits your workflow.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} Student Coding Progress Tracker. All rights reserved.</p>
      </footer>
    </main>
  );
}
