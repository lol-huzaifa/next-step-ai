import { useState, useMemo } from 'react';
import { Award, Calendar, Building2, Check, X, Filter, ArrowRight, AlertCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { SCHOLARSHIPS, UNIVERSITIES, FIELDS } from '@/data/mock';
import { VerifiedBadge } from '@/components/VerifiedBadge';

export function ScholarshipsPage() {
  const { navigate, selectedFieldId } = useApp();
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [fieldFilter, setFieldFilter] = useState<string>(selectedFieldId ?? 'all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return SCHOLARSHIPS.filter((s) => {
      if (typeFilter !== 'all' && s.type !== typeFilter) return false;
      if (fieldFilter !== 'all' && !s.fieldIds.includes(fieldFilter)) return false;
      return true;
    });
  }, [typeFilter, fieldFilter]);

  const typeColors: Record<string, string> = {
    'Merit-based': 'bg-success-50 text-success-700 border-success-200',
    'Need-based': 'bg-primary-50 text-primary-700 border-primary-200',
    'Both': 'bg-accent-50 text-accent-700 border-accent-200',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <div className="mb-6">
        <span className="section-label">Financial Aid</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-2">Scholarships for you</h1>
        <p className="text-slate-500">Browse {SCHOLARSHIPS.length} scholarships and filter by your field or aid type.</p>
      </div>

      {/* Filter bar */}
      <div className="card p-4 mb-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button onClick={() => setTypeFilter('all')} className={`chip whitespace-nowrap ${typeFilter === 'all' ? 'chip-on' : 'chip-off'}`}>All types</button>
            <button onClick={() => setTypeFilter('Merit-based')} className={`chip whitespace-nowrap ${typeFilter === 'Merit-based' ? 'chip-on' : 'chip-off'}`}>Merit-based</button>
            <button onClick={() => setTypeFilter('Need-based')} className={`chip whitespace-nowrap ${typeFilter === 'Need-based' ? 'chip-on' : 'chip-off'}`}>Need-based</button>
            <button onClick={() => setTypeFilter('Both')} className={`chip whitespace-nowrap ${typeFilter === 'Both' ? 'chip-on' : 'chip-off'}`}>Both</button>
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className={`btn whitespace-nowrap ${showFilters ? 'bg-primary-600 text-white' : 'btn-secondary'}`}>
            <Filter className="w-4 h-4" /> Field
          </button>
        </div>
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-slate-100 animate-slide-down">
            <select value={fieldFilter} onChange={(e) => setFieldFilter(e.target.value)} className="input py-2.5 max-w-xs">
              <option value="all">All fields</option>
              {FIELDS.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
            </select>
          </div>
        )}
      </div>

      <p className="text-sm text-slate-500 mb-4">{filtered.length} scholarship{filtered.length !== 1 ? 's' : ''} found</p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
            <AlertCircle className="w-7 h-7 text-slate-400" />
          </div>
          <h3 className="font-bold text-slate-900 mb-1">No scholarships match your filters</h3>
          <p className="text-sm text-slate-500">Try a different field or aid type.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((s) => {
            const relatedUnis = s.universityIds.map((id) => UNIVERSITIES.find((u) => u.id === id)).filter(Boolean);
            const deadline = new Date(s.deadline);
            const daysLeft = Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
            return (
              <div key={s.id} className="card p-5 sm:p-6 hover:shadow-cardHover transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{s.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><Building2 className="w-3 h-3" />{s.provider}</p>
                    </div>
                  </div>
                  <span className={`chip text-xs border ${typeColors[s.type]}`}>{s.type}</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400 mb-0.5">Benefits</p>
                    <p className="text-sm font-medium text-slate-700">{s.benefits}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400 mb-0.5">Amount</p>
                    <p className="text-sm font-medium text-slate-700">{s.amount}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-3">{s.eligibility}</p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">Deadline: </span>
                      <span className="font-semibold text-slate-900">{deadline.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    {daysLeft > 0 && (
                      <span className="chip text-xs bg-warning-50 text-warning-700 border border-warning-200">{daysLeft} days left</span>
                    )}
                  </div>
                  <VerifiedBadge date={s.verifiedDate} />
                </div>

                {relatedUnis.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-slate-400">Applies to:</span>
                    {relatedUnis.map((u) => (
                      <span key={u!.id} className="rounded-md bg-slate-100 text-slate-600 px-2 py-0.5 text-xs">{u!.shortName}</span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-8 text-center">
        <button onClick={() => navigate({ name: 'roadmap' })} className="btn-primary">
          See your application roadmap
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
