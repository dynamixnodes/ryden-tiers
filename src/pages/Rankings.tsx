import { useState } from "react";
import { Trophy, Sword, Shield, FlaskConical, ShieldPlus, Axe, Crown, Sparkles, Diamond, Hammer } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const gamemodes = [
  { id: "overall", label: "Overall", icon: Trophy },
  { id: "vanilla", label: "Vanilla", icon: Diamond },
  { id: "uhc", label: "UHC", icon: Shield },
  { id: "pot", label: "Pot", icon: FlaskConical },
  { id: "nethop", label: "NethOP", icon: ShieldPlus },
  { id: "smp", label: "SMP", icon: Crown },
  { id: "sword", label: "Sword", icon: Sword },
  { id: "axe", label: "Axe", icon: Axe },
  { id: "mace", label: "Mace", icon: Hammer },
  { id: "ltms", label: "LTMs", icon: Sparkles },
];

const RankingsTable = () => {
  const [activeTab, setActiveTab] = useState("overall");

  return (
    <div className="bg-secondary/80 rounded-2xl border border-foreground/5 overflow-hidden shadow-2xl shadow-black/20">
      {/* Tabs */}
      <div className="border-b border-foreground/[0.06] bg-muted/50">
        <div className="px-3 sm:px-4 py-2">
          <div className="relative flex items-center border-b border-foreground/[0.08] overflow-x-auto scrollbar-hide">
            {gamemodes.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeTab === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`relative z-0 flex items-center justify-center gap-2.5 px-6 py-4 font-bold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 select-none hover:bg-foreground/[0.02] ${
                    isActive ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  <div className={`transition-transform duration-300 ${isActive ? "scale-110 -translate-y-0.5" : ""}`}>
                    <Icon size={18} strokeWidth={2.5} className={`transition-colors duration-300 ${isActive ? "text-primary" : ""}`} />
                  </div>
                  <span className={`transition-colors duration-300 ${isActive ? "drop-shadow-md" : ""}`}>
                    {mode.label}
                  </span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary shadow-[0_-2px_12px_rgba(255,89,0,0.6)] rounded-t-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="px-4 sm:px-6">
        <div className="flex items-center py-3 text-xs font-bold text-foreground/30 uppercase tracking-wider border-b border-foreground/[0.06]">
          <div className="w-20 sm:w-24">Rank</div>
          <div className="flex-1">Player</div>
          <div className="text-right">Tiers</div>
        </div>
      </div>

      {/* Empty State */}
      <div className="px-4 sm:px-6 py-16 text-center">
        <Trophy size={48} className="mx-auto text-foreground/10 mb-4" />
        <p className="text-foreground/30 text-sm font-medium">No rankings data yet</p>
        <p className="text-foreground/20 text-xs mt-1">Rankings will appear here once players are tested</p>
      </div>
    </div>
  );
};

const Rankings = () => {
  const [listType, setListType] = useState<"tierlist" | "crackedlist">("tierlist");

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <PageBanner title="Rankings" subtitle="View the latest tier rankings across all gamemodes" />

      <main className="w-[95%] max-w-[1200px] mx-auto mt-12 sm:-mt-28 pb-6 sm:pb-10 relative z-10">
        <div className="px-3 sm:px-4 mb-4 sm:mb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-1 tracking-tight">Rankings</h1>
          <p className="text-xs sm:text-sm text-foreground/30">View the latest tier rankings across all gamemodes</p>
        </div>

        {/* Tierlist / Crackedlist Toggle */}
        <div className="px-3 sm:px-4 mb-4">
          <div className="inline-flex rounded-xl overflow-hidden border border-foreground/10">
            <button
              onClick={() => setListType("tierlist")}
              className={`px-6 py-2.5 text-sm font-bold transition-all ${
                listType === "tierlist"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground/40 hover:text-foreground/60"
              }`}
            >
              Tierlist
            </button>
            <button
              onClick={() => setListType("crackedlist")}
              className={`px-6 py-2.5 text-sm font-bold transition-all ${
                listType === "crackedlist"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground/40 hover:text-foreground/60"
              }`}
            >
              Crackedlist
            </button>
          </div>
        </div>

        <RankingsTable />
      </main>
    </div>
  );
};

export default Rankings;
