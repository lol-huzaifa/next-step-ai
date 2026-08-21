import { useState, useMemo } from 'react';
import { Search, MapPin, Building2, Calendar, Wallet, ArrowRight, ChevronLeft, Check, X, AlertCircle, BookOpen, Clock, ShieldCheck, Filter } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { UNIVERSITIES, PROGRAMS, FIELDS } from '@/data/mock';
import { VerifiedBadge, CompetitivenessBadge, SourceTag } from '@/components/VerifiedBadge';
import type { Province, Sector } from '@/types';

const PROVINCES: Province[] = ['Punjab', 'Sindh', 'KPK', 'Islamabad', 'Balochistan', 'AJK', 'GB'];

export function UniversitySearchPage() {
  const { navigate, selectedFieldId } = useApp();
  const [query, setQuery] = useState('');
  const [fieldFilter, setFieldFilter] = useState<string>(selectedFieldId ?? 'all');
  const [provinceFilter, setProvinceFilter] = useState<string>('all');
  const [sectorFilter, setSectorFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return PROGRAMS.filter((p) => {
      if (fieldFilter !== 'all' && p.fieldId !== fieldFilter) return false;
      if (provinceFilter !== 'all' && p.province !== provinceFilter) return false;
      if (sectorFilter !== 'all' && p.sector !== sectorFilter) return false;
      if (query) {
        const uni = UNIVERSITIES.find((u) => u.id === p.universityId);
        const field = FIELDS.find((f) => f.id === p.fieldId);
        const haystack = `${p.degreeTitle} ${uni?.name ?? ''} ${uni?.shortName ?? ''} ${p.city} ${field?.name ?? ''}`.toLowerCase();
        if (!haystack.includes(query.toLowerCase())) return false;
      }
      return true;
    });
  }, [query, fieldFilter, provinceFilter, sectorFilter]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <div className="mb-6">
        <span className="section-label">Module B · University & Admission Guidance</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-2">Find your university & program</h1>
        <p className="text-slate-500">Search and filter across {PROGRAMS.length} programs at {UNIVERSITIES.length} universities.</p>
      </div>

      {/* Search bar */}
      <div className="card p-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by university, program, or city…"
              className="input pl-10"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`btn whitespace-nowrap ${showFilters ? 'bg-primary-600 text-white' : 'btn-secondary'}`}
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-slate-100 grid sm:grid-cols-3 gap-3 animate-slide-down">
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Field</label>
              <select value={fieldFilter} onChange={(e) => setFieldFilter(e.target.value)} className="input py-2.5">
                <option value="all">All fields</option>
                {FIELDS.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Province</label>
              <select value={provinceFilter} onChange={(e) => setProvinceFilter(e.target.value)} className="input py-2.5">
                <option value="all">All provinces</option>
                {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Sector</label>
              <select value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)} className="input py-2.5">
                <option value="all">All sectors</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-500">
          {filtered.length} program{filtered.length !== 1 ? 's' : ''} found
        </p>
        {(fieldFilter !== 'all' || provinceFilter !== 'all' || sectorFilter !== 'all' || query) && (
          <button
            onClick={() => { setQuery(''); setFieldFilter('all'); setProvinceFilter('all'); setSectorFilter('all'); }}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-3">
            <AlertCircle className="w-7 h-7 text-slate-400" />
          </div>
          <h3 className="font-bold text-slate-900 mb-1">No programs match your filters</h3>
          <p className="text-sm text-slate-500">Try removing a filter or searching a different keyword.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((p) => {
            const uni = UNIVERSITIES.find((u) => u.id === p.universityId);
            const field = FIELDS.find((f) => f.id === p.fieldId);
            if (!uni || !field) return null;
            return (
              <button
                key={p.id}
                onClick={() => navigate({ name: 'program', programId: p.id })}
                className="card-hover p-5 text-left"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style={{ backgroundColor: uni.logoColor }}>
                    {uni.shortName.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">{p.degreeTitle}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">{uni.shortName}</p>
                  </div>
                  <span className={`chip text-xs ${p.sector === 'Public' ? 'bg-teal-50 text-teal-700' : 'bg-accent-50 text-accent-700'}`}>{p.sector}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{p.city}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.duration}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-sm font-semibold text-slate-900">{p.feeCurrency} {p.feePerSemester.toLocaleString()}<span className="text-xs text-slate-400 font-normal">/sem</span></span>
                  <span className="text-xs text-primary-600 font-medium flex items-center gap-1">
                    View details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ProgramDetailPage({ programId }: { programId: string }) {
  const { navigate } = useApp();
  const program = PROGRAMS.find((p) => p.id === programId);

  if (!program) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-500">Program not found.</p>
        <button onClick={() => navigate({ name: 'universities' })} className="btn-secondary mt-4">Back to search</button>
      </div>
    );
  }

  const uni = UNIVERSITIES.find((u) => u.id === program.universityId);
  const field = FIELDS.find((f) => f.id === program.fieldId);
  if (!uni || !field) return null;

  const appOpen = new Date(program.applicationOpen).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const appClose = new Date(program.applicationClose).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in">
      <button onClick={() => navigate({ name: 'universities' })} className="btn-ghost mb-4 -ml-2">
        <ChevronLeft className="w-4 h-4" />
        Back to search
      </button>

      {/* Header */}
      <div className="card overflow-hidden mb-6">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg" style={{ backgroundColor: uni.logoColor }}>
              {uni.shortName.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">{program.degreeTitle}</h1>
              <p className="text-slate-500 text-sm mt-1">{uni.name}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="chip text-xs bg-slate-100 text-slate-600"><MapPin className="w-3 h-3" />{program.city}, {program.province}</span>
                <span className={`chip text-xs ${program.sector === 'Public' ? 'bg-teal-50 text-teal-700' : 'bg-accent-50 text-accent-700'}`}>{program.sector}</span>
                <span className="chip text-xs bg-primary-50 text-primary-700">{field.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick facts grid */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="card p-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1"><Wallet className="w-3.5 h-3.5" /> Fee / semester</div>
          <p className="text-lg font-bold text-slate-900">{program.feeCurrency} {program.feePerSemester.toLocaleString()}</p>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1"><Clock className="w-3.5 h-3.5" /> Duration</div>
          <p className="text-lg font-bold text-slate-900">{program.duration}</p>
        </div>
        <div className="card p-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1"><Calendar className="w-3.5 h-3.5" /> Application window</div>
          <p className="text-sm font-bold text-slate-900">{appOpen} – {appClose}</p>
        </div>
      </div>

      {/* Eligibility */}
      <div className="card p-5 sm:p-6 mb-4">
        <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary-500" /> Eligibility</h2>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">{program.eligibility}</p>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Required background</p>
          <div className="flex flex-wrap gap-2">
            {program.requiredBackground.map((s) => (
              <span key={s} className="rounded-lg bg-primary-50 text-primary-700 px-3 py-1.5 text-sm">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Entrance tests */}
      <div className="card p-5 sm:p-6 mb-4">
        <h2 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary-500" /> Entrance test(s)</h2>
        <div className="space-y-3">
          {program.entranceTests.map((t) => (
            <div key={t.id} className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.fullName}</p>
                </div>
                <span className={`chip text-xs ${t.mandatory ? 'bg-error-50 text-error-700 border border-error-200' : 'bg-slate-100 text-slate-600'}`}>
                  {t.mandatory ? 'Mandatory' : 'Optional'}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-2">{t.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {t.syllabus.map((s) => (
                  <span key={s} className="rounded-md bg-slate-100 text-slate-600 px-2 py-1 text-xs">{s}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic">{t.typicalScore}</p>
              <div className="mt-2"><VerifiedBadge date={t.verifiedDate} /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Merit history */}
      <div className="card p-5 sm:p-6 mb-4">
        <h2 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2"><Building2 className="w-4 h-4 text-primary-500" /> Historical merit</h2>
        <p className="text-xs text-slate-400 mb-4 flex items-start gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
          Merit changes yearly based on applicant pool. These labels indicate competitiveness, not precise cutoffs.
        </p>
        <div className="space-y-2">
          {program.meritHistory.map((m) => (
            <div key={m.cycle} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <p className="text-sm font-semibold text-slate-900">Cycle {m.cycle}</p>
                <p className="text-xs text-slate-500">{m.note}</p>
              </div>
              <CompetitivenessBadge level={m.competitiveness} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <SourceTag label={`Last verified ${new Date(program.verifiedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`} />
        <div className="flex gap-2">
          <button onClick={() => navigate({ name: 'scholarships' })} className="btn-secondary text-sm">
            View scholarships
          </button>
          <button onClick={() => navigate({ name: 'roadmap' })} className="btn-primary text-sm">
            Add to roadmap
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
