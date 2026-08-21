import type {
  Field,
  University,
  UniversityProgram,
  Scholarship,
  RoadmapStep,
  ChatMessage,
  Recommendation,
  EducationLevel,
} from '@/types';

export const EDUCATION_LEVELS: { value: EducationLevel; label: string; description: string }[] = [
  { value: 'FSc-PreEng', label: 'FSc Pre-Engineering', description: 'Physics, Chemistry, Mathematics' },
  { value: 'FSc-PreMed', label: 'FSc Pre-Medical', description: 'Physics, Chemistry, Biology' },
  { value: 'ICS', label: 'ICS (Computer Science)', description: 'Physics, Maths, Computer Science' },
  { value: 'ICom', label: 'ICom (Commerce)', description: 'Accounting, Economics, Business Maths' },
  { value: 'FA', label: 'FA (Arts / Humanities)', description: 'Elective subjects in humanities' },
  { value: 'A-Levels', label: 'A-Levels', description: 'Cambridge Advanced Level' },
];

export const SUBJECT_OPTIONS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science',
  'Accounting', 'Economics', 'Business Studies', 'English', 'Urdu',
  'Islamic Studies', 'Pakistan Studies', 'Psychology', 'Statistics', 'Sociology',
];

export const INTEREST_OPTIONS = [
  'Building things', 'Solving puzzles', 'Helping people', 'Creating art',
  'Understanding how things work', 'Leading teams', 'Working with numbers',
  'Writing & storytelling', 'Designing', 'Experimenting', 'Organizing',
  'Teaching others', 'Coding', 'Researching', 'Starting a business',
];

export const STRENGTH_OPTIONS = [
  'Analytical thinking', 'Creativity', 'Communication', 'Attention to detail',
  'Problem-solving', 'Leadership', 'Memorization', 'Logical reasoning',
  'Empathy', 'Time management', 'Hands-on work', 'Public speaking',
];

