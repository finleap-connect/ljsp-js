import { _loopArgPairs } from "../internal/_loop-arg-pairs";

export function M(...rest: any[]) {
  const args: any[] = [];
  _loopArgPairs(rest, (one: any, two: any) => {
    args.push([one, two]);
  });
  return new Map(args);
}
