import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Trophy, Info, Handshake, Zap } from "lucide-react";

const navLinks = [
  { to: "/", label: "Rankings", icon: Trophy },
  { to: "/info", label: "Info", icon: Info },
  { to: "/partners", label: "Partners", icon: Handshake },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]">
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex items-center justify-between bg-background/80 backdrop-blur-xl border border-foreground/5 rounded-2xl px-4 py-2 shadow-2xl shadow-black/30">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://i.postimg.cc/Gh9rY7r5/rydenclient.png"
            alt="Ryden Tiers"
            className="h-8"
          />
          <span className="text-primary font-black text-lg tracking-tight">RydenTiers</span>
        </Link>

        {/* Center: Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-foreground/10 text-foreground"
                    : "text-foreground/40 hover:text-foreground/70 hover:bg-foreground/5"
                }`}
              >
                <Icon size={16} className={isActive ? "text-primary" : ""} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Search + Button */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-foreground/5 border border-foreground/10 rounded-xl pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 w-40 transition-all"
            />
          </div>
          <a href="https://discord.gg/EmEq93eY8n" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold hover:brightness-110 transition-all">
            <Zap size={14} />
            GET TESTED
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden flex items-center justify-between bg-background/80 backdrop-blur-xl border border-foreground/5 rounded-2xl px-4 py-3 shadow-2xl shadow-black/30">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://i.postimg.cc/Gh9rY7r5/rydenclient.png"
            alt="Ryden Tiers"
            className="h-7"
          />
          <span className="text-primary font-black text-base tracking-tight">RydenTiers</span>
        </Link>

        <button onClick={() => setSearchOpen(!searchOpen)} className="text-foreground/50 hover:text-foreground">
          <Search size={20} />
        </button>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground/50 hover:text-foreground">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="sm:hidden mt-2 bg-background/95 backdrop-blur-xl border border-foreground/5 rounded-2xl p-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/30" />
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-full bg-foreground/5 border border-foreground/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="sm:hidden mt-2 bg-background/95 backdrop-blur-xl border border-foreground/5 rounded-2xl p-2 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? "bg-foreground/10 text-foreground"
                    : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                <Icon size={16} className={isActive ? "text-primary" : ""} />
                {link.label}
              </Link>
            );
          })}
          <a href="https://discord.gg/EmEq93eY8n" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-bold mt-2">
            <Zap size={14} />
            GET TESTED
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