export const FIELDS: Field[] = [
  {
    id: 'cs',
    name: 'Computer Science',
    shortName: 'CS',
    icon: 'Cpu',
    tagline: 'Design software and systems that power the modern world.',
    overview:
      'Computer Science is the study of computation, algorithms, and information systems. You learn to build software, analyze data, and solve problems with technology. It is one of the fastest-growing and highest-paying fields in Pakistan and globally.',
    curriculum: [
      'Programming Fundamentals', 'Object-Oriented Programming', 'Data Structures & Algorithms',
      'Database Systems', 'Operating Systems', 'Computer Networks',
      'Software Engineering', 'Artificial Intelligence', 'Web & Mobile Development',
    ],
    requiredSkills: ['Logical reasoning', 'Mathematics', 'Problem-solving'],
    developedSkills: ['Programming', 'System design', 'Data analysis', 'Team collaboration', 'Project management'],
    careerPaths: [
      { title: 'Software Engineer', demand: 'High', salaryRange: 'PKR 80K–400K/mo' },
      { title: 'Data Scientist', demand: 'High', salaryRange: 'PKR 100K–500K/mo' },
      { title: 'Mobile Developer', demand: 'High', salaryRange: 'PKR 70K–300K/mo' },
      { title: 'DevOps Engineer', demand: 'Medium', salaryRange: 'PKR 90K–350K/mo' },
    ],
    marketDemand: 'Very high — Pakistan\'s IT exports exceed $2.5B annually and the industry is growing 20%+ per year. Global remote work has opened international salaries for local talent.',
    salaryInfo: 'Entry-level: PKR 60K–120K/mo. Mid-level: PKR 150K–400K/mo. Senior/remote: PKR 400K–1.5M/mo.',
    higherStudy: ['MS in Computer Science', 'MS in Data Science / AI', 'MS in Software Engineering', 'PhD for research/teaching'],
    pros: ['High salaries and remote global opportunities', 'Constant learning and innovation', 'Strong freelance and startup potential'],
    cons: ['Fast-changing tech requires constant learning', 'Can involve long screen hours', 'Competitive job market at entry level'],
    matchTags: ['Mathematics', 'Computer Science', 'Logical reasoning', 'Coding', 'Solving puzzles', 'Analytical thinking', 'Problem-solving'],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'se',
    name: 'Software Engineering',
    shortName: 'SE',
    icon: 'Code2',
    tagline: 'Engineer reliable, scalable software for teams and enterprises.',
    overview:
      'Software Engineering focuses on the disciplined process of designing, building, testing, and maintaining large software systems. Compared to CS it puts more weight on engineering process, architecture, and project delivery.',
    curriculum: [
      'Software Process & Models', 'Requirements Engineering', 'Software Architecture',
      'Testing & Quality Assurance', 'Project Management', 'DevOps & CI/CD',
      'Data Structures & Algorithms', 'Database Systems', 'Human-Computer Interaction',
    ],
    requiredSkills: ['Logical reasoning', 'Problem-solving', 'Communication'],
    developedSkills: ['System architecture', 'Team collaboration', 'Quality assurance', 'Project planning', 'Technical writing'],
    careerPaths: [
      { title: 'Software Engineer', demand: 'High', salaryRange: 'PKR 80K–400K/mo' },
      { title: 'QA Engineer', demand: 'Medium', salaryRange: 'PKR 60K–200K/mo' },
      { title: 'Project Manager', demand: 'Medium', salaryRange: 'PKR 120K–400K/mo' },
      { title: 'Solutions Architect', demand: 'Medium', salaryRange: 'PKR 200K–600K/mo' },
    ],
    marketDemand: 'High — every industry digitizing means steady demand for engineers who can ship and maintain reliable systems.',
    salaryInfo: 'Entry-level: PKR 60K–110K/mo. Mid-level: PKR 140K–350K/mo. Senior: PKR 350K–900K/mo.',
    higherStudy: ['MS in Software Engineering', 'MS in Project Management', 'MBA (Tech Management)'],
    pros: ['Strong process and management skills', 'Versatile across industries', 'Good path into management'],
    cons: ['Less deep theory than CS', 'Some roles more process-heavy than creative', 'Entry competition similar to CS'],
    matchTags: ['Mathematics', 'Computer Science', 'Logical reasoning', 'Coding', 'Leading teams', 'Organizing', 'Problem-solving'],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'ds',
    name: 'Data Science',
    shortName: 'DS',
    icon: 'BarChart3',
    tagline: 'Turn raw data into decisions with statistics and machine learning.',
    overview:
      'Data Science blends statistics, programming, and domain knowledge to extract insights from data. You build models that predict, classify, and recommend — powering decisions in finance, health, e-commerce, and more.',
    curriculum: [
      'Statistics & Probability', 'Python for Data Science', 'Machine Learning',
      'Data Visualization', 'Big Data Systems', 'Deep Learning',
      'Database & SQL', 'Business Analytics', 'Ethics in AI',
    ],
    requiredSkills: ['Mathematics', 'Analytical thinking', 'Problem-solving'],
    developedSkills: ['Statistical modeling', 'Python/R programming', 'Data visualization', 'Storytelling with data', 'ML deployment'],
    careerPaths: [
      { title: 'Data Analyst', demand: 'High', salaryRange: 'PKR 70K–250K/mo' },
      { title: 'Data Scientist', demand: 'High', salaryRange: 'PKR 120K–500K/mo' },
      { title: 'ML Engineer', demand: 'High', salaryRange: 'PKR 150K–600K/mo' },
      { title: 'BI Analyst', demand: 'Medium', salaryRange: 'PKR 80K–250K/mo' },
    ],
    marketDemand: 'High and rising — banks, telcos, and e-commerce all hire data professionals; global remote demand is strong.',
    salaryInfo: 'Entry-level: PKR 80K–150K/mo. Mid-level: PKR 180K–450K/mo. Senior: PKR 450K–1.2M/mo.',
    higherStudy: ['MS in Data Science', 'MS in AI', 'MS in Statistics', 'PhD for research roles'],
    pros: ['High demand and salary', 'Impactful, decision-shaping work', 'Strong remote/global market'],
    cons: ['Math-heavy coursework', 'Rapidly evolving tooling', 'Needs strong portfolio to break in'],
    matchTags: ['Mathematics', 'Statistics', 'Computer Science', 'Analytical thinking', 'Working with numbers', 'Researching', 'Problem-solving'],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    shortName: 'EE',
    icon: 'Zap',
    tagline: 'Power systems, electronics, and hardware that run the world.',
    overview:
      'Electrical Engineering covers circuits, power systems, electronics, signals, and increasingly embedded systems and renewables. It is a broad, foundational engineering discipline with roles in energy, telecom, manufacturing, and robotics.',
    curriculum: [
      'Circuit Analysis', 'Electronics', 'Signals & Systems',
      'Electromagnetic Fields', 'Power Systems', 'Control Systems',
      'Digital Logic Design', 'Microprocessors', 'Renewable Energy',
    ],
    requiredSkills: ['Mathematics', 'Physics', 'Analytical thinking'],
    developedSkills: ['Circuit design', 'Hardware troubleshooting', 'MATLAB/simulation', 'Project management', 'Systems thinking'],
    careerPaths: [
      { title: 'Power Engineer (WAPDA/IESCO)', demand: 'Medium', salaryRange: 'PKR 70K–250K/mo' },
      { title: 'Electronics Engineer', demand: 'Medium', salaryRange: 'PKR 80K–300K/mo' },
      { title: 'Embedded Systems Engineer', demand: 'High', salaryRange: 'PKR 100K–400K/mo' },
      { title: 'Telecom Engineer', demand: 'Medium', salaryRange: 'PKR 80K–280K/mo' },
    ],
    marketDemand: 'Stable — core roles in utilities and manufacturing, with growing demand in embedded/IoT and renewables.',
    salaryInfo: 'Entry-level: PKR 60K–110K/mo. Mid-level: PKR 120K–300K/mo. Senior: PKR 300K–700K/mo.',
    higherStudy: ['MS in Electrical Engineering', 'MS in Power Systems', 'MS in Embedded Systems'],
    pros: ['Broad, respected degree', 'Stable government and industry roles', 'Path into embedded/robotics'],
    cons: ['Some sectors have slower salary growth', 'Hardware roles can be location-bound', 'Math/physics intensive'],
    matchTags: ['Physics', 'Mathematics', 'Understanding how things work', 'Building things', 'Analytical thinking', 'Hands-on work'],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'bba',
    name: 'Business Administration (BBA)',
    shortName: 'BBA',
    icon: 'Briefcase',
    tagline: 'Lead organizations, manage projects, and build ventures.',
    overview:
      'BBA is a management degree covering finance, marketing, operations, HR, and strategy. It suits students who enjoy working with people, organizing, and leading — and opens paths into corporate roles, entrepreneurship, and MBA.',
    curriculum: [
      'Principles of Management', 'Financial Accounting', 'Marketing',
      'Microeconomics', 'Business Statistics', 'Operations Management',
      'Organizational Behavior', 'Business Law', 'Strategic Management',
    ],
    requiredSkills: ['Communication', 'Leadership', 'Working with numbers'],
    developedSkills: ['Management', 'Financial analysis', 'Negotiation', 'Presentation', 'Entrepreneurship'],
    careerPaths: [
      { title: 'Business Analyst', demand: 'Medium', salaryRange: 'PKR 70K–250K/mo' },
      { title: 'Marketing Executive', demand: 'Medium', salaryRange: 'PKR 60K–200K/mo' },
      { title: 'HR Officer', demand: 'Medium', salaryRange: 'PKR 60K–180K/mo' },
      { title: 'Entrepreneur', demand: 'Medium', salaryRange: 'Variable' },
    ],
    marketDemand: 'Steady — every sector needs management graduates; MBA improves prospects significantly.',
    salaryInfo: 'Entry-level: PKR 50K–90K/mo. Mid-level: PKR 100K–250K/mo. After MBA: PKR 200K–600K/mo.',
    higherStudy: ['MBA', 'MS in Management', 'ACMA / CMA', 'CFA (finance track)'],
    pros: ['Versatile across industries', 'Strong path to MBA and leadership', 'Good for entrepreneurship'],
    cons: ['Lower starting salaries than tech', 'Value depends heavily on university brand', 'Competitive at top firms'],
    matchTags: ['Accounting', 'Economics', 'Business Studies', 'Leading teams', 'Organizing', 'Starting a business', 'Communication'],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'mbbs',
    name: 'Medicine (MBBS)',
    shortName: 'MBBS',
    icon: 'Stethoscope',
    tagline: 'Diagnose, treat, and care for patients as a doctor.',
    overview:
      'MBBS is the undergraduate medical degree leading to becoming a doctor. It is rigorous, long (5–6 years + house job), and highly competitive in Pakistan, requiring strong biology and high marks plus MDCAT.',
    curriculum: [
      'Anatomy', 'Physiology', 'Biochemistry',
      'Pathology', 'Pharmacology', 'Forensic Medicine',
      'Community Medicine', 'Medicine', 'Surgery', 'Obstetrics & Gynecology',
    ],
    requiredSkills: ['Biology', 'Chemistry', 'Memorization', 'Empathy'],
    developedSkills: ['Clinical diagnosis', 'Patient care', 'Medical research', 'Communication', 'Decision under pressure'],
    careerPaths: [
      { title: 'General Physician', demand: 'High', salaryRange: 'PKR 80K–300K/mo' },
      { title: 'Surgeon (after FCPS)', demand: 'High', salaryRange: 'PKR 200K–800K/mo' },
      { title: 'Public Health Specialist', demand: 'Medium', salaryRange: 'PKR 100K–300K/mo' },
      { title: 'Medical Researcher', demand: 'Medium', salaryRange: 'PKR 120K–400K/mo' },
    ],
    marketDemand: 'Consistently high — Pakistan faces a shortage of doctors relative to population; rural demand especially high.',
    salaryInfo: 'House job: PKR 40K–60K/mo. Early practice: PKR 80K–200K/mo. Specialist: PKR 300K–1M+/mo.',
    higherStudy: ['FCPS / MD (specialization)', 'MRCP (UK)', 'USMLE (USA)', 'PLAB (UK)'],
    pros: ['Respected, stable profession', 'High social impact', 'Clear specialization path'],
    cons: ['Very competitive admission', 'Long, expensive training', 'Stressful hours'],
    matchTags: ['Biology', 'Chemistry', 'Helping people', 'Memorization', 'Empathy', 'Researching'],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'arch',
    name: 'Architecture',
    shortName: 'Arch',
    icon: 'Ruler',
    tagline: 'Design buildings, spaces, and cities that people live in.',
    overview:
      'Architecture blends art, engineering, and planning to design buildings and urban spaces. It suits creative students who also enjoy technical drawing and physics, and leads to roles in firms, construction, and urban planning.',
    curriculum: [
      'Architectural Design Studio', 'Building Materials', 'History of Architecture',
      'Structures', 'Environmental Design', 'Urban Planning',
      'Construction Tech', 'Computer-Aided Design', 'Professional Practice',
    ],
    requiredSkills: ['Creativity', 'Physics', 'Attention to detail'],
    developedSkills: ['Design thinking', 'CAD/BIM software', 'Spatial reasoning', 'Model making', 'Client communication'],
    careerPaths: [
      { title: 'Architect', demand: 'Medium', salaryRange: 'PKR 70K–300K/mo' },
      { title: 'Urban Planner', demand: 'Low', salaryRange: 'PKR 80K–250K/mo' },
      { title: 'Interior Designer', demand: 'Medium', salaryRange: 'PKR 60K–200K/mo' },
      { title: 'Project Consultant', demand: 'Medium', salaryRange: 'PKR 100K–350K/mo' },
    ],
    marketDemand: 'Moderate — tied to construction cycle; CPEC and urbanization sustain steady demand.',
    salaryInfo: 'Entry-level: PKR 50K–100K/mo. Mid-level: PKR 100K–250K/mo. Senior/firm partner: PKR 300K–800K/mo.',
    higherStudy: ['MArch', 'MS in Urban Planning', 'MS in Sustainable Design'],
    pros: ['Creative and tangible output', 'Blend of art and science', 'Growing urban projects'],
    cons: ['Slower salary growth early on', 'Long licensure path', 'Sensitive to construction downturns'],
    matchTags: ['Physics', 'Designing', 'Creating art', 'Attention to detail', 'Building things', 'Creativity'],
    verifiedDate: '2026-07-15',
  },
];

