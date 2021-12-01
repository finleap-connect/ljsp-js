import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";
export declare class _Set extends _Collection implements ICollection {
    get count(): any;
    get(index: number): any;
    append(item: any): void;
    prepend(item: any): void;
    appendAll(coll: TCollection): void;
    get empty(): Set<unknown>;
    clear(): void;
    contains$(item: any): any;
    remove(item: any): void;
    removeIdx(item: any): void;
    slice(base: number, end?: number): Set<any>;
}
