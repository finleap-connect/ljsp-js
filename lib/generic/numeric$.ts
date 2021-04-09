import { not } from "./not";

export function numeric$(item: any) {
  return not(isNaN(item));
}
