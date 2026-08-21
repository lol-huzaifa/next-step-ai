import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, GraduationCap, Heart, Target, Award, Sparkles, BookOpen } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { EDUCATION_LEVELS, SUBJECT_OPTIONS, INTEREST_OPTIONS, STRENGTH_OPTIONS, FIELDS, generateRecommendations } from '@/data/mock';
import type { EducationLevel } from '@/types';

const TOTAL_STEPS = 5;

export function OnboardingPage() {
  const { onboarding, setOnboarding, navigate, setRecommendations, setSelectedFieldId } = useApp();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const canProceed = () => {
    switch (step) {
      case 0: return onboarding.educationLevel !== null;
      case 1: return onboarding.marksPercentage !== null && onboarding.marksPercentage > 0;
      case 2: return onboarding.favoriteSubjects.length > 0;
      case 3: return onboarding.interests.length > 0 || onboarding.strengths.length > 0;
      case 4: return onboarding.knowsField ? onboarding.chosenFieldId !== null : true;
      default: return false;
    }
  };

  const toggleArrayItem = (arr: string[], item: string): string[] =>
    arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];

  const handleFinish = () => {
    setLoading(true);
    setTimeout(() => {
      const recs = generateRecommendations(
        onboarding.educationLevel,
        onboarding.marksPercentage,
        onboarding.favoriteSubjects,
        onboarding.interests,
        onboarding.strengths,
      );
      setRecommendations(recs);
      setLoading(false);
      navigate({ name: 'recommendations' });
    }, 1400);
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep(step + 1);
    else handleFinish();
  };
  const back = () => step > 0 && setStep(step - 1);

  const stepIcons = [GraduationCap, Award, BookOpen, Heart, Target];
  const stepLabels = ['Education', 'Marks', 'Subjects', 'Interests', 'Goals'];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="section-label">Step {step + 1} of {TOTAL_STEPS}</span>
          <span className="text-sm font-medium text-slate-500">{stepLabels[step]}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
            const Icon = stepIcons[i];
            const done = i < step;
            const active = i === step;
            return (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 ${done ? 'bg-primary-600 text-white' : active ? 'bg-primary-100 text-primary-700 ring-2 ring-primary-300' : 'bg-slate-100 text-slate-400'}`}>
                  {done ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                </div>
                {i < TOTAL_STEPS - 1 && <div className={`flex-1 h-1 rounded-full mx-1.5 transition-all duration-300 ${done ? 'bg-primary-500' : 'bg-slate-200'}`} />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="card p-6 sm:p-8 animate-slide-up">
        {/* Step 0: Education level */}
        {step === 0 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">What's your current education level?</h2>
            <p className="text-sm text-slate-500 mb-5">This helps us tailor recommendations to your background.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {EDUCATION_LEVELS.map((lvl) => (
                <button
                  key={lvl.value}
                  onClick={() => setOnboarding({ educationLevel: lvl.value as EducationLevel })}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-150 ${
                    onboarding.educationLevel === lvl.value
                      ? 'border-primary-500 bg-primary-50 shadow-sm'
                      : 'border-slate-200 hover:border-primary-300 hover:bg-slate-50'
                  }`}
                >
                  <p className="font-semibold text-slate-900 text-sm">{lvl.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{lvl.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Marks */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">What are your marks or percentage?</h2>
            <p className="text-sm text-slate-500 mb-5">Enter your current or expected percentage. You can update this later.</p>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Percentage ({onboarding.marksPercentage ?? 0}%)</label>
                <input
                  type="range"
                  min={40}
                  max={100}
                  value={onboarding.marksPercentage ?? 70}
                  onChange={(e) => setOnboarding({ marksPercentage: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>40%</span><span>60%</span><span>80%</span><span>100%</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">Or enter exact marks</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    max={1100}
                    placeholder="e.g. 880"
                    value={onboarding.marksPercentage ?? ''}
                    onChange={(e) => setOnboarding({ marksPercentage: e.target.value ? Number(e.target.value) : null })}
                    className="input flex-1"
                  />
                  <span className="text-sm text-slate-400">/ 1100</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Favorite subjects */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">Which subjects do you enjoy most?</h2>
            <p className="text-sm text-slate-500 mb-5">Pick 2–4 subjects you genuinely like studying.</p>
            <div className="flex flex-wrap gap-2">
              {SUBJECT_OPTIONS.map((s) => {
                const on = onboarding.favoriteSubjects.includes(s);
                return (
                  <button key={s} onClick={() => setOnboarding({ favoriteSubjects: toggleArrayItem(onboarding.favoriteSubjects, s) })} className={on ? 'chip-on' : 'chip-off'}>
                    {on && <Check className="w-3 h-3" />}
                    {s}
                  </button>
                );
              })}
            </div>
            {onboarding.favoriteSubjects.length > 0 && (
              <p className="text-xs text-slate-400 mt-4">{onboarding.favoriteSubjects.length} selected</p>
            )}
          </div>
        )}

        {/* Step 3: Interests & strengths */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">What interests you?</h2>
              <p className="text-sm text-slate-500 mb-4">Pick activities that excite you.</p>
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((s) => {
                  const on = onboarding.interests.includes(s);
                  return (
                    <button key={s} onClick={() => setOnboarding({ interests: toggleArrayItem(onboarding.interests, s) })} className={on ? 'chip-on' : 'chip-off'}>
                      {on && <Check className="w-3 h-3" />}
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">What are your strengths?</h3>
              <p className="text-sm text-slate-500 mb-4">Pick what you're naturally good at.</p>
              <div className="flex flex-wrap gap-2">
                {STRENGTH_OPTIONS.map((s) => {
                  const on = onboarding.strengths.includes(s);
                  return (
                    <button key={s} onClick={() => setOnboarding({ strengths: toggleArrayItem(onboarding.strengths, s) })} className={on ? 'chip-on' : 'chip-off'}>
                      {on && <Check className="w-3 h-3" />}
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Goals / knows field */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Any career goals in mind?</h2>
              <p className="text-sm text-slate-500 mb-4">Optional — this helps refine recommendations.</p>
              <textarea
                value={onboarding.careerGoals}
                onChange={(e) => setOnboarding({ careerGoals: e.target.value })}
                placeholder="e.g. I want to become a software engineer, or I'm unsure but interested in tech…"
                rows={3}
                className="input resize-none"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Do you already know your field?</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setOnboarding({ knowsField: true })}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${onboarding.knowsField ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-primary-300'}`}
                >
                  <Check className={`w-5 h-5 mb-2 ${onboarding.knowsField ? 'text-primary-600' : 'text-slate-300'}`} />
                  <p className="font-semibold text-sm text-slate-900">I know my field</p>
                  <p className="text-xs text-slate-500 mt-0.5">Pick from a list</p>
                </button>
                <button
                  onClick={() => setOnboarding({ knowsField: false, chosenFieldId: null })}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${!onboarding.knowsField ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-primary-300'}`}
                >
                  <Sparkles className={`w-5 h-5 mb-2 ${!onboarding.knowsField ? 'text-primary-600' : 'text-slate-300'}`} />
                  <p className="font-semibold text-sm text-slate-900">Help me decide</p>
                  <p className="text-xs text-slate-500 mt-0.5">AI recommends</p>
                </button>
              </div>
            </div>
            {onboarding.knowsField && (
              <div className="animate-slide-down">
                <label className="text-sm font-medium text-slate-700 mb-2 block">Choose your field</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {FIELDS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => { setOnboarding({ chosenFieldId: f.id }); setSelectedFieldId(f.id); }}
                      className={`text-left p-3 rounded-xl border-2 transition-all ${onboarding.chosenFieldId === f.id ? 'border-primary-500 bg-primary-50' : 'border-slate-200 hover:border-primary-300'}`}
                    >
                      <p className="font-semibold text-sm text-slate-900">{f.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{f.tagline}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Nav buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
          <button onClick={back} disabled={step === 0} className="btn-ghost">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button onClick={next} disabled={!canProceed() || loading} className="btn-primary">
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Analyzing…
              </>
            ) : step === TOTAL_STEPS - 1 ? (
              <>
                {onboarding.knowsField ? 'Continue' : 'Get Recommendations'}
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {loading && (
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500 animate-pulse-soft">Matching your profile against fields and programs…</p>
        </div>
      )}
    </div>
  );
}
