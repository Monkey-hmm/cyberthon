import Link from "next/link";
import config from "../config.json";

export default function LandingPage() {
  const isAvalable = config.isAvalable;
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      {/* Background glow effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-20 pb-16 md:pt-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-cyan-400 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Intra-Institutional AI Hackathon &mdash; JIIT Noida
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
            CODEAI
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            HACKATHON
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-wide mb-10 max-w-2xl">
          The future is coded by you. Don't just watch the future. Code it.
          <br className="hidden md:block" />
          <span className="text-white font-bold mt-2 inline-block">25&ndash;26 APRIL 2026</span>
        </p>
        
        {isAvalable ? (
          <Link 
            href="/submit" 
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full p-[2px] transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 bg-[length:200%_100%] animate-[gradient_2s_linear_infinite] opacity-80 group-hover:opacity-100" />
            <div className="relative bg-black rounded-full px-8 py-4 transition-all group-hover:bg-black/80 flex items-center gap-2">
              <span className="text-lg font-bold text-white tracking-wide uppercase">
                Submit Attacks for Level 2
              </span>
              <svg className="w-5 h-5 text-emerald-400 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        ) : (
          <div className="relative inline-flex items-center justify-center gap-3 rounded-full p-[2px] cursor-not-allowed opacity-60">
            <span className="absolute inset-0 bg-zinc-700 rounded-full" />
            <div className="relative bg-zinc-900 rounded-full px-8 py-4 flex items-center gap-2">
              <span className="text-lg font-bold text-zinc-400 tracking-wide uppercase">
                Submit Attacks for Level 2
              </span>
              <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        )}
      </main>

      {/* Tracks Section */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Innovation Tracks</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Track 1 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors group">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cyan-300 mb-3 uppercase tracking-wide">01 AI in Cybersecurity</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Deepfake & synthetic media attacks. Build systems to detect deepfakes, defend against voice cloning.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-zinc-300">Deepfake Detection</span>
              <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-zinc-300">AI Defense</span>
            </div>
          </div>

          {/* Track 2 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-300 mb-3 uppercase tracking-wide">02 NLP Innovation</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Natural Language Processing (NLP). Develop advanced LLM applications, sentiment analyzers.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-zinc-300">LLM Apps</span>
              <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-zinc-300">Text Intelligence</span>
            </div>
          </div>

          {/* Track 3 */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3 uppercase tracking-wide">03 Healthcare AI</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Healthcare application. Innovate in medical diagnosis, patient monitoring, predictive analytics.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-zinc-300">Medtech</span>
              <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-zinc-300">Diagnostics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-6 md:p-12 text-center backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-10 tracking-widest uppercase">Prizes & Recognition</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-zinc-300 mb-2">&#129352;</div>
              <div className="text-xl font-bold text-white">2nd Prize</div>
              <div className="text-emerald-400 font-bold">&x20B9;2,500/-</div>
              <div className="text-sm text-zinc-400 mt-1">Silver Certification</div>
            </div>
            <div className="flex flex-col items-center transform md:-translate-y-6">
              <div className="text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">&#127942;</div>
              <div className="text-2xl font-black text-yellow-400 mb-1">1st Prize</div>
              <div className="text-3xl font-black text-white">&x20B9;5,000/-</div>
              <div className="text-sm font-bold text-yellow-500 mt-2 uppercase tracking-widest">Overall Winner</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">&#129353;</div>
              <div className="text-xl font-bold text-white">3rd Prize</div>
              <div className="text-emerald-400 font-bold">&x20B9;1,500/-</div>
              <div className="text-sm text-zinc-400 mt-1">Bronze Certification</div>
            </div>
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}} />
    </div>
  );
}
