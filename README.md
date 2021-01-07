# FII JS Core

[![version][version-badge]][changelog]

[changelog]: CHANGELOG.md
[version-badge]: https://img.shields.io/badge/version-0.1.0-blue.svg

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Coding Standards](#coding-standards)
  - [Submission Guidelines](#submission-guidelines)

* [Core](#core)
  - [String Functions](#string-functions)
    - [str](#str)
    - [strSpace](#strspace)
    - [toPath](#topath)
  - [Generic Functions](#generic-functions)
    - [eq](#eq)
    - [deepEq](#deepeq)
    - [doWork](#dowork)
    - [areDistinct](#aredistinct)
  - [Math Functions](#math-functions)
    - [add](#add)
    - [sub](#sub)
    - [mult](#mult)
    - [div](#div)
    - [quot](#quot)
    - [remain](#remain)
    - [mod](#mod)
    - [inc](#inc)
    - [dec](#dec)
  - [Conditional Functions](#conditional-functions)
    - [iff](#iff)
    - [ifSome](#ifsome)
    - [ifYes](#ifyes)
    - [ifNo](#ifno)
    - [ifClass](#ifclass)
    - [when](#when)
    - [whenNot](#whennot)
    - [cond](#cond)
    - [everyPred](#everypred)
    - [some$](#_some)
  - [List Functions](#list-functions)
    - [findInSetById](#findinsetbyid)
    - [removeFromSetById](#removefromsetbyid)
    - [updateSet](#updateset)
    - [getSectionFromSet](#getsectionfromset)
    - [rightDiff](#rightdiff)
    - [leftDiff](#leftdiff)
    - [part](#part)
    - [conj](#conj)
    - [dissoc](#dissoc)
    - [reduceKv](#reducekv)
    - [listInsert](#listinsert)
    - [makeArray](#makearray)
    - [selectKeys](#selectkeys)
    - [interleave](#interleave)
    - [minLenList](#minlenlist)
    - [subset](#subset)
    - [into](#into)
    - [frequencies](#frequencies)
    - [rest](#rest)
    - [cons](#cons)
    - [sort](#sort)
    - [some](#some)
    - [includes](#includes)
    - [notIncludes](#notincludes)
  - [Function Functions](#function-functions)
    - [juxt](#juxt)
  - [Object Functions](#object-functions)
    - [swap](#swap)
    - [updateIn](#updatein)
    - [addWatch](#addwatch)
    - [removeWatch](#removewatch)
  - [Validation](#validation)
    - [isPositiveInt](#ispositiveint)
    - [isNonNegativeInt](#isnonnegativeint)
  - [Spec](#spec)
* [Branching Flow](#branching-flow)
* [Deployment](#deployment)

## Getting Started

Clone from Git. Run `npm i`.

### Prerequisites

Make sure you have a standard, modern, FE development environment with `git`, and `node` installed and configured.
If you've followed the onboarding steps, you'll be setup correctly.

### Coding Standards

Please see our coding standards, here, for more information [Coding Standards](https://finleap-connect.atlassian.net/wiki/spaces/DS/pages/2319745040/FE+Coding+Standards)

### Submission Guidelines

See the CONTRIBUTING.md

# Core

A set of utility modules for common operations. In most cases an existing lib, such as
`Lodash` can be used. In cases where `Lodash` did not provide an implementation, functions
were added to this core set. An exception is made in cases where `Lodash` did not provide
variadic versions of a function for which a variadic version seemed valuable.

## String Functions

### str

With no args, returns the empty string. With one arg `x`, returns `x.toString()`. `str(null)` returns
the empty string. With more than one arg, returns the concatenation of the `str` args (converted to
strings).

```javascript
import { str } from "@flc-ds/fii-js-core";

const age = 12;

console.log(str("My friend's son is ", age, " years old"));
// "My friend's son is 12 years old".
```

#### Parameters

- | Returns an empty string.
- `*` | converts the value to a string
- `...string` | concatenates values (and converts them to strings)

### strSpace

With no args, returns the empty string. With one arg `x`, returns `x.toString()`. `str(null)` returns
the empty string. With more than one arg, returns a `space-separated` concatenation of the `strSpace`
args (converted to strings).

```javascript
import { str } from "@flc-ds/fii-js-core";

const age = 12;

console.log(strSpace("My friend's son is", age, "years old"));
// "My friend's son is 12 years old".
```

#### Parameters

- | Returns an empty string.
- `*` | converts the value to a string
- `...string` | concatenates values with a space delimiter (and converts them to strings)

### toPath

With no args, returns the empty string. With one arg `x`, returns `x.toString()`. `str(null)` returns
the empty string. With more than one arg, returns a `forward-slash-separated` concatenation of the
`toPath` args (converted to strings).

```javascript
import { toPath } from "@flc-ds/fii-js-core";

const slug = 12579;

console.log(toPath("http://api.docs.com", slug, "reports"));
// "http://api.docs.com/12579/reports".
```

#### Parameters

- | Returns an empty string.
- `*` | converts the value to a string
- `...string` | concatenates values with a forward-slash delimiter (and converts them to strings)

## Generic Functions

### eq

Equality. Returns true if x equals y, false if not. Uses JavaScripts `===`,
`SameValueZero` comparison.

```javascript
import { eq } from "@flc-ds/fii-js-core";

const age = 12;
const day = 12;
const amount = 12;

console.log(eq(age, day, amount));
// true
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### notEq

Equality. Returns true if x is not equal to y, false if true. Uses JavaScripts `===`,
`SameValueZero` comparison.

```javascript
import { notEq } from "@flc-ds/fii-js-core";

const age = 12;
const day = 12;
const amount = 12;

console.log(notEq(age, day, amount));
// false
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### deepEq

Equality. Performs a deep comparison between two values to determine if they are equivalent.
A variadic version of `Lodash`'s `isEqual` function.

```javascript
import { deepEq } from "@flc-ds/fii-js-core";

const first = { one: "two" };
const second = { one: "two" };
const third = { one: "two" };

console.log(deepEq(first, second, third));
// true
```

#### Parameters

- `...Structural` | Variable number of Structural values

### doWork

Evaluates the expressions in order and returns the value of the last. If no expressions are supplied, returns undefined.

```javascript
import { doWork } from "@flc-ds/fii-js-core";

console.log(
  doWork(
    () => "one",
    () => "two",
    () => "three"
  )
);
// "three"
```

#### Parameters

- `...Function` | Variable number of functions

### areDistinct

Returns true if no two of the arguments are ===. Uses JS'
`SameValueZero` comparison. Does `not` deeply compare reference
variables, instead compares them by reference.

```javascript
import { areDistinct } from "@flc-ds/fii-js-core";

console.log(areDistinct(2, 4, 7));
// true

console.log(areDistinct(2, 4, 7, 4));
// false
```

#### Parameters

- `...Function` | Variable number of functions

## Math Functions

### add

Returns the sum of nums. `add()` returns 0.

```javascript
import { add } from "@flc-ds/fii-js-core";

console.log(add());
// 0

const age = 12;
const day = 12;
const amount = 12;

console.log(add(age, day, amount));
// 36
```

#### Parameters

- `...Number` | Variable number of numbers.

### sub

If no ys are supplied, returns the negation of x, else subtracts the ys from x and returns the result.

```javascript
import { sub } from "@flc-ds/fii-js-core";

console.log(sub(12));
// -12

const age = 120;
const day = 10;
const amount = 5;

console.log(sub(age, day, amount));
// 105
```

#### Parameters

- `...Number` | Variable number of numbers.

### mult

Returns the product of nums. `mult()` returns 1.

```javascript
import { mult } from "@flc-ds/fii-js-core";

console.log(mult());
// 1

const age = 3;
const day = 3;
const amount = 3;

console.log(mult(age, day, amount));
// 27
```

#### Parameters

- `...Number` | Variable number of numbers.

### div

If no denominators are supplied, returns 1/numerator,
else returns numerator divided by all of the denominators.

```javascript
import { div } from "@flc-ds/fii-js-core";

console.log(div(10));
// 0.1

const age = 12;
const day = 2;
const amount = 3;

console.log(div(age, day, amount));
// 2
```

#### Parameters

- `...Number` | Variable number of numbers.

### quot

quot[ient] of dividing numerator by denominator.

```javascript
import { quot } from "@flc-ds/fii-js-core";

console.log(quot(10, 3));
// 3

console.log(quot(15, 0));
// thows error
```

#### Parameters

- `divident` | `number` The dividend.
- `divisor` | `number` The divisor.

### remain

The remainder of dividing two numbers.

```javascript
import { remain } from "@flc-ds/fii-js-core";

console.log(remain(10, 9));
// 1

console.log(remain(15, 0));
// thows error
```

#### Parameters

- `divident` | `number` The dividend.
- `divisor` | `number` The divisor.

### mod

Modulus of num and div. Truncates toward negative infinity.

```javascript
import { remain } from "@flc-ds/fii-js-core";

console.log(remain(10, 9));
// 1

console.log(quot(10, -3));
// -2
```

#### Parameters

- `divident` | `number` The dividend.
- `divisor` | `number` The divisor.

### inc

Returns a number one greater than num.

```javascript
import { inc } from "@flc-ds/fii-js-core";

console.log(inc(9));
// 10

const nums = [1, 2, 3, 4];

console.log(nums.map(inc));
// [2,3,4,5]
```

#### Parameters

- `Number` | A number.

### dec

Returns a number one less than num.

```javascript
import { dec } from "@flc-ds/fii-js-core";

console.log(dec(9));
// 8

const nums = [1, 2, 3, 4];

console.log(nums.map(dec));
// [0,1,2,3]
```

#### Parameters

- `Number` | A number.

## Conditional Functions

### iff

A functional version of `if` that always returns a value.

```javascript
import { iff } from "@flc-ds/fii-js-core";

console.log(iff(true, "Monkeys", "Dwarves"));
// "Monkeys"

console.log(iff(false, "Birds", "Castles"));
// "Castles"
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### ifSome

If test is not `null`, evaluates `then` with binding-form bound to the
value of `predicate`, if not, yields `else`.

```javascript
import { ifSome } from "@flc-ds/fii-js-core";

console.log(ifSome("true", (val) => val, "nope"));
// "true"
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### ifYes

Evaluates test. If truthy, evaluates and returns then expr,
otherwise undefined.

```javascript
import { ifYes } from "@flc-ds/fii-js-core";

console.log(ifYes(true, "Monkeys"));
// "Monkeys"

console.log(ifYes(false, "Birds"));
// undefined
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### ifNo

Evaluates test. If falsey, evaluates and returns then expr,
otherwise undefined.

```javascript
import { ifNo } from "@flc-ds/fii-js-core";

console.log(ifNo("", "Monkeys"));
// "Monkeys"

console.log(ifNo(12, "Birds"));
// undefined
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### ifClass

A convenience method for including conditional class names.
Evaluates test. If truthy, evaluates and returns then expr,
otherwise the _empty string_.

```javascript
import { ifNo } from "@flc-ds/fii-js-core";

console.log(ifNo("", "Monkeys"));
// "Monkeys"

console.log(ifNo(12, "Birds"));
// undefined
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### when

Evaluates test. If truthy, evaluates body in an implicit doWork.

```javascript
import { when } from "@flc-ds/fii-js-core";

console.log(
  when(
    true,
    () => "one",
    () => "two",
    () => "three"
  )
);
// "three"
```

#### Parameters

- `...Structural` | Variable number of Structural values

### whenNot

Evaluates test. If falsey, evaluates body in an implicit doWork.

```javascript
import { when } from "@flc-ds/fii-js-core";

console.log(
  when(
    true,
    () => "one",
    () => "two",
    () => "three"
  )
);
// "three"
```

#### Parameters

- `...Structural` | Variable number of Structural values

### cond

Takes a set of predicate/expr pairs. If the predicates are functions,
it evaluates each function one at a time. If a predicate returns truthy,
`cond` returns the value of the corresponding expr. If the expr is a
function, it is evaluated. `cond` doesn't process any of the
remaining predicates or exprs. `cond()` returns undefined.

```javascript
import { cond, ELSE } from "@flc-ds/fii-js-core";

const score = 85;
// prettier-ignore
const grade =  cond(
   score >= 90, "A",
   score >= 80, "B",
   score >= 70, "C",
   score >= 60, "D",
   ELSE, "F"
)
console.log(grade);
// "B"

// Lazily evaluated
// prettier-ignore
const grade =  cond(
   () => score >= 90, () => "A",
   () => score >= 80, () => "B",
   () => score >= 70, () => "C",
   () => score >= 60, () => "D",
   ELSE, "F"
)
console.log(grade);
// "B"
```

#### Parameters

Most versions of `cond` currently available in JS rely on nested arrays.
This makes using `cond` cumbersome, at best. This version of cond relies
on providing the correct number of arguments to the function. Calls to
`cond` must receive an even number of arguments in predicate/consequent
form (or no arguments). Predicates and consequents can be either functions
or expressions. If functions, they are lazily evaluated. If expressions,
then all the expressions are evaluated, as expected, when they are passed
into `cond`.

### everyPred

Takes a set of predicates and returns a function `f` that returns true if all of its
composing predicates return a logical true value against all of its arguments, else it returns
false. Note that `f` is short-circuiting in that it will stop execution on the first
argument that triggers a logical false result against the original predicates.

```javascript
import { everyPred } from "@flc-ds/fii-js-core";

const isGtZeroIntMultipleTwo = everyPred(
  (a) => Number.isInteger(a),
  (a) => a > 0,
  (a) => a % 2 === 0
);

console.log(isGtZeroIntMultipleTwo(2, 4, 6));
//true

console.log(isGtZeroIntMultipleTwo(2, 4, 7));
// false
```

#### Parameters

Most versions of `cond` currently available in JS rely on nested arrays.
This makes using `cond` cumbersome, at best. This version of cond relies
on providing the correct number of arguments to the function. Calls to
`cond` must receive an even number of arguments in predicate/consequent
form (or no arguments). Predicates and consequents can be either functions
or expressions. If functions, they are lazily evaluated. If expressions,
then all the expressions are evaluated, as expected, when they are passed
into `cond`.

### _some$

Returns true if x is not nil, false otherwise.

```javascript
import { some$ } from "@flc-ds/fii-js-core";

console.log(some$(2));
// true

console.log(some$());
// false
```

#### Parameters

Most versions of `cond` currently available in JS rely on nested arrays.
This makes using `cond` cumbersome, at best. This version of cond relies
on providing the correct number of arguments to the function. Calls to
`cond` must receive an even number of arguments in predicate/consequent
form (or no arguments). Predicates and consequents can be either functions
or expressions. If functions, they are lazily evaluated. If expressions,
then all the expressions are evaluated, as expected, when they are passed
into `cond`.

## List Functions

### findInSetById

Finds an item in a set of objects with ids by matching the value
of each item's id property against the provided value.

```javascript
import { findInSetById } from "@flc-ds/fii-js-core";

const set = [{ id: 1 }, { id: 2 }, { id: 3 }];
const result = findInSetById(set, 2);
console.log(result);
// {id: 2}

const set = [{ name: 1 }, { name: 2 }, { name: 3 }];
const result = findInSetById(set, 2, "name");
console.log(result);
// { name: 2 }
```

#### Parameters

- `set` | `Array` The set to search.
- `id` | `*` The id of the desired element.
- `idProp` | `string` By default equal to `id`. Can be overridden if the "id" prop is not "id".

### removeFromSetById

Removes an item from a set of objects with ids by matching the value
of each item's id property against the provided value. Returns a
new set with the item removed.

```javascript
import { removeFromSetById } from "@flc-ds/fii-js-core";

const set = [{ id: 1 }, { id: 2 }, { id: 3 }];
const result = removeFromSetById(set, 2);
console.log(result);
//  [{ id: 1 }, { id: 3 }]

const set = [{ name: 1 }, { name: 2 }, { name: 3 }];
const result = removeFromSetById(set, 2, "name");
console.log(result);
//  [{ name: 1 }, { name: 3 }]
```

#### Parameters

- `set` | `Array` The set to search.
- `id` | `*` The id of the desired element.
- `idProp` | `string` By default equal to `id`. Can be overridden if the "id" prop is not "id".

### updateSet

Intended to be used for immutable updates. Finds an item in a set
of objects with ids by matching the value of each item's id property
against the id of the provided value, and the replaces the found item
with the item provided to the function.

```javascript
import { updateSet } from "@flc-ds/fii-js-core";

const set = [{ id: 1 }, { id: 2 }, { id: 3 }];
const result = updateSet(set, { id: 2, name: "Pete" });
console.log(result);
//  [{ id: 1 }, { id: 2, name: "Pete" }, { id: 3 }]

const set = [{ name: 1 }, { name: 2 }, { name: 3 }];
const result = updateSet(set, { name: 2, age: 22 }, "name");
console.log(result);
//  [{ name: 1 }, { name: 2, age: 22 }, { name: 3 }]
```

#### Parameters

- `set` | `Array` The set to search.
- `id` | `*` The id of the desired element.
- `idProp` | `string` By default equal to `id`. Can be overridden if the "id" prop is not "id".

### getSectionFromSet

Given a second number, and a section size, returns a
portion of an array. The section size partitions the
set into groups the size of partition size. The section
number, then, refers to the number of the group to be
returned.

```javascript
import { getSectionFromSet } from "@flc-ds/fii-js-core";

const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// below will effectively split set into [1, 2, 3, 4] [5, 6, 7, 8] [9, 10]
// note that sections are 4 in number, corresponding to the section size
const result = getSectionFromSet(set, 2, 4);
console.log(result);
//  [5, 6, 7, 8]
```

#### Parameters

- `set` | `Array` The set to extract a subset from.
- `section` | `number` The index of the section to return
- `sectionSize` | `number` The number of elements that make up a section in the set.

### rightDiff

When comparing two sets, returns all the elements in the right set
that are not in the left set.

```javascript
import { rightDiff } from "@flc-ds/fii-js-core";

const left = [1, 2, 3, 4];
const right = [1, 2, 3, 4, 5, 6, 7, 8];

const result = rightDiff(left, right);
console.log(result);
//  [5, 6, 7, 8]
```

#### Parameters

- `left` | `Array`
- `right` | `Array`

### leftDiff

When comparing two sets, returns all the elements in the left set
that are not in the right set.

```javascript
import { leftDiff } from "@flc-ds/fii-js-core";

const left = [1, 2, 3, 4, 5, 6, 7, 8];
const right = [1, 2, 3, 4];

const result = leftDiff(left, right);
console.log(result);
//  [5, 6, 7, 8]
```

#### Parameters

- `left` | `Array`
- `right` | `Array`

### part

Creates an array of elements split into groups the length of size.

```javascript
import { part } from "@flc-ds/fii-js-core";

const set = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = part(set, 3);
console.log(result);
//  [ [1, 2, 3, 4], [5, 6, 7, 8], [6, 7, 8, 9]]
```

#### Parameters

- `set` | `Array`
- `groupSize` | `number`

### conj

Returns a new set with the param added to the end of the set.
Works with Arrays or Objects (shallow copy).

```javascript
import { conj } from "@flc-ds/fii-js-core";

const set = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = conj(set, 10);
console.log(result);
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const obj = { one: 1 };
const result = conj(obj, { two: 2 });
console.log(result);
//  { one: 1, two: 2 }
```

#### Parameters

- `set` | `Array`
- `groupSize` | `number`

### dissoc

dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
that does not contain a mapping for key(s).

```javascript
import { dissoc } from "@flc-ds/fii-js-core";

console.log(dissoc({ 1: 1, 2: 2, 3: 3 }, "1", "3"));
// { 2: 2 }
```

#### Parameters

- `set` | `Array`
- `groupSize` | `number`

### reduceKv

Reduces an associative collection. `f` should be a function of 3
arguments. Returns the result of applying `f` to `init`, the first `key`
and the first `value` in `coll`, then applying `f` to that result and the
2nd `key` and `value`, etc. If `coll` contains no entries, returns `init`
and `f` is not called. Note that `reduce-kv` is supported on `Arrays`,
where the `keys` will be the `ordinals`.

```javascript
import { reduceKv } from "@flc-ds/fii-js-core";

function flipKv(acc, key, value) {
  acc[value] = key;
  return acc;
}

const map = { one: "count", bob: "name", leipzig: "city" };

console.log(reduceKv(flipKv, {}, map));
// {
//   city: "leipzig",
//   count: "one",
//   name: "bob"
// }
```

#### Parameters

- `map` | `Array | Object`
- `key` | `string`
- `value` | `*`

### listInsert

The `listInsert` function is an immutable alternative to the
`Array.prototype.splice` method, which mutates the array in place.
This function, and its implementors (`listInsertBefore`, and `listInsertAfter`),
are also more semantic and provide named parameters to improve readability.

```javascript
import { listInsertBefore, listInsertAfter } from "@flc-ds/fii-js-core";

console.log(listInsertBefore({ source: [1, 2, 3, 4], insert: 5, locator: 3 }));
// [1, 2, 5, 3, 4]

console.log(listInsertAfter({ source: [1, 2, 3, 4], insert: 5, locator: 3 }));
// [1, 2, 3, 5, 4]
```

#### Parameters

- `source` | `Array`
- `insert` | `*`
- `locator` | `*`

### makeArray

Given an element `n`, returns an array of `n`. If `n` is already an Array,
returns `n`.

```javascript
import { makeArray } from "@flc-ds/fii-js-core";

console.log(makeArray(3));
// [3]

console.log(makeArray([1, 2, 3, 4]));
// [1, 2, 3, 4]
```

#### Parameters

- `item` | `*`

### selectKeys

Returns a map containing only those entries in map whose key is in keys.

```javascript
import { selectKeys } from "@flc-ds/fii-js-core";

console.log(selectKeys({ one: 1, two: 2, three: 3 }, ["one", "two"]));
// { one: 1, two: 2 }
```

#### Parameters

- `map` | `Object`
- `keys` | `Array<string>`

### interleave

Returns `undefined` if passed no values, `coll` if passed only one coll,
otherwise returns a `coll` of the first item in each `coll`, then the second etc.

```javascript
import { interleave } from "@flc-ds/fii-js-core";

console.log(interleave([1, 2, 3, 4], ["a", "b", "c"]));
// [1, "a", 2, "b", 3, "c"]

// stops at the shortest array in the set
console.log(interleave([1, 2, 3, 4], ["a", "b", "c", "d"], ["nine", "eight"]));
// [1, "a", "nine", 2, "b", "eight"]
```

#### Parameters

- `lists` A variadic set of lists.

### minLenList

Returns the list in a list of lists that has the shortest length.

```javascript
import { minLenList } from "@flc-ds/fii-js-core";

console.log(minLenList([1, 2, 3, 4], ["a", "b", "c"], [1, 2]));
// [1, 2]
```

#### Parameters

- `lists` A variadic set of lists.

### subset

Is set1 a subset of set2?

```javascript
import { subset } from "@flc-ds/fii-js-core";

console.log(subset([1, 2, 3, 4], [1, 2, 3]));
// true

console.log(subset([1, 2, 3, 4], [7, 8, 9]));
// false
```

#### Parameters

- `lists` A variadic set of lists.

### into

Returns a new coll consisting of `to`-coll with all of the items of
`from`-coll conjoined. A transformation function may be supplied.

```javascript
import { into } from "@flc-ds/fii-js-core";

console.log(into());
// []
console.log(into([1, 2, 3]));
// [1, 2, 3]
console.log(into([0], [1, 2, 3]));
// [0, 1, 2, 3]

/* With Transformation function */
function sum(set) {
  return set.map((item) => item + 1);
}

console.log(into([0], sum, [1, 2, 3]));
// [0, 2, 3, 4]
```

#### Parameters

- `lists` A variadic set of lists.

### frequencies

Returns a map from distinct items in coll to the number of times
they appear.

```javascript
import { frequencies } from "@flc-ds/fii-js-core";

console.log(frequencies([1, 2, 1, 2, 3, 43, 3, 2, 3]));
/* {
 *  1: 2,
 *  2: 3,
 *  3: 3,
 *  43: 1
 *}
 */
```

#### Parameters

- `set` An Array.

### rest

Returns a possibly empty Array of the items after the first.

```javascript
import { rest } from "@flc-ds/fii-js-core";

console.log(rest([1, 2, 3, 4, 5]));
// [2, 3, 4, 5]

console.log(rest([1]));
// []
```

#### Parameters

- `set` An Array.

### cons

Returns a new Array where `item` is the first element and `array` is
the rest.

```javascript
import { cons } from "@flc-ds/fii-js-core";

console.log(cons(1, [4, 5, 6]));
// [1, 4, 5, 6]

console.log(cons([1, 2, 3], [4, 5, 6]));
// [[1, 2, 3], 4, 5, 6]
```

#### Parameters

- `set` An Array.

### sort

Returns a sorted sequence of the items in Array. If no comparator is
supplied, uses default sort. Immutable . Returns a sorted copy of the
Array.

```javascript
import { sort } from "@flc-ds/fii-js-core";

console.log(sort([1, 4, 3, 5, 7]));
// [1, 3, 4, 5, 7]

var items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];

function sortAccent(a, b) {
  return a.localeCompare(b);
}

console.log(sort(sortAccent, items));
// ["adieu", "café", "communiqué", "éclair", "premier", "réservé"]
```

#### Parameters

- `set` An Array.

### some

Returns the first logical true value of (pred x) for any x in set,
else nil. In contrast to `Array.prototype.some`, returns a value, 
not a `Boolean`. `some` is actually a functional wrapper for
`Array.prototype.find`.

```javascript
import { some } from "@flc-ds/fii-js-core";

console.log(some((item) => item > 1, [1, 4, 3, 5, 7]));
// 4
```

#### Parameters

- `set` An Array.

### flattenChildTree

Returns a flattened array of a tree-like array structure, where the Array
contains objects that have a children property, which is nested.

```javascript
import { flattenChildTree } from "@flc-ds/fii-js-core";

console.log(
  JSON.stringify(
    flattenChildTree([
      {
        one: 1,
        children: [
          {
            two: 2,
            children: [
              {
                three: 3,
                children: []
              }
            ]
          }
        ]
      },
      {
        one: 1,
        children: [
          {
            two: 2,
            children: []
          }
        ]
      }
    ])
  )
)
/*  [
 *    { one: 1, children: [{ two: 2, children: [{ three: 3, children: [] }] }] },
 *    { two: 2, children: [{ three: 3, children: [] }] },
 *    { three: 3, children: [] },
 *    { one: 1, children: [{ two: 2, children: [] }] },
 *    { two: 2, children: [] }
 *  ];
 */
```

#### Parameters

- `set` An Array.

### includes

A functional, variadic implementation of `Array.prototype.includes`.

```javascript
import { includes } from "@flc-ds/fii-js-core";

console.log(includes([1,2,3], 2));
// true

console.log(includes([1,2,3], 2, 3))
// true

console.log(includes([1,2,3], 2, 5))
// false
```

#### Parameters

- `set` An Array.

### notIncludes

An inverted functional, variadic implementation of `Array.prototype.includes`.

```javascript
import { notIncludes } from "@flc-ds/fii-js-core";

console.log(notIncludes([1,2,3], 2));
// false

console.log(notIncludes([1,2,3], 2, 3))
// false

console.log(notIncludes([1,2,3], 2, 5))
// true
```

#### Parameters

- `set` An Array.

## Function Functions

### juxt

Takes a set of functions and returns a fn that is the juxtaposition
of those fns. The returned fn takes a variable number of args (each
function passed to `juxt` must take the same number of args. When
calling the function returned by `juxt`, you must match this variadicity),
and returns an Array containing the result of applying each fn to the
args (left-to-right).

((juxt a b c) x) => [(a x) (b x) (c x)]

```javascript
import { juxt } from "@flc-ds/fii-js-core";

const test = juxt(
  (n) => n * 2,
  (n) => n + 1
);

console.log(test(3));
// [6, 4]
```

#### Parameters

- `args` | `Function` Variadic. One or more functions.

## Object Functions

### swap

Swaps the value of an object to be: `(apply f current-value-of-object args)`.
Returns the value that was swapped in. `swap` returns a new object. The
original object is unchanged. Uses lodash's `cloneDeep` to for working with
nested objects.

```javascript
import { swap, conj } from "@flc-ds/fii-js-core";

const obj = { one: 1, two: { abe: "eff" } };

console.log(swap(obj, conj, { three: "test" }, { four: "four" }));
/*
 * {
 *    four: "four",
 *    one: 1,
 *    three: "test",
 *    two: {
 *      abe: "eff"
 *    }
 * }
 */
```

#### Parameters

- `args` | `Function` Variadic. One or more functions.

### updateIn

'Updates' a value in a nested associative structure, where `ks` is a
sequence of keys and `f` is a function that will take the old value
and any supplied args and return the new value, and returns a new
nested structure. If any levels do not exist, hash-maps will be
created.

```javascript
import { updateIn, inc } from "@flc-ds/fii-js-core";

const base = { a: { b: 4 } };

console.log(updateIn(base, ["a", "b"], inc));
/*
 * {
 * a: {
 *   b: 4
 * }
 */

console.log(updateIn(base, ["a", "b"], add, 10));
/*
 * {
 * a: {
 *   b: 14
 * }
 */
```

#### Parameters

- `map` | `Object` An object to update. Works with nested objects.
- `updatePath` | `Array` An Array where the order of the values correspond
  to nested levels in the object. For example, in the example above, the nested
  property `b` in the object `{ a: { b: 4 } }` is referenced in the Array like
  so: `["a", "b"]`
- `fn` | `Function` An update function. The function receives the `map` and
  (optionally) any additional arguments passed to `updateIn`.
- `rest` | `*` Variadic. Any number of additional arguments to pass to the
  update function.

### addWatch

Adds a watch function to an object. The watch
fn must be a fn of 4 args: a key, the object, its old-state, its
new-state. Whenever the reference's state changes,
any registered watches will have their functions called.
Keys must be unique per reference, and can be used to remove
the watch with remove-watch, but are otherwise considered opaque by
the watch mechanism. Adds a non-writable, non-enumerable property
`___watcher` to the object. This property is used internally by
`core` to maintain the watched state of an object across immutable
updates.

```javascript
import { addWatch } from "@flc-ds/fii-js-core";

const ferret = { one: 1, two: 2, three: 3 };

const watchedFerret = addWatch(ferret, "two", (key, object, oldState, newState) => {
  console.log(`"ferret updated: ${key}, ${oldState} - ${newState}"`);
});

swap(watchedFerret, (ferret) => {
  ferret.two = 42;
  return ferret;
});
// ferret updated: two, 22 - 42\""
```

#### Parameters

- `map` | `Object` An object to update. Works with nested objects.
- `updatePath` | `Array` An Array where the order of the values correspond
  to nested levels in the object. For example, in the example above, the nested
  property `b` in the object `{ a: { b: 4 } }` is referenced in the Array like
  so: `["a", "b"]`
- `fn` | `Function` An update function. The function receives the `map` and
  (optionally) any additional arguments passed to `updateIn`.
- `rest` | `*` Variadic. Any number of additional arguments to pass to the
  update function.

### removeWatch

Removes a watch (set by add-watch) from an object.

```javascript
import { removeWatch } from "@flc-ds/fii-js-core";

const ferret = { one: 1, two: 2, three: 3 };

const watchedFerret = addWatch(ferret, "two", (key, object, oldState, newState) => {
  console.log(`"ferret updated: ${key}, ${oldState} - ${newState}"`);
});

swap(watchedFerret, (ferret) => {
  ferret.two = 42;
  return ferret;
});
// ferret updated: two, 22 - 42\""

removeWatch(watchedFerret, "two");

swap(watchedFerret, (ferret) => {
  ferret.two = 42;
  return ferret;
});
// Nothing...
```

#### Parameters

- `map` | `Object` An object to update. Works with nested objects.
- `updatePath` | `Array` An Array where the order of the values correspond
  to nested levels in the object. For example, in the example above, the nested
  property `b` in the object `{ a: { b: 4 } }` is referenced in the Array like
  so: `["a", "b"]`
- `fn` | `Function` An update function. The function receives the `map` and
  (optionally) any additional arguments passed to `updateIn`.
- `rest` | `*` Variadic. Any number of additional arguments to pass to the
  update function.

## Validation

### isPositiveInt

Returns true if the value passed in is a positive integer

```javascript
import { isPositiveInt } from "@flc-ds/fii-js-core";

console.log(isPositiveInt(1));
// true

console.log(isPositiveInt(0));
// false
```

#### Parameters

- `num` | `Number`

### isNonNegativeInt

Returns true if the value passed in is greater than -1.

```javascript
import { isNonNegativeInt } from "@flc-ds/fii-js-core";

console.log(isNonNegativeInt(1));
// true

console.log(isNonNegativeInt(0));
// true

console.log(isNonNegativeInt(-5));
// false
```

#### Parameters

- `num` | `Number`

## Spec

Specifies the structure of data, or validates it. Each spec describes a set of allowed values.
There are several ways to build specs, and all of them can be composed to build more
sophisticated specs. At it's core, `spec` is quite simple. It evaluates an array of (truthy|falsy)
values, looking for the existence of a `falsey` value. If it encounters a `falsey` value, it
throws an error, indicating what failed and where. Spec takes an object with two properties:
`func` - `spec` will use this to tell you where the failure occurred, and `spec` an object whose
property names will be used as error messages should the `spec` fail.

```javascript
import { spec } from "@flc-ds/fii-js-core";

function when(condition, first, second) {
  spec({
    func: "when",
    spec: { firstIsFunction: isFunction(first), secondIsArray: Array.isArray(second) }
  });
  if (condition) {
    return doWork(rest);
  }
}

when(true, 0, 1);
// throws error "Assertion Failed at function when: firstIsFunction, secondIsArray"
```

#### Parameters

Supplied as an object with the following properties:

- `func` | `String` The name of the function.
- `spec` | `Object` An object, as described above.

##### Branching Flow

We use the Release Flow methodology for our branching and release flow. For details, see

[Release Flow](https://finleap-connect.atlassian.net/wiki/spaces/DS/pages/2302967817/FE+Application+Release+Process)

# Deployment

Deployment is handled by GitLab; for details see the `.gitlab-ci.yml`.
