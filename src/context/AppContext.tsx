import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { OnboardingData, Recommendation, ChatMessage } from '@/types';
import { SAMPLE_CHAT } from '@/data/mock';

export type Route =
  | { name: 'landing' }
  | { name: 'onboarding' }
  | { name: 'recommendations' }
  | { name: 'field'; fieldId: string }
  | { name: 'universities' }
  | { name: 'program'; programId: string }
  | { name: 'scholarships' }
  | { name: 'roadmap' };

interface AppState {
  route: Route;
  navigate: (route: Route) => void;
  onboarding: OnboardingData;
  setOnboarding: (data: Partial<OnboardingData>) => void;
  recommendations: Recommendation[];
  setRecommendations: (recs: Recommendation[]) => void;
  selectedFieldId: string | null;
  setSelectedFieldId: (id: string | null) => void;
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  chatMessages: ChatMessage[];
  addChatMessage: (msg: ChatMessage) => void;
}

const defaultOnboarding: OnboardingData = {
  educationLevel: null,
  marksPercentage: null,
  favoriteSubjects: [],
  interests: [],
  strengths: [],
  careerGoals: '',
  knowsField: false,
  chosenFieldId: null,
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>({ name: 'landing' });
  const [onboarding, setOnboardingState] = useState<OnboardingData>(defaultOnboarding);
  const [recommendations, setRecommendationsState] = useState<Recommendation[]>([]);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(SAMPLE_CHAT);

  const navigate = useCallback((r: Route) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const setOnboarding = useCallback((data: Partial<OnboardingData>) => {
    setOnboardingState((prev) => ({ ...prev, ...data }));
  }, []);

  const setRecommendations = useCallback((recs: Recommendation[]) => {
    setRecommendationsState(recs);
  }, []);

  const addChatMessage = useCallback((msg: ChatMessage) => {
    setChatMessages((prev) => [...prev, msg]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        route,
        navigate,
        onboarding,
        setOnboarding,
        recommendations,
        setRecommendations,
        selectedFieldId,
        setSelectedFieldId,
        chatOpen,
        setChatOpen,
        chatMessages,
        addChatMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
