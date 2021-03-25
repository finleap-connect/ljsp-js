import { eq } from "./eq";
import { BaseTypes } from "../enums/base-types";

export function string$(value: any) {
  return eq(typeof value, BaseTypes.String);
}