export const UNIVERSITIES: University[] = [
  {
    id: 'u1',
    name: 'University of Engineering and Technology, Lahore',
    shortName: 'UET Lahore',
    city: 'Lahore',
    province: 'Punjab',
    sector: 'Public',
    logoColor: '#1d63f5',
    established: 1921,
    description: 'One of Pakistan\'s oldest and most prestigious engineering universities.',
    verifiedDate: '2026-07-15',
  },
  {
    id: 'u2',
    name: 'National University of Sciences and Technology',
    shortName: 'NUST',
    city: 'Islamabad',
    province: 'Islamabad',
    sector: 'Public',
    logoColor: '#0fa590',
    established: 1991,
    description: 'Multi-campus public-sector university strong in engineering, computing, and business.',
    verifiedDate: '2026-07-15',
  },
  {
    id: 'u3',
    name: 'FAST National University of Computer and Emerging Sciences',
    shortName: 'FAST-NUCES',
    city: 'Lahore',
    province: 'Punjab',
    sector: 'Private',
    logoColor: '#ff7d10',
    established: 2000,
    description: 'Pioneer computing university with campuses across Pakistan.',
    verifiedDate: '2026-07-15',
  },
  {
    id: 'u4',
    name: 'Lahore University of Management Sciences',
    shortName: 'LUMS',
    city: 'Lahore',
    province: 'Punjab',
    sector: 'Private',
    logoColor: '#7c3aed',
    established: 1984,
    description: 'Leading private university for business, sciences, and engineering.',
    verifiedDate: '2026-07-15',
  },
  {
    id: 'u5',
    name: 'COMSATS University Islamabad',
    shortName: 'CUI',
    city: 'Islamabad',
    province: 'Islamabad',
    sector: 'Public',
    logoColor: '#0d6b62',
    established: 1998,
    description: 'Multi-campus public university with strong CS and engineering programs.',
    verifiedDate: '2026-07-15',
  },
  {
    id: 'u6',
    name: 'NED University of Engineering and Technology',
    shortName: 'NED UET',
    city: 'Karachi',
    province: 'Sindh',
    sector: 'Public',
    logoColor: '#154ddf',
    established: 1922,
    description: 'Karachi\'s premier public engineering university.',
    verifiedDate: '2026-07-15',
  },
  {
    id: 'u7',
    name: 'King Edward Medical University',
    shortName: 'KEMU',
    city: 'Lahore',
    province: 'Punjab',
    sector: 'Public',
    logoColor: '#dc2626',
    established: 1860,
    description: 'Historic public medical university, among the most competitive for MBBS.',
    verifiedDate: '2026-07-15',
  },
  {
    id: 'u8',
    name: 'University of the Punjab',
    shortName: 'PU',
    city: 'Lahore',
    province: 'Punjab',
    sector: 'Public',
    logoColor: '#16a34a',
    established: 1882,
    description: 'One of the largest and oldest universities in Pakistan.',
    verifiedDate: '2026-07-15',
  },
];

