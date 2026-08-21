import { ArrowRight, Compass, GraduationCap, ShieldCheck, Sparkles, MapPin, MessageSquare, CheckCircle2, TrendingUp } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function LandingPage() {
  const { navigate } = useApp();

  const steps = [
    {
      icon: Compass,
      title: 'Field Guidance',
      description: 'Tell us your subjects, marks, and interests. Get AI-recommended fields with clear reasons why they fit you.',
      color: 'bg-primary-50 text-primary-600',
    },
    {
      icon: GraduationCap,
      title: 'University & Admission Guidance',
      description: 'Search programs, compare eligibility and fees, see merit competitiveness, and get a personalized application roadmap.',
      color: 'bg-teal-50 text-teal-600',
    },
  ];

  const features = [
    { icon: ShieldCheck, title: 'Verified data', text: 'Every fact — fees, merit, deadlines — shows a verification date and source so you can trust it.' },
    { icon: TrendingUp, title: 'Realistic merit', text: 'We show competitiveness as High/Medium/Low, not fake precise numbers. Merit changes yearly.' },
    { icon: MessageSquare, title: 'AI assistant', text: 'Ask questions like "Can I apply with 78%?" and get grounded answers with cited sources.' },
    { icon: MapPin, title: 'Personalized roadmap', text: 'A step-by-step timeline of tests, applications, and scholarships tailored to your choices.' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-teal-900" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(89,165,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(37,192,173,0.3) 0%, transparent 50%)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium mb-6 animate-slide-up">
                <Sparkles className="w-3.5 h-3.5 text-accent-300" />
                AI-powered guidance for Pakistani students
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5 animate-slide-up">
                Choose the Right Field.<br />
                Find the Right University.<br />
                <span className="bg-gradient-to-r from-teal-300 to-accent-300 bg-clip-text text-transparent">Build the Right Future.</span>
              </h1>
              <p className="text-base sm:text-lg text-primary-100 leading-relaxed mb-8 max-w-lg animate-slide-up">
                Confused about what to study after FSc, ICS, ICom, FA, or A-Levels? NextStep AI guides you from choosing a field to getting into the right university — step by step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up">
                <button
                  onClick={() => navigate({ name: 'onboarding' })}
                  className="btn bg-white text-primary-700 hover:bg-primary-50 active:scale-[0.98] shadow-pop text-base px-7 py-3.5"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate({ name: 'universities' })}
                  className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 active:scale-[0.98] text-base px-7 py-3.5"
                >
                  Browse Universities
                </button>
              </div>

              <div className="flex items-center gap-6 mt-8 text-sm text-primary-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" />
                  Free to use
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" />
                  Verified data
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" />
                  Mobile-friendly
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative hidden lg:block animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="https://images.pexels.com/photos/4622108/pexels-photo-4622108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Students studying together on campus"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-pop p-4 max-w-[220px] animate-pulse-soft">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Data you can trust</span>
                </div>
                <p className="text-xs text-slate-500">Every fee, deadline & merit figure is source-tagged with a verification date.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <svg className="relative block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '40px' }}>
          <path fill="#f8fafc" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </section>

      {/* Two-step journey */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10">
          <span className="section-label">How it works</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-3">Your journey in two steps</h2>
          <p className="text-slate-500 max-w-xl mx-auto">We break a big decision into two guided stages so you're never overwhelmed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="card p-6 relative overflow-hidden group hover:shadow-cardHover transition-all duration-200">
              <div className="absolute top-4 right-4 text-5xl font-extrabold text-slate-100 select-none">{i + 1}</div>
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button onClick={() => navigate({ name: 'onboarding' })} className="btn-primary text-base px-7 py-3.5">
            Begin Step 1: Find Your Field
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center mb-10">
            <span className="section-label">Why NextStep AI</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Built for trust, designed for clarity</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-card transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Ready to find your path?</h2>
        <p className="text-slate-500 mb-6 max-w-lg mx-auto">Take the 2-minute intake and get personalized field recommendations instantly.</p>
        <button onClick={() => navigate({ name: 'onboarding' })} className="btn-primary text-base px-8 py-4">
          Start Your Journey
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
