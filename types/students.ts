export type Epoch = '1974' | '1989' | '2004' | 'ALL';

export const EducationValues = [
  'GRADUATE',
  'TWO_GRADUATES',
  'MBA',
  'MASTER',
  'DOCTOR',
] as const;

export type Education = typeof EducationValues[number];

export const JobValues = [
  'PROFESSOR',
  'BANK',
  'CONSULTANT',
  'OLD_TECH',
  'BIG_TECH',
  'STARTUP',
  'BRAZILIAN_STARTUP',
  'OWN',
  'GOVERNMENT',
  'RETIRED',
  'STUDYING',
  'OTHER',
] as const;

export type Job = typeof JobValues[number];

export type YearGraduates = {
  year: number;
  males: number;
  females: number;
};

export type Student = {
  name: string;
  location: string;
  education: Education;
  job: Job;
};

export type City = {
  code: string;
  coordinates: [number, number];
};
