export type Record = {
  year: number;
  text: string;
  date?: string;
  featured?: boolean;
};

export type YearEntry = {
  year: number;
  records: Record[];
};

export type Professor = {
  code: string;
  name: string;
  image: StaticImageData;
};

export type Level = 'MS0' | 'MS1' | 'MS2' | 'MS3' | 'MS5' | 'MS6';

export type ProfessorYearEntry = {
  [level in Level]?: string[];
};
