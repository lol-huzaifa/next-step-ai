export type EducationLevel = 'FSc-PreEng' | 'FSc-PreMed' | 'ICS' | 'ICom' | 'FA' | 'A-Levels';

export type Competitiveness = 'High' | 'Medium' | 'Low';

export type Sector = 'Public' | 'Private';

export type Province = 'Punjab' | 'Sindh' | 'KPK' | 'Balochistan' | 'Islamabad' | 'AJK' | 'GB';

export interface Field {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  overview: string;
  curriculum: string[];
  requiredSkills: string[];
  developedSkills: string[];
  careerPaths: { title: string; demand: Competitiveness; salaryRange: string }[];
  marketDemand: string;
  salaryInfo: string;
  higherStudy: string[];
  pros: string[];
  cons: string[];
  matchTags: string[];
  verifiedDate: string;
}

export interface EntranceTest {
  id: string;
  name: string;
  fullName: string;
  mandatory: boolean;
  description: string;
  syllabus: string[];
  typicalScore: string;
  verifiedDate: string;
}

export interface MeritHistoryEntry {
  cycle: string;
  competitiveness: Competitiveness;
  note: string;
}

export interface UniversityProgram {
  id: string;
  universityId: string;
  fieldId: string;
  degreeTitle: string;
  duration: string;
  sector: Sector;
  city: string;
  province: Province;
  eligibility: string;
  requiredBackground: string[];
  entranceTests: EntranceTest[];
  feePerSemester: number;
  feeCurrency: string;
  applicationOpen: string;
  applicationClose: string;
  meritHistory: MeritHistoryEntry[];
  verifiedDate: string;
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  city: string;
  province: Province;
  sector: Sector;
  logoColor: string;
  established: number;
  description: string;
  verifiedDate: string;
}

export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: 'Merit-based' | 'Need-based' | 'Both';
  benefits: string;
  eligibility: string;
  deadline: string;
  fieldIds: string[];
  universityIds: string[];
  amount: string;
  verifiedDate: string;
}

export interface Recommendation {
  fieldId: string;
  matchScore: number;
  explanation: string;
  reasons: string[];
}

export type RoadmapStepStatus = 'upcoming' | 'done' | 'overdue';

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: RoadmapStepStatus;
  category: 'Test' | 'Application' | 'Scholarship' | 'Document' | 'Preparation';
  sourceLabel: string;
  sourceLink?: string;
}

export interface ChatSource {
  label: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  sources?: ChatSource[];
  timestamp: number;
}

export interface OnboardingData {
  educationLevel: EducationLevel | null;
  marksPercentage: number | null;
  favoriteSubjects: string[];
  interests: string[];
  strengths: string[];
  careerGoals: string;
  knowsField: boolean;
  chosenFieldId: string | null;
}
