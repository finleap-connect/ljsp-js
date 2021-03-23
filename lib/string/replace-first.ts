import { regExp$ } from "../generic/reg-exp$";

export function replaceFirst(str: string, matcher: string | RegExp, replacement: string) {
  if (regExp$(matcher)) {
    const regExStr = matcher.toString();
    const lastIndex = regExStr.lastIndexOf("/");
    const parsed = regExStr.slice(1, lastIndex);
    const args = regExStr.slice(lastIndex + 1).replace("g", "");
    matcher = new RegExp(parsed, args);
  }
  return str.replace(matcher, replacement);
}
