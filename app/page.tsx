"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MascotAvatar from "@/components/MascotAvatar";

interface Squad {
  id: string;
  name: string;
  href: string;
}

interface TeamCard {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  squads: Squad[];
}

const functions: TeamCard[] = [
  {
    id: "igv",
    name: "IGV",
    description: "Incoming Global Volunteer: Managing social impact projects for incoming exchange participants.",
    icon: "🏠",
    color: "var(--b2b-color)",
    squads: [
      { id: "igv-ir", name: "IR Matching", href: "/dashboard/b2b" },
      { id: "igv-b2b", name: "B2B", href: "/dashboard/b2b" }
    ]
  },
  {
    id: "igt",
    name: "IGT",
    description: "Incoming Global Talent: Connecting global talent with local corporate opportunities.",
    icon: "💼",
    color: "var(--ir-color)",
    squads: [
      { id: "igt-ir", name: "IR Matching", href: "/dashboard/ir" },
      { id: "igt-b2b", name: "B2B", href: "/dashboard/ir" }
    ]
  },
  {
    id: "ogv",
    name: "OGV",
    description: "Outgoing Global Volunteer: Empowering local youth through global volunteering experiences.",
    icon: "✈️",
    color: "var(--matching-color)",
    squads: [
      { id: "ogv-ir", name: "IR Matching", href: "/dashboard/matching" },
      { id: "ogv-b2b", name: "B2B", href: "/dashboard/matching" }
    ]
  },
  {
    id: "ogt",
    name: "OGT",
    description: "Outgoing Global Talent: Facilitating professional growth through global internships.",
    icon: "🌍",
    color: "var(--marcom-color)",
    squads: [
      { id: "ogt-ir", name: "IR Matching", href: "/dashboard/marcom" },
      { id: "ogt-b2b", name: "B2B", href: "/dashboard/marcom" }
    ]
  },
];

function FunctionCard({
  func,
  onSelect,
}: {
  func: TeamCard;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className="group relative h-full min-h-42.5 rounded-2xl border-2 border-white/10 bg-white/5 p-5 md:min-h-47.5 md:p-6 transition-all duration-300 cursor-pointer overflow-hidden glass-premium hover:border-white/20 hover:shadow-xl hover:shadow-black/30 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${func.color}22, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex items-start justify-between">
            <div 
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{ 
                background: `linear-gradient(135deg, ${func.color}44, ${func.color}11)`,
                boxShadow: `0 0 20px ${func.color}22`
              }}
            >
              {func.icon}
            </div>
          </div>

          <h3 className="mb-2 text-3xl font-black tracking-tight text-[#F7F7F8] group-hover:translate-x-1 transition-transform">{func.name}</h3>
          <p className="text-[10px] leading-relaxed text-[#F7F7F8]/70 md:text-[11px]">{func.description}</p>
        </div>

        <div className="flex items-center justify-end pt-4 md:pt-5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 transition-colors group-hover:bg-white/10">
            <svg className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SquadCard({
  squad,
  color,
}: {
  squad: Squad;
  color: string;
}) {
  return (
    <Link href={squad.href}>
      <div
        className="group relative rounded-2xl border-2 border-white/10 bg-white/5 p-8 transition-all duration-300 cursor-pointer overflow-hidden glass-premium hover:border-white/20 hover:shadow-xl hover:shadow-black/30 hover:scale-[1.05] focus:outline-none"
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}33, transparent 70%)`,
          }}
        />
        <div className="relative z-10 text-center">
          <h4 className="text-2xl font-black tracking-tight text-[#F7F7F8] group-hover:scale-105 transition-transform">{squad.name}</h4>
          <span className="mt-4 inline-block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Enter Secure Arena</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [selectedFunction, setSelectedFunction] = useState<TeamCard | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#051B1D] via-[#003339] to-[#051B1D]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00666B]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#39A8AD]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#73FFFF]/10 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-5 sm:px-8 lg:px-10">
        <div className="relative flex w-full flex-col items-center justify-center pb-1 pt-10 sm:pt-12">
          <div className="relative flex w-full max-w-5xl flex-col items-center">
            {/* Mascot layered above and sitting on card border */}
            <div className="pointer-events-none absolute left-0 z-20 hidden -translate-x-[52%] sm:block lg:-translate-x-[18%] -translate-y-39">
              {!selectedFunction && (
                <MascotAvatar 
                  type="flag" 
                  size={530} 
                  className="scale-75 lg:scale-95 origin-bottom"
                />
              )}
            </div>

            {/* Centered Content */}
            <motion.div 
              layout
              className="relative z-10 mb-8 flex flex-col items-center text-center sm:mb-10"
            >
              <div className="pulse-gold mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-1.5 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-(--xp-gold) animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-(--xp-gold)">
                  {selectedFunction ? `SELECT YOUR ${selectedFunction.name} SQUAD` : "Season 2026 Live Arena"}
                </span>
              </div>

              {/* Main title */}
              <div className="relative mb-4">
                <h1 className="font-black tracking-tighter text-[#F7F7F8] flex flex-col items-center">
                  <span className="pointer-events-none absolute top-1/2 z-0 w-[130%] -translate-y-1/2 select-none text-center text-[3.4rem] uppercase leading-none opacity-[0.16] sm:text-[5.2rem] md:text-[6.2rem] lg:text-[6.8rem] -translate-x-1/14">
                    {selectedFunction ? selectedFunction.name : "EXCHANGE"}
                  </span>
                  <span className="relative z-10 translate-y-4 text-[2.6rem] uppercase leading-none tracking-tight text-white sm:translate-y-5 sm:text-[3.2rem] md:translate-y-6 md:text-[3.8rem] lg:translate-y-7 lg:text-[4.2rem]">
                    {selectedFunction ? "SQUAD" : "MARATHON"}
                  </span>
                </h1>
              </div>

              <p className="max-w-2xl text-sm font-medium tracking-wide text-[#F7F7F8]/55 sm:text-base mt-2">
                {selectedFunction 
                  ? `Choose the specific ${selectedFunction.name} team you belong to below.`
                  : "Level up your performance. Dominate the leaderboard."}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex w-full flex-2 flex-col items-center justify-center pb-10 sm:pb-12">
          <AnimatePresence mode="wait">
            {!selectedFunction ? (
              <motion.div
                key="functions"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
              >
                {functions.map((func) => (
                  <FunctionCard
                    key={func.id}
                    func={func}
                    onSelect={() => setSelectedFunction(func)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="squads"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-6xl"
              >
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                  {/* Left: Big standing mascot */}
                  <div className="absolute hidden lg:flex -left-100 z-10 flex-1 justify-end pointer-events-none">
                    <MascotAvatar 
                      type="standing" 
                      size={1200} 
                      className="drop-shadow-[0_20px_80px_rgba(115,255,255,0.15)] origin-center"
                    />
                  </div>

                  {/* Right: Two card selection as rows */}
                  <div className="flex-1 w-full max-w-xl">
                    <div className="grid grid-cols-1 gap-6">
                      {selectedFunction.squads.map((squad) => (
                        <SquadCard key={squad.id} squad={squad} color={selectedFunction.color} />
                      ))}
                    </div>
                    <div className="mt-12 text-center lg:text-left">
                      <button
                        onClick={() => setSelectedFunction(null)}
                        className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                      >
                        <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Back to Functions
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


      </main>
    </div>
  );
}
