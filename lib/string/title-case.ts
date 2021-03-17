import { capitalize } from "./capitalize";

export function titleCase(str: string): string {
  return str.split(" ").map(capitalize).join(" ");
}
