export const APP_NAME = 'AropPortfolio';
export const STUDENT_NAME = 'Arop Malual';

// Replace with your real registration number before submission.
export const REGISTRATION_NUMBER = '25/27389';

export const VERIFICATION_CODE =
  REGISTRATION_NUMBER === '25/27389'
    ? 'MOB-A2-LLLL'
    : 'MOB-A2-' + REGISTRATION_NUMBER.slice(-4);

// App theme: black, white, and light red only.
export const COLORS = {
  navy: '#000000',
  navyLight: '#000000',
  teal: '#FF8080',
  background: '#000000',
  white: '#FFFFFF',
  text: '#FFFFFF',
  muted: '#FFFFFF',
  border: '#FF8080',
  lightTeal: '#000000',
  danger: '#FF8080',
  success: '#FF8080',
};

export const INITIAL_PROFILE = {
  headline: 'Software Engineering Student | Web Developer',
  bio: 'I am a Year 3 Software Engineering student passionate about programming, problem solving, and building useful digital solutions. I enjoy developing websites, exploring mobile app development, and continuously learning new technologies.',
  primarySkill: 'HTML',
  availability: 'Open to opportunities',
};

export const SKILLS = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 100 },
  { name: 'MySQL', level: 80 },
  { name: 'Java', level: 70 },
  { name: 'PHP', level: 60 },
  { name: 'Python', level: 50 },
  { name: 'React', level: 40 },
];

export const EDUCATION = [
  {
    period: 'Current',
    title: 'Year 3 — Software Engineering',
    description:
      'Studying software development, programming, databases, and mobile application development.',
  },
];

export const PROJECTS = [
  {
    id: 'community-outreach',
    title: 'Community Health Outreach',
    category: 'Community-focused application',
    problem:
      'Community outreach activities can be difficult to organize and communicate when information is scattered across different channels.',
    contribution:
      'A portfolio project exploring how a simple mobile interface can organize and present community outreach information. Update this description to accurately reflect your own implementation.',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    outcome:
      'A mobile application concept focused on accessible community information. Add verified results after testing your implementation.',
  },
  {
    id: 'safe-market',
    title: 'Musanze Safe Market',
    category: 'Market inspection application',
    problem:
      'Market inspection information can be difficult to track consistently when visits and observations are recorded manually.',
    contribution:
      'A mobile application project focused on presenting market inspection information and supporting the recording of visits. Edit this to match the features you actually implemented.',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    outcome:
      'A practical project for exploring digital market inspection workflows. Add real testing results when available.',
  },
];
