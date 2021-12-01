import { TCollection } from "../../types/t-collection";
import { _Collection } from "./_meta-collection";
import { ICollection } from "./i-collection";
export declare class _String extends _Collection implements ICollection {
    get count(): any;
    get(index: number): any;
    append(item: string): void;
    prepend(item: any): void;
    appendAll(coll: TCollection): void;
    get empty(): string;
    clear(): void;
    contains$(item: any): any;
    remove(item: any): void;
    removeIdx(index: any): void;
    slice(base: number, end?: number): any;
}
