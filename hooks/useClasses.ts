import { classes } from "~/data/classes/classes.ts";
import { Area } from "~/types/classes.ts";

export default function useClasses(
  activeArea: Area | null,
  activeYear: number | null,
) {
  return classes
    .filter((classe) => activeArea === null || activeArea === classe.area)
    .filter(
      (classe) =>
        activeYear === null ||
        (classe.beginYear <= activeYear && classe.endYear >= activeYear),
    );
}
