import { useState } from 'react';
import { CheckCircle2, Circle, Clock, FileText, Award, GraduationCap, BookOpen, Calendar, ArrowRight, AlertCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { SAMPLE_ROADMAP } from '@/data/mock';
import type { RoadmapStep, RoadmapStepStatus } from '@/types';

const categoryStyles: Record<string, { icon: typeof FileText; color: string; bg: string }> = {
  Test: { icon: GraduationCap, color: 'text-primary-600', bg: 'bg-primary-100' },
  Application: { icon: FileText, color: 'text-teal-600', bg: 'bg-teal-100' },
  Scholarship: { icon: Award, color: 'text-accent-600', bg: 'bg-accent-100' },
  Document: { icon: BookOpen, color: 'text-slate-600', bg: 'bg-slate-100' },
  Preparation: { icon: BookOpen, color: 'text-primary-600', bg: 'bg-primary-100' },
};

export function RoadmapPage() {
  const { navigate, selectedFieldId } = useApp();
  const [steps, setSteps] = useState<RoadmapStep[]>(SAMPLE_ROADMAP);

  const toggleStep = (id: string) => {
    setSteps((prev) => prev.map((s) => s.id === id ? { ...s, status: s.status === 'done' ? 'upcoming' : 'done' as RoadmapStepStatus } : s));
  };

  const doneCount = steps.filter((s) => s.status === 'done').length;
  const progress = Math.round((doneCount / steps.length) * 100);

  const sorted = [...steps].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <div className="mb-6">
        <span className="section-label">Your plan</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-2">Personalized roadmap</h1>
        <p className="text-slate-500">A step-by-step timeline of tests, applications, and scholarships. Tap any step to mark it done.</p>
      </div>

      {/* Progress */}
      <div className="card p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-slate-900">Your progress</p>
          <p className="text-sm font-bold text-primary-600">{doneCount}/{steps.length} done</p>
        </div>
        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-500 to-teal-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-slate-400 mt-2">{progress}% complete</p>
      </div>

      {/* Stepper */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-slate-200" />

        <div className="space-y-4">
          {sorted.map((step, idx) => {
            const cat = categoryStyles[step.category] ?? categoryStyles.Document;
            const isDone = step.status === 'done';
            const CatIcon = cat.icon;
            const dueDate = new Date(step.dueDate);
            const daysLeft = Math.ceil((dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
            const isOverdue = daysLeft < 0 && !isDone;

            return (
              <div key={step.id} className="relative pl-14 animate-slide-up" style={{ animationDelay: `${idx * 60}ms` }}>
                {/* Node */}
                <button
                  onClick={() => toggleStep(step.id)}
                  className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
                    isDone
                      ? 'bg-success-500 border-success-500 text-white'
                      : isOverdue
                        ? 'bg-white border-error-300 text-error-400'
                        : 'bg-white border-slate-300 text-slate-400 hover:border-primary-400'
                  }`}
                  aria-label={isDone ? 'Mark as not done' : 'Mark as done'}
                >
                  {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                </button>

                {/* Card */}
                <div className={`card p-4 transition-all duration-200 ${isDone ? 'opacity-60' : 'hover:shadow-cardHover'}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg ${cat.bg} flex items-center justify-center`}>
                        <CatIcon className={`w-3.5 h-3.5 ${cat.color}`} />
                      </span>
                      <span className="text-xs font-medium text-slate-500">{step.category}</span>
                    </div>
                    <span className={`chip text-xs ${isOverdue ? 'bg-error-50 text-error-700' : isDone ? 'bg-success-50 text-success-700' : 'bg-slate-100 text-slate-600'}`}>
                      {isDone ? 'Done' : isOverdue ? 'Overdue' : 'Upcoming'}
                    </span>
                  </div>

                  <h3 className={`font-bold text-slate-900 text-sm ${isDone ? 'line-through' : ''}`}>{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.description}</p>

                  <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-600">Due </span>
                      <span className={`font-semibold ${isOverdue ? 'text-error-600' : 'text-slate-900'}`}>
                        {dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      {!isDone && !isOverdue && daysLeft <= 30 && (
                        <span className="text-warning-600 ml-1">({daysLeft}d left)</span>
                      )}
                    </span>
                    {step.sourceLink && (() => {
                      const link = step.sourceLink;
                      const isProgram = link.includes('program');
                      return (
                        <button onClick={() => navigate(isProgram ? { name: 'program', programId: link.split('/').pop() ?? '' } : { name: 'scholarships' })} className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                          {step.sourceLabel} <ArrowRight className="w-3 h-3" />
                        </button>
                      );
                    })()}
                    {!step.sourceLink && (
                      <span className="text-xs text-slate-400">{step.sourceLabel}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 rounded-xl bg-primary-50 border border-primary-100 p-4 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-primary-700 leading-relaxed">
          This roadmap is generated from sample data. When connected to a live backend, dates will sync with official university admission calendars and update automatically.
        </p>
      </div>

      {!selectedFieldId && (
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500 mb-3">Haven't selected a field yet?</p>
          <button onClick={() => navigate({ name: 'onboarding' })} className="btn-secondary">
            Find your field first
          </button>
        </div>
      )}
    </div>
  );
}
