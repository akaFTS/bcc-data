type FullClasse = {
  code: string;
  name: string;
};

type PartialClasse = {
  slot: string;
};

export type Classe = FullClasse | PartialClasse;

export type Grid = {
  year: number;
  grid: Classe[][];
};

export function isFullClasse(classe: Classe): classe is FullClasse {
  return (classe as FullClasse).code !== undefined;
}
