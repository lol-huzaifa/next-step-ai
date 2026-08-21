import { Compass, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useApp, type Route } from '@/context/AppContext';

export function Header() {
  const { navigate, route } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { label: string; route: Route; show: boolean }[] = [
    { label: 'Home', route: { name: 'landing' }, show: true },
    { label: 'My Field', route: { name: 'recommendations' }, show: true },
    { label: 'Universities', route: { name: 'universities' }, show: true },
    { label: 'Scholarships', route: { name: 'scholarships' }, show: true },
    { label: 'Roadmap', route: { name: 'roadmap' }, show: true },
  ];

  const isActive = (r: Route) => r.name === route.name;

  const go = (r: Route) => {
    navigate(r);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => go({ name: 'landing' })} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-base font-extrabold text-slate-900 leading-none block">NextStep</span>
              <span className="text-xs font-semibold text-primary-600 leading-none">AI Guidance</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.route)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.route) ? 'text-primary-700 bg-primary-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-3 flex flex-col gap-1 animate-slide-down">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.route)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                  isActive(item.route) ? 'text-primary-700 bg-primary-50' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600 to-teal-500" />
            <span className="text-sm font-semibold text-slate-700">NextStep AI</span>
          </div>
          <p className="text-xs text-slate-400 text-center sm:text-right max-w-md">
            Guidance for Pakistani Intermediate students. All data shown is sample/illustrative and marked with a verification date.
            Always confirm with official university sources before applying.
          </p>
        </div>
      </div>
    </footer>
  );
}