export const PROGRAMS: UniversityProgram[] = [
  {
    id: 'p1',
    universityId: 'u1',
    fieldId: 'cs',
    degreeTitle: 'BS Computer Science',
    duration: '4 years',
    sector: 'Public',
    city: 'Lahore',
    province: 'Punjab',
    eligibility: 'FSc Pre-Engineering / ICS with at least 60% marks. ECAT required.',
    requiredBackground: ['Mathematics', 'Physics'],
    entranceTests: [
      {
        id: 't1',
        name: 'ECAT',
        fullName: 'Engineering College Admission Test',
        mandatory: true,
        description: 'UET-administered entrance test for engineering and computing programs across Punjab public universities.',
        syllabus: ['Mathematics', 'Physics', 'Chemistry/Computer Science', 'English'],
        typicalScore: 'Weighted aggregate; aim for 70%+ to stay competitive.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 22000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-06-15',
    applicationClose: '2026-08-10',
    meritHistory: [
      { cycle: '2025', competitiveness: 'High', note: 'Closing merit ~82% aggregate.' },
      { cycle: '2024', competitiveness: 'High', note: 'Closing merit ~81% aggregate.' },
      { cycle: '2023', competitiveness: 'High', note: 'Closing merit ~80% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p2',
    universityId: 'u2',
    fieldId: 'cs',
    degreeTitle: 'BS Computer Science',
    duration: '4 years',
    sector: 'Public',
    city: 'Islamabad',
    province: 'Islamabad',
    eligibility: 'FSc Pre-Eng / ICS / A-Levels with at least 60% marks. NUST entry test required.',
    requiredBackground: ['Mathematics', 'Physics'],
    entranceTests: [
      {
        id: 't2',
        name: 'NUST Entry Test',
        fullName: 'NUST Institutional Admission Test',
        mandatory: true,
        description: 'NUST\'s own entrance test covering Maths, Physics, English, and intelligence.',
        syllabus: ['Mathematics', 'Physics', 'English', 'Intelligence'],
        typicalScore: 'Highly competitive; top programs need 75%+ in test.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 65000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-05-20',
    applicationClose: '2026-07-05',
    meritHistory: [
      { cycle: '2025', competitiveness: 'High', note: 'Closing merit ~85% aggregate.' },
      { cycle: '2024', competitiveness: 'High', note: 'Closing merit ~84% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p3',
    universityId: 'u3',
    fieldId: 'cs',
    degreeTitle: 'BS Computer Science',
    duration: '4 years',
    sector: 'Private',
    city: 'Lahore',
    province: 'Punjab',
    eligibility: 'FSc / ICS / A-Levels with at least 50% marks. FAST admission test required.',
    requiredBackground: ['Mathematics'],
    entranceTests: [
      {
        id: 't3',
        name: 'FAST Admission Test',
        fullName: 'FAST-NUCES Admission Test',
        mandatory: true,
        description: 'Subject test for computing and business programs at FAST campuses.',
        syllabus: ['Mathematics', 'English', 'Analytical reasoning'],
        typicalScore: 'Aim for 65%+ for the CS program.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 95000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-06-01',
    applicationClose: '2026-07-20',
    meritHistory: [
      { cycle: '2025', competitiveness: 'Medium', note: 'Closing merit ~72% aggregate.' },
      { cycle: '2024', competitiveness: 'Medium', note: 'Closing merit ~70% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p4',
    universityId: 'u4',
    fieldId: 'ds',
    degreeTitle: 'BS Data Science',
    duration: '4 years',
    sector: 'Private',
    city: 'Lahore',
    province: 'Punjab',
    eligibility: 'FSc Pre-Eng / ICS / A-Levels with at least 65% marks. LUMS admission test (LAT) required.',
    requiredBackground: ['Mathematics'],
    entranceTests: [
      {
        id: 't4',
        name: 'LAT',
        fullName: 'LUMS Admission Test',
        mandatory: true,
        description: 'LUMS standardized test for undergraduate admission.',
        syllabus: ['Mathematics', 'English', 'Analytical reasoning'],
        typicalScore: 'Highly competitive; strong SAT scores also accepted.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 220000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-01-15',
    applicationClose: '2026-03-10',
    meritHistory: [
      { cycle: '2025', competitiveness: 'High', note: 'Need-based aid available; merit very high.' },
      { cycle: '2024', competitiveness: 'High', note: 'Closing merit ~88% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p5',
    universityId: 'u5',
    fieldId: 'se',
    degreeTitle: 'BS Software Engineering',
    duration: '4 years',
    sector: 'Public',
    city: 'Islamabad',
    province: 'Islamabad',
    eligibility: 'FSc Pre-Eng / ICS with at least 60% marks. NTS/CUI test required.',
    requiredBackground: ['Mathematics', 'Physics'],
    entranceTests: [
      {
        id: 't5',
        name: 'CUI Admission Test',
        fullName: 'COMSATS University Admission Test',
        mandatory: true,
        description: 'CUI institutional test for computing and engineering programs.',
        syllabus: ['Mathematics', 'Physics', 'English'],
        typicalScore: 'Aim for 60%+ to be competitive.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 55000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-06-10',
    applicationClose: '2026-07-25',
    meritHistory: [
      { cycle: '2025', competitiveness: 'Medium', note: 'Closing merit ~75% aggregate.' },
      { cycle: '2024', competitiveness: 'Medium', note: 'Closing merit ~73% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p6',
    universityId: 'u6',
    fieldId: 'ee',
    degreeTitle: 'BE Electrical Engineering',
    duration: '4 years',
    sector: 'Public',
    city: 'Karachi',
    province: 'Sindh',
    eligibility: 'FSc Pre-Engineering with at least 60% marks. NED entry test required.',
    requiredBackground: ['Mathematics', 'Physics', 'Chemistry'],
    entranceTests: [
      {
        id: 't6',
        name: 'NED Entry Test',
        fullName: 'NED University Admission Test',
        mandatory: true,
        description: 'NED\'s own test for engineering programs.',
        syllabus: ['Mathematics', 'Physics', 'Chemistry', 'English'],
        typicalScore: 'Aim for 65%+ for electrical.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 28000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-07-01',
    applicationClose: '2026-08-15',
    meritHistory: [
      { cycle: '2025', competitiveness: 'High', note: 'Closing merit ~79% aggregate.' },
      { cycle: '2024', competitiveness: 'High', note: 'Closing merit ~78% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p7',
    universityId: 'u4',
    fieldId: 'bba',
    degreeTitle: 'BBA (Suleman Dawood School of Business)',
    duration: '4 years',
    sector: 'Private',
    city: 'Lahore',
    province: 'Punjab',
    eligibility: 'FSc / FA / A-Levels with at least 65% marks. LAT required.',
    requiredBackground: ['Mathematics', 'English'],
    entranceTests: [
      {
        id: 't7',
        name: 'LAT',
        fullName: 'LUMS Admission Test',
        mandatory: true,
        description: 'LUMS standardized test; SAT scores accepted in lieu.',
        syllabus: ['Mathematics', 'English', 'Analytical reasoning'],
        typicalScore: 'Highly competitive; strong essay matters.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 220000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-01-15',
    applicationClose: '2026-03-10',
    meritHistory: [
      { cycle: '2025', competitiveness: 'High', note: 'Generous aid; merit very high.' },
      { cycle: '2024', competitiveness: 'High', note: 'Closing merit ~86% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p8',
    universityId: 'u7',
    fieldId: 'mbbs',
    degreeTitle: 'MBBS',
    duration: '5 years + 1 year house job',
    sector: 'Public',
    city: 'Lahore',
    province: 'Punjab',
    eligibility: 'FSc Pre-Medical with at least 80% marks. MDCAT required.',
    requiredBackground: ['Biology', 'Chemistry', 'Physics'],
    entranceTests: [
      {
        id: 't8',
        name: 'MDCAT',
        fullName: 'Medical and Dental College Admission Test',
        mandatory: true,
        description: 'National medical entrance test conducted by PMC.',
        syllabus: ['Biology', 'Chemistry', 'Physics', 'English'],
        typicalScore: 'Extremely competitive; aim for 85%+ for KEMU.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 45000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-09-01',
    applicationClose: '2026-10-15',
    meritHistory: [
      { cycle: '2025', competitiveness: 'High', note: 'Closing merit ~91% aggregate.' },
      { cycle: '2024', competitiveness: 'High', note: 'Closing merit ~90% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
  {
    id: 'p9',
    universityId: 'u8',
    fieldId: 'arch',
    degreeTitle: 'B-Architecture',
    duration: '5 years',
    sector: 'Public',
    city: 'Lahore',
    province: 'Punjab',
    eligibility: 'FSc Pre-Eng / ICS / FA with at least 50% marks. Aptitude test + interview required.',
    requiredBackground: ['Mathematics', 'Physics'],
    entranceTests: [
      {
        id: 't9',
        name: 'Aptitude Test',
        fullName: 'PU College of Art & Design Aptitude Test',
        mandatory: true,
        description: 'Drawing and spatial aptitude test for architecture applicants.',
        syllabus: ['Drawing', 'Spatial reasoning', 'General awareness'],
        typicalScore: 'Portfolio and drawing matter; moderate competitiveness.',
        verifiedDate: '2026-07-15',
      },
    ],
    feePerSemester: 18000,
    feeCurrency: 'PKR',
    applicationOpen: '2026-06-20',
    applicationClose: '2026-08-05',
    meritHistory: [
      { cycle: '2025', competitiveness: 'Medium', note: 'Closing merit ~68% aggregate.' },
      { cycle: '2024', competitiveness: 'Low', note: 'Closing merit ~65% aggregate.' },
    ],
    verifiedDate: '2026-07-15',
  },
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 's1',
    name: 'HEC Undergraduate Need-Based Scholarship',
    provider: 'Higher Education Commission',
    type: 'Need-based',
    benefits: 'Full tuition + monthly stipend PKR 6,000',
    eligibility: 'Students enrolled in HEC-recognized public universities with demonstrated financial need.',
    deadline: '2026-10-30',
    fieldIds: ['cs', 'se', 'ds', 'ee', 'bba', 'arch'],
    universityIds: ['u1', 'u2', 'u5', 'u6', 'u8'],
    amount: 'Full tuition + stipend',
    verifiedDate: '2026-07-15',
  },
  {
    id: 's2',
    name: 'LUMS National Outreach Programme (NOP)',
    provider: 'LUMS',
    type: 'Both',
    benefits: 'Full tuition + living allowance for financially disadvantaged high-merit students.',
    eligibility: 'FSc / A-Levels students with strong academics and financial need; separate NOP application.',
    deadline: '2026-02-28',
    fieldIds: ['cs', 'ds', 'bba'],
    universityIds: ['u4'],
    amount: 'Full tuition + living allowance',
    verifiedDate: '2026-07-15',
  },
  {
    id: 's3',
    name: 'PSF Research Promotion Fund (Undergraduate)',
    provider: 'Pakistan Science Foundation',
    type: 'Merit-based',
    benefits: 'PKR 100,000 per year toward tuition',
    eligibility: 'Science and engineering students with 75%+ marks.',
    deadline: '2026-09-15',
    fieldIds: ['cs', 'se', 'ds', 'ee'],
    universityIds: ['u1', 'u2', 'u5', 'u6'],
    amount: 'PKR 100,000/year',
    verifiedDate: '2026-07-15',
  },
  {
    id: 's4',
    name: 'PEEF Master / Undergraduate Scholarship',
    provider: 'Punjab Education Endowment Fund',
    type: 'Need-based',
    benefits: 'Up to PKR 350,000 per year toward tuition',
    eligibility: 'Punjab-domiciled students with financial need enrolled in public universities.',
    deadline: '2026-11-20',
    fieldIds: ['cs', 'se', 'ds', 'ee', 'bba', 'mbbs', 'arch'],
    universityIds: ['u1', 'u7', 'u8'],
    amount: 'Up to PKR 350,000/year',
    verifiedDate: '2026-07-15',
  },
  {
    id: 's5',
    name: 'FAST Financial Aid (Merit-cum-Need)',
    provider: 'FAST-NUCES',
    type: 'Both',
    benefits: '25–100% tuition waiver based on need and merit',
    eligibility: 'FAST students with strong admission test scores and demonstrated financial need.',
    deadline: '2026-08-10',
    fieldIds: ['cs', 'se', 'bba'],
    universityIds: ['u3'],
    amount: '25–100% tuition waiver',
    verifiedDate: '2026-07-15',
  },
  {
    id: 's6',
    name: 'PM National ICT Scholarship',
    provider: 'Ministry of IT & Telecom',
    type: 'Merit-based',
    benefits: 'Full tuition + monthly stipend for ICT-sector students',
    eligibility: 'Top CS/SE students at HEC-recognized universities; merit test.',
    deadline: '2026-09-30',
    fieldIds: ['cs', 'se', 'ds'],
    universityIds: ['u1', 'u2', 'u3', 'u5', 'u6'],
    amount: 'Full tuition + stipend',
    verifiedDate: '2026-07-15',
  },
];

export const SAMPLE_ROADMAP: RoadmapStep[] = [
  {
    id: 'r1',
    title: 'Register for ECAT',
    description: 'Create your UET ECAT portal account and submit the registration form.',
    dueDate: '2026-06-30',
    status: 'done',
    category: 'Test',
    sourceLabel: 'UET Lahore Admissions',
    sourceLink: '#/program/p1',
  },
  {
    id: 'r2',
    title: 'Prepare ECAT syllabus (Maths + Physics)',
    description: 'Focus on FSc Part 1 & 2 Maths and Physics; attempt past papers weekly.',
    dueDate: '2026-07-20',
    status: 'upcoming',
    category: 'Preparation',
    sourceLabel: 'ECAT Syllabus',
    sourceLink: '#/program/p1',
  },
  {
    id: 'r3',
    title: 'Apply to UET Lahore BS CS',
    description: 'Submit online application with academic transcripts and test result.',
    dueDate: '2026-08-10',
    status: 'upcoming',
    category: 'Application',
    sourceLabel: 'UET Lahore BS CS',
    sourceLink: '#/program/p1',
  },
  {
    id: 'r4',
    title: 'Apply for HEC Need-Based Scholarship',
    description: 'Submit financial aid application with income certificate.',
    dueDate: '2026-10-30',
    status: 'upcoming',
    category: 'Scholarship',
    sourceLabel: 'HEC Scholarships',
    sourceLink: '#/scholarships',
  },
  {
    id: 'r5',
    title: 'Gather attested academic documents',
    description: 'Get FSc result card and matric certificate attested from board.',
    dueDate: '2026-07-25',
    status: 'upcoming',
    category: 'Document',
    sourceLabel: 'BISE Lahore',
  },
  {
    id: 'r6',
    title: 'Attend merit list & fee submission',
    description: 'Check first merit list; submit first-semester fee before deadline.',
    dueDate: '2026-09-05',
    status: 'upcoming',
    category: 'Application',
    sourceLabel: 'UET Lahore Admissions',
    sourceLink: '#/program/p1',
  },
];

export const SAMPLE_CHAT: ChatMessage[] = [
  {
    id: 'c1',
    sender: 'ai',
    text: 'Hi! I\'m your NextStep AI assistant. Ask me anything about fields, universities, eligibility, fees, or deadlines — I\'ll cite my sources.',
    timestamp: Date.now() - 60000,
  },
];

export function generateRecommendations(
  educationLevel: EducationLevel | null,
  marks: number | null,
  favoriteSubjects: string[],
  interests: string[],
  strengths: string[],
): Recommendation[] {
  const userTags = new Set<string>([
    ...favoriteSubjects,
    ...interests,
    ...strengths,
  ]);

  const scored = FIELDS.map((field) => {
    const overlap = field.matchTags.filter((t) => userTags.has(t)).length;
    const tagScore = overlap / Math.max(field.matchTags.length, 1);

    let levelScore = 0.3;
    if (educationLevel === 'FSc-PreEng' && ['cs', 'se', 'ee', 'arch'].includes(field.id)) levelScore = 0.9;
    if (educationLevel === 'ICS' && ['cs', 'se', 'ds'].includes(field.id)) levelScore = 0.95;
    if (educationLevel === 'FSc-PreMed' && field.id === 'mbbs') levelScore = 0.95;
    if (educationLevel === 'ICom' && field.id === 'bba') levelScore = 0.9;
    if (educationLevel === 'FA' && field.id === 'arch') levelScore = 0.7;
    if (educationLevel === 'A-Levels' && ['cs', 'se', 'ds', 'bba'].includes(field.id)) levelScore = 0.85;

    let marksScore = 0.5;
    if (marks !== null) {
      if (field.id === 'mbbs' && marks >= 85) marksScore = 0.95;
      else if (field.id === 'mbbs') marksScore = 0.2;
      else if (marks >= 80) marksScore = 0.9;
      else if (marks >= 70) marksScore = 0.75;
      else if (marks >= 60) marksScore = 0.6;
      else marksScore = 0.4;
    }

    const matchScore = Math.round((tagScore * 0.45 + levelScore * 0.3 + marksScore * 0.25) * 100);
    return { field, matchScore };
  });

  scored.sort((a, b) => b.matchScore - a.matchScore);
  return scored.slice(0, 5).map(({ field, matchScore }) => {
    const reasons: string[] = [];
    const overlapTags = field.matchTags.filter((t) => userTags.has(t));
    if (overlapTags.length) reasons.push(`Matches your interests in ${overlapTags.slice(0, 3).join(', ')}.`);
    if (educationLevel) reasons.push(`Strong path from your ${EDUCATION_LEVELS.find((l) => l.value === educationLevel)?.label}.`);
    if (marks !== null && marks >= 80) reasons.push(`Your ${marks}% marks meet typical merit for this field.`);
    else if (marks !== null) reasons.push(`Your ${marks}% marks are workable for several programs in this field.`);
    return {
      fieldId: field.id,
      matchScore,
      explanation: `${field.name} fits because it aligns with your background and interests.`,
      reasons,
    };
  });
}

export const AI_RESPONSES: { keywords: string[]; response: string; sources: { label: string; url: string }[] }[] = [
  {
    keywords: ['ecat', 'test', 'register'],
    response:
      'Yes — for UET Lahore\'s BS Computer Science, ECAT is mandatory. Registration usually opens in June and closes in early August. You can apply with FSc Pre-Engineering or ICS (60%+ marks). The test covers Maths, Physics, Chemistry/CS, and English.',
    sources: [
      { label: 'UET Lahore — BS CS Program', url: '#/program/p1' },
      { label: 'ECAT Syllabus', url: '#/program/p1' },
    ],
  },
  {
    keywords: ['78', 'marks', 'eligible', 'percentage'],
    response:
      'With 78% marks in FSc Pre-Engineering/ICS, you\'re eligible for most CS and SE programs at public universities (UET, NUST, CUI). For LUMS and NUST CS, you\'ll also need a strong entry test score. MBBS would require 85%+ and MDCAT.',
    sources: [
      { label: 'UET Lahore — BS CS', url: '#/program/p1' },
      { label: 'NUST — BS CS', url: '#/program/p2' },
      { label: 'CUI — BS SE', url: '#/program/p5' },
    ],
  },
  {
    keywords: ['scholarship', 'financial', 'aid', 'need'],
    response:
      'Several scholarships fit your profile: HEC Need-Based (full tuition + stipend), PEEF for Punjab students, and LUMS NOP if you\'re applying to LUMS. Deadlines range from February (NOP) to November (PEEF).',
    sources: [
      { label: 'HEC Undergraduate Scholarship', url: '#/scholarships' },
      { label: 'PEEF Scholarship', url: '#/scholarships' },
      { label: 'LUMS NOP', url: '#/scholarships' },
    ],
  },
  {
    keywords: ['fee', 'cost', 'tuition', 'afford'],
    response:
      'Public universities are far more affordable: UET Lahore BS CS is about PKR 22,000/semester, NED EE is PKR 28,000. Private options like FAST are ~PKR 95,000/semester and LUMS ~PKR 220,000 — but both offer strong financial aid.',
    sources: [
      { label: 'UET Lahore — BS CS', url: '#/program/p1' },
      { label: 'FAST — BS CS', url: '#/program/p3' },
      { label: 'LUMS — BS Data Science', url: '#/program/p4' },
    ],
  },
  {
    keywords: ['deadline', 'apply', 'application', 'when'],
    response:
      'Application windows vary: LUMS closes earliest (March), NUST in early July, FAST mid-July, UET and CUI in early August, and KEMU MBBS in mid-October. I\'d recommend building a roadmap so you don\'t miss any.',
    sources: [
      { label: 'Your Personalized Roadmap', url: '#/roadmap' },
      { label: 'UET Lahore — BS CS', url: '#/program/p1' },
    ],
  },
  {
    keywords: ['merit', 'competitive', 'chance'],
    response:
      'Merit changes yearly, so I show competitiveness as High/Medium/Low rather than a precise number. For UET Lahore BS CS, recent closing merit was ~80–82% aggregate (High). For CUI BS SE it\'s Medium (~73–75%). Always check the latest cycle.',
    sources: [
      { label: 'UET Lahore — Merit History', url: '#/program/p1' },
      { label: 'CUI — Merit History', url: '#/program/p5' },
    ],
  },
];

export function findAIResponse(query: string): { text: string; sources: { label: string; url: string }[] } {
  const lower = query.toLowerCase();
  for (const entry of AI_RESPONSES) {
    if (entry.keywords.some((k) => lower.includes(k))) {
      return { text: entry.response, sources: entry.sources };
    }
  }
  return {
    text: 'Great question! I can help with eligibility, entrance tests, fees, deadlines, scholarships, and merit competitiveness. Try asking something like "Can I apply to UET CS with 78%?" or "Which scholarships can I get?"',
    sources: [{ label: 'Browse Programs', url: '#/universities' }],
  };
}
