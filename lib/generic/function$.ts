import { BaseTypes } from "../enums/base-types";
import { eq } from "./eq";

export function function$(value: any) {
  return eq(typeof value, BaseTypes.Function);
}
