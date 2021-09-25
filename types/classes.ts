export type Area = "THEORY" | "SOFTWARE" | "AI" | "ESCIENCE" | "OTHERS";

export type Classe = {
  code: string;
  area: Area;
  beginYear: number;
  endYear: number;
  names: { start: number; name: string }[];
};
