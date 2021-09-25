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
}