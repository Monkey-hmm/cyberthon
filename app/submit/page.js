"use client";

import { useState } from "react";
import Link from "next/link";

export default function HackathonSubmission() {
  const [teamId, setTeamId] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!teamId || !image) {
      setStatus("error");
      setMessage("Please provide both Team ID and an image.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    const formData = new FormData();
    formData.append("team_id", teamId);
    formData.append("image", image);

    try {
      const response = await fetch("/api/proxy/append", {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      await response.json();
      setStatus("success");
      setMessage("Submission successful!");
      setTeamId("");
      setImage(null);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />
      
      <div className="relative w-full max-w-md z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] mb-2">
            CodeAI Hackathon
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-medium tracking-wide">
            Intra-Institutional AI Hackathon &bull; 25&ndash;26 April 2026
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="teamId" className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Team ID
              </label>
              <input
                id="teamId"
                type="text"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                placeholder="Enter your Team ID"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="image" className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Upload Image
              </label>
              <div className="relative group">
                <input
                  id="image"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  required
                />
                <div className={`w-full bg-black/40 border border-dashed rounded-lg px-4 py-8 text-center transition-all ${image ? 'border-cyan-500/50' : 'border-white/20 group-hover:border-cyan-500/50'}`}>
                  {image ? (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-cyan-100 truncate w-full px-4">{image.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 text-zinc-400">
                      <svg className="w-8 h-8 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <span className="text-sm">Click or drag to upload (PNG/JPG)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-4 w-full relative group overflow-hidden rounded-lg p-[1px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-[7px] px-6 py-3 transition-all duration-300 group-hover:bg-black/50">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  {status === "submitting" ? "Submitting..." : "Submit Entry"}
                </span>
              </div>
            </button>

            {message && (
              <div className={`mt-2 text-center text-sm font-medium ${status === "success" ? "text-emerald-400" : "text-red-400"}`}>
                {message}
              </div>
            )}
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-600">
            Powered by SovereignLab Cloud
          </p>
        </div>
      </div>
    </div>
  );
}
