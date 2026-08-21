import { AppProvider, useApp } from '@/context/AppContext';
import { Header, Footer } from '@/components/Layout';
import { ChatWidget } from '@/components/ChatWidget';
import { LandingPage } from '@/pages/LandingPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { RecommendationsPage, FieldDetailPage } from '@/pages/FieldPages';
import { UniversitySearchPage, ProgramDetailPage } from '@/pages/UniversityPages';
import { ScholarshipsPage } from '@/pages/ScholarshipsPage';
import { RoadmapPage } from '@/pages/RoadmapPage';

function Router() {
  const { route } = useApp();

  switch (route.name) {
    case 'landing': return <LandingPage />;
    case 'onboarding': return <OnboardingPage />;
    case 'recommendations': return <RecommendationsPage />;
    case 'field': return <FieldDetailPage fieldId={route.fieldId} />;
    case 'universities': return <UniversitySearchPage />;
    case 'program': return <ProgramDetailPage programId={route.programId} />;
    case 'scholarships': return <ScholarshipsPage />;
    case 'roadmap': return <RoadmapPage />;
    default: return <LandingPage />;
  }
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Router />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
