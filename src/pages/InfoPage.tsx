import { Trophy, Target, Star, Shield, Sword, Award, User } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const rankTitles = [
  { name: "Combat Grandmaster", desc: "The absolute peak of performance.", points: "400+", color: "text-primary", icon: Trophy },
  { name: "Combat Master", desc: "Elite tier combatant.", points: "250+", color: "text-primary", icon: Award },
  { name: "Combat Ace", desc: "Highly skilled and dangerous.", points: "100+", color: "text-primary", icon: Star },
  { name: "Combat Specialist", desc: "Proven combat capabilities.", points: "50+", color: "text-primary", icon: Target },
  { name: "Combat Cadet", desc: "On the path to mastery.", points: "20+", color: "text-primary", icon: Shield },
  { name: "Combat Novice", desc: "Beginning the journey.", points: "10+", color: "text-primary", icon: Sword },
  { name: "Rookie", desc: "New entry to the system.", points: "0+", color: "text-foreground/50", icon: User },
];

const pointsSystem = [
  { tier: "Tier 1", ht: "+60", lt: "+45" },
  { tier: "Tier 2", ht: "+30", lt: "+20" },
  { tier: "Tier 3", ht: "+10", lt: "+6" },
  { tier: "Tier 4", ht: "+4", lt: "+3" },
  { tier: "Tier 5", ht: "+2", lt: "+1" },
];

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <PageBanner title="Information" subtitle="Understanding the ranking system and point calculations" />

      <main className="w-[95%] max-w-[1200px] mx-auto mt-12 sm:-mt-28 pb-6 sm:pb-10 relative z-10">
        <div className="px-3 sm:px-4 mb-4 sm:mb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-1 tracking-tight">Information</h1>
          <p className="text-xs sm:text-sm text-foreground/30">Understanding the ranking system and point calculations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Rank Titles */}
          <div className="bg-secondary/80 rounded-2xl border border-foreground/5 overflow-hidden shadow-2xl shadow-black/20">
            <div className="px-4 sm:px-6 py-4 border-b border-foreground/[0.06] flex items-center gap-2">
              <Trophy size={18} className="text-primary" />
              <h2 className="text-base font-bold text-foreground">Rank Titles</h2>
            </div>

            {/* Table Header */}
            <div className="px-4 sm:px-6">
              <div className="flex items-center py-3 text-xs font-bold text-foreground/30 uppercase tracking-wider border-b border-foreground/[0.06]">
                <div className="w-16">Icon</div>
                <div className="flex-1">Rank</div>
                <div className="text-right">Points</div>
              </div>
            </div>

            {/* Rank Rows */}
            {rankTitles.map((rank, i) => {
              const Icon = rank.icon;
              return (
                <div key={i} className="px-4 sm:px-6 py-4 flex items-center border-b border-foreground/[0.04] last:border-0 hover:bg-foreground/[0.02] transition-colors">
                  <div className="w-16">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
                      <Icon size={20} className={rank.color} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-sm ${rank.color}`}>{rank.name}</p>
                    <p className="text-xs text-foreground/30 mt-0.5">{rank.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-foreground">{rank.points}</span>
                    <span className="text-xs text-foreground/30 ml-1 block">MIN</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Points System */}
          <div className="space-y-4">
            <div className="bg-secondary/80 rounded-2xl border border-foreground/5 overflow-hidden shadow-2xl shadow-black/20">
              <div className="px-4 sm:px-6 py-4 border-b border-foreground/[0.06] flex items-center gap-2">
                <Target size={18} className="text-primary" />
                <h2 className="text-base font-bold text-foreground">Points System</h2>
              </div>

              {/* Table Header */}
              <div className="px-4 sm:px-6">
                <div className="flex items-center py-3 text-xs font-bold uppercase tracking-wider border-b border-foreground/[0.06]">
                  <div className="flex-1 text-foreground/30">Tier Level</div>
                  <div className="w-24 text-center text-primary">HT Points</div>
                  <div className="w-24 text-center text-foreground/30">LT Points</div>
                </div>
              </div>

              {pointsSystem.map((row, i) => (
                <div key={i} className="px-4 sm:px-6 py-4 flex items-center border-b border-foreground/[0.04] last:border-0">
                  <div className="flex-1 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <Trophy size={16} className="text-primary/60" />
                    </div>
                    <span className="font-bold text-sm text-foreground">{row.tier}</span>
                  </div>
                  <div className="w-24 text-center">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-bold">{row.ht}</span>
                  </div>
                  <div className="w-24 text-center">
                    <span className="bg-foreground/5 text-foreground/60 px-3 py-1 rounded-lg text-sm font-bold">{row.lt}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* How does it add up */}
            <div className="bg-secondary/80 rounded-2xl border border-foreground/5 overflow-hidden shadow-2xl shadow-black/20 p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Star size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">How does it add up?</h3>
                  <p className="text-xs text-foreground/40 mt-1">
                    Your total score is the sum of points from your best tier in every gamemode. Each gamemode contributes to your overall Combat Rank.
                  </p>
                </div>
              </div>

              <div className="bg-foreground/[0.03] rounded-xl p-4 border border-foreground/[0.05]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">Example Calculation</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-primary" />
                      <span className="text-sm text-foreground">Vanilla</span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-bold">HT1</span>
                    </div>
                    <span className="text-sm font-bold text-primary">+60</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-primary/60" />
                      <span className="text-sm text-foreground">UHC</span>
                      <span className="text-xs bg-foreground/10 text-foreground/50 px-2 py-0.5 rounded font-bold">LT2</span>
                    </div>
                    <span className="text-sm font-bold text-foreground/60">+20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-primary" />
                      <span className="text-sm text-foreground">Sword</span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-bold">HT2</span>
                    </div>
                    <span className="text-sm font-bold text-primary">+30</span>
                  </div>
                </div>
                <div className="border-t border-foreground/[0.08] mt-3 pt-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">Total Score</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-primary">110</span>
                    <span className="text-xs text-foreground/30">pts</span>
                  </div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-foreground/30">→ </span>
                  <span className="text-xs text-primary font-bold">Combat Ace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoPage;
