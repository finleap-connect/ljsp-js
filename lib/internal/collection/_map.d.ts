import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";
export declare class _Map extends _Collection implements ICollection {
    get count(): any;
    get(index: number | string): undefined;
    append(item: any): void;
    prepend(item: any): void;
    appendAll(coll: TCollection): void;
    get empty(): Map<any, any>;
    clear(): void;
    contains$(item: any): any;
    remove(item: any): void;
    removeIdx(index: number): void;
    slice(base: number, end?: number): Map<unknown, unknown>;
    indexOf(item: any): number;
    lastIndexOf(item: any): number;
}
