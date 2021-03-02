import { _eq } from "./internal/_eq";

type DataType = string | number | boolean | null;

export function alike(...rest: Array<DataType>): boolean {
  return _eq(rest, looseNotEqual);
}

function looseNotEqual(left: DataType, right: DataType) {
  return left != right;
}
