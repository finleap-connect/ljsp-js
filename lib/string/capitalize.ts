import { blank$ } from "./blank$";
import { str } from "./str";
import { upperCase } from "./upper-case";
import { lowerCase } from "./lower-case";

export function capitalize(s: string): string {
  if (blank$(s)) return s;
  return str(upperCase(s.charAt(0)), lowerCase(s.substring(1)));
}
