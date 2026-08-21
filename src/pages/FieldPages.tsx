import { useState } from 'react';
import * as Icons from 'lucide-react';
import { ArrowRight, ChevronDown, ChevronUp, Check, TrendingUp, Briefcase, GraduationCap, Wallet, ThumbsUp, ThumbsDown, BookOpen, Sparkles, Target } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { FIELDS } from '@/data/mock';
import { VerifiedBadge, CompetitivenessBadge } from '@/components/VerifiedBadge';
import type { Field } from '@/types';

function getFieldIcon(name: string) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
  return Icon ?? Icons.Cpu;
}

export function RecommendationsPage() {
  const { recommendations, navigate, setSelectedFieldId, onboarding } = useApp();

  if (recommendations.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-primary-500" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">No recommendations yet</h1>
        <p className="text-slate-500 mb-6">Complete the quick intake form to get personalized field recommendations.</p>
        <button onClick={() => navigate({ name: 'onboarding' })} className="btn-primary">
          Start the intake
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <div className="mb-8">
        <span className="section-label">Module A · Field Guidance</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-2">Your recommended fields</h1>
        <p className="text-slate-500">
          Based on your {onboarding.educationLevel?.replace('-', ' ')}, {onboarding.marksPercentage}% marks, subjects, and interests — here are the fields that fit you best.
        </p>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, idx) => {
          const field = FIELDS.find((f) => f.id === rec.fieldId);
          if (!field) return null;
          return (
            <RecommendationCard key={rec.fieldId} field={field} matchScore={rec.matchScore} reasons={rec.reasons} rank={idx + 1} />
          );
        })}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button onClick={() => navigate({ name: 'onboarding' })} className="btn-secondary">
          Retake intake
        </button>
        <button onClick={() => navigate({ name: 'universities' })} className="btn-primary">
          Explore universities
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function RecommendationCard({ field, matchScore, reasons, rank }: { field: Field; matchScore: number; reasons: string[]; rank: number }) {
  const { navigate, setSelectedFieldId } = useApp();
  const [expanded, setExpanded] = useState(false);
  const Icon = getFieldIcon(field.icon);

  const selectField = () => {
    setSelectedFieldId(field.id);
    navigate({ name: 'universities' });
  };

  return (
    <div className="card overflow-hidden transition-all duration-200 hover:shadow-cardHover">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white shadow-sm">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-slate-400">#{rank}</span>
              <h3 className="text-lg font-bold text-slate-900 truncate">{field.name}</h3>
            </div>
            <p className="text-sm text-slate-500 line-clamp-2">{field.tagline}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className={`text-2xl font-extrabold ${matchScore >= 75 ? 'text-success-600' : matchScore >= 55 ? 'text-primary-600' : 'text-slate-500'}`}>{matchScore}%</div>
            <p className="text-xs text-slate-400">match</p>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {reasons.map((r, i) => (
            <span key={i} className="inline-flex items-start gap-1.5 rounded-lg bg-primary-50 text-primary-700 px-2.5 py-1.5 text-xs font-medium">
              <Check className="w-3 h-3 mt-0.5 flex-shrink-0" />
              {r}
            </span>
          ))}
        </div>

        {/* Expand */}
        <button onClick={() => setExpanded(!expanded)} className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
          {expanded ? <>Hide details <ChevronUp className="w-4 h-4" /></> : <>See overview & details <ChevronDown className="w-4 h-4" /></>}
        </button>
      </div>

      {expanded && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 animate-slide-down">
          <div className="border-t border-slate-100 pt-4 space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">{field.overview}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 flex items-center gap-1"><BookOpen className="w-3 h-3" /> Key subjects</p>
                <div className="flex flex-wrap gap-1.5">
                  {field.curriculum.slice(0, 5).map((c) => (
                    <span key={c} className="rounded-md bg-slate-100 text-slate-600 px-2 py-1 text-xs">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 flex items-center gap-1"><Briefcase className="w-3 h-3" /> Top careers</p>
                <div className="space-y-1">
                  {field.careerPaths.slice(0, 3).map((c) => (
                    <div key={c.title} className="flex items-center justify-between text-xs">
                      <span className="text-slate-600">{c.title}</span>
                      <CompetitivenessBadge level={c.demand} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button onClick={() => navigate({ name: 'field', fieldId: field.id })} className="btn-secondary text-sm">
                View full details
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={selectField} className="btn-primary text-sm">
                Select this field
                <Check className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function FieldDetailPage({ fieldId }: { fieldId: string }) {
  const { navigate, setSelectedFieldId } = useApp();
  const field = FIELDS.find((f) => f.id === fieldId);

  if (!field) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-500">Field not found.</p>
        <button onClick={() => navigate({ name: 'recommendations' })} className="btn-secondary mt-4">Back to recommendations</button>
      </div>
    );
  }

  const Icon = getFieldIcon(field.icon);

  const selectField = () => {
    setSelectedFieldId(field.id);
    navigate({ name: 'universities' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <button onClick={() => navigate({ name: 'recommendations' })} className="btn-ghost mb-4 -ml-2">
        <Icons.ChevronLeft className="w-4 h-4" />
        Back
      </button>

      {/* Hero */}
      <div className="card overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-primary-600 to-teal-600 p-6 sm:p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold mb-1">{field.name}</h1>
              <p className="text-primary-100 text-sm sm:text-base">{field.tagline}</p>
            </div>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-sm text-slate-600 leading-relaxed">{field.overview}</p>
          <div className="mt-4">
            <VerifiedBadge date={field.verifiedDate} />
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <Section icon={BookOpen} title="What you'll study">
        <div className="flex flex-wrap gap-2">
          {field.curriculum.map((c) => (
            <span key={c} className="rounded-lg bg-slate-100 text-slate-700 px-3 py-1.5 text-sm">{c}</span>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Section icon={Target} title="Required skills">
          <ul className="space-y-1.5">
            {field.requiredSkills.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-primary-500 flex-shrink-0" /> {s}
              </li>
            ))}
          </ul>
        </Section>
        <Section icon={Sparkles} title="Skills you'll develop">
          <ul className="space-y-1.5">
            {field.developedSkills.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-slate-600">
                <Icons.Plus className="w-4 h-4 text-teal-500 flex-shrink-0" /> {s}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Career paths */}
      <Section icon={Briefcase} title="Career paths">
        <div className="space-y-2">
          {field.careerPaths.map((c) => (
            <div key={c.title} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <p className="font-semibold text-sm text-slate-900">{c.title}</p>
                <p className="text-xs text-slate-500">{c.salaryRange}</p>
              </div>
              <CompetitivenessBadge level={c.demand} />
            </div>
          ))}
        </div>
      </Section>

      {/* Market & salary */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Section icon={TrendingUp} title="Market demand">
          <p className="text-sm text-slate-600 leading-relaxed">{field.marketDemand}</p>
        </Section>
        <Section icon={Wallet} title="Salary info">
          <p className="text-sm text-slate-600 leading-relaxed">{field.salaryInfo}</p>
        </Section>
      </div>

      {/* Higher study */}
      <Section icon={GraduationCap} title="Higher study paths">
        <div className="flex flex-wrap gap-2">
          {field.higherStudy.map((h) => (
            <span key={h} className="rounded-lg bg-teal-50 text-teal-700 px-3 py-1.5 text-sm">{h}</span>
          ))}
        </div>
      </Section>

      {/* Pros & cons */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Section icon={ThumbsUp} title="Pros">
          <ul className="space-y-1.5">
            {field.pros.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                <ThumbsUp className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>
        </Section>
        <Section icon={ThumbsDown} title="Cons">
          <ul className="space-y-1.5">
            {field.cons.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                <ThumbsDown className="w-4 h-4 text-error-500 flex-shrink-0 mt-0.5" /> {c}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* CTA */}
      <div className="card p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900">Ready to explore universities for {field.name}?</h3>
          <p className="text-sm text-slate-500">We'll filter programs that match this field.</p>
        </div>
        <button onClick={selectField} className="btn-primary whitespace-nowrap">
          Select this field
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: Icons.LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="card p-5 sm:p-6 mb-4">
      <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
        <Icon className="w-4 h-4 text-primary-500" />
        {title}
      </h2>
      {children}
    </div>
  );
}
