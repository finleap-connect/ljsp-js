export function subs(str: string, start: number, end?: number) {
  return str.substr(start, end ? end - 1 : undefined);
}
