import { Handshake, ExternalLink } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <PageBanner title="Partners" subtitle="Servers partnered with Ryden Tiers" />

      <main className="w-[95%] max-w-[1200px] mx-auto mt-12 sm:-mt-28 pb-6 sm:pb-10 relative z-10">
        <div className="px-3 sm:px-4 mb-4 sm:mb-5">
          <h1 className="text-2xl sm:text-3xl font-black text-foreground mb-1 tracking-tight">Partners</h1>
          <p className="text-xs sm:text-sm text-foreground/30">Servers partnered with Ryden Tiers</p>
        </div>

        {/* Empty State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder partner card */}
          <div className="bg-secondary/80 rounded-2xl border border-foreground/5 overflow-hidden shadow-2xl shadow-black/20">
            <div className="h-32 bg-foreground/[0.03] relative">
              <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, hsl(0 0% 6%), transparent)' }} />
              <div className="absolute -bottom-5 left-4">
                <div className="w-12 h-12 rounded-xl bg-muted border-2 border-secondary flex items-center justify-center">
                  <Handshake size={20} className="text-foreground/20" />
                </div>
              </div>
            </div>
            <div className="px-4 pt-8 pb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-foreground text-sm">Partner Server</h3>
                <ExternalLink size={14} className="text-foreground/20" />
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <code className="text-xs text-foreground/30 bg-foreground/5 px-2 py-0.5 rounded">play.example.net</code>
              </div>
              <p className="text-xs text-foreground/30 mb-4">Partner information will appear here.</p>
              <div className="bg-foreground/[0.03] rounded-lg px-3 py-2 flex items-center gap-3 text-xs mb-3">
                <span className="text-primary font-bold">0/0</span>
                <span className="text-foreground/10">|</span>
                <span className="text-foreground/30">—</span>
              </div>
              <button className="w-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 rounded-xl py-2.5 text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                Visit Website
                <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Partners;
