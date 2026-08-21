import { ShieldCheck, Calendar } from 'lucide-react';

export function VerifiedBadge({ date, label = 'Verified' }: { date: string; label?: string }) {
  const formatted = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-success-50 text-success-700 px-2 py-0.5 text-xs font-medium border border-success-200">
      <ShieldCheck className="w-3 h-3" />
      {label} {formatted}
    </span>
  );
}

export function SourceTag({ label, url }: { label: string; url?: string }) {
  const content = (
    <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 text-slate-600 px-2 py-0.5 text-xs font-medium hover:bg-slate-200 transition-colors">
      <Calendar className="w-3 h-3" />
      {label}
    </span>
  );
  if (url) {
    return (
      <a href={url} className="no-underline">
        {content}
      </a>
    );
  }
  return content;
}

export function CompetitivenessBadge({ level }: { level: 'High' | 'Medium' | 'Low' }) {
  const styles = {
    High: 'bg-error-50 text-error-700 border-error-200',
    Medium: 'bg-warning-50 text-warning-700 border-warning-200',
    Low: 'bg-success-50 text-success-700 border-success-200',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${styles[level]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${level === 'High' ? 'bg-error-500' : level === 'Medium' ? 'bg-warning-500' : 'bg-success-500'}`} />
      {level} competitiveness
    </span>
  );
}
