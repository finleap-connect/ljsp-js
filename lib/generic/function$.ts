import { BaseTypes } from "../enums/base-types";

export function function$(value: any) {
  return typeof value === BaseTypes.Function;
}
