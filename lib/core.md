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
import { str } from "lib/core";

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
import { str } from "lib/core";

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
import { toPath } from "lib/core";

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
import { eq } from "lib/core";

const age = 12;
const day = 12;
const amount = 12;

console.log(eq(age, day, amount));
// true
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### deepEq

Equality. Performs a deep comparison between two values to determine if they are equivalent.
A variadic version of `Lodash`'s `isEqual` function.

```javascript
import { deepEq } from "lib/core";

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
import { doWork } from "lib/core";

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
import { areDistinct } from "lib/core";

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
import { add } from "lib/core";

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
import { sub } from "lib/core";

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
import { mult } from "lib/core";

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
import { div } from "lib/core";

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
import { quot } from "lib/core";

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
import { remain } from "lib/core";

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
import { remain } from "lib/core";

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
import { inc } from "lib/core";

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
import { dec } from "lib/core";

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
import { iff } from "lib/core";

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
import { ifSome } from "lib/core";

console.log(ifSome("true", (val) => val, "nope"));
// "true"
```

#### Parameters

- `...Primitive` | Variable number of primitive values

### ifYes

Evaluates test. If truthy, evaluates and returns then expr,
otherwise undefined.

```javascript
import { ifYes } from "lib/core";

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
import { ifNo } from "lib/core";

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
import { ifNo } from "lib/core";

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
import { when } from "lib/core";

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
import { when } from "lib/core";

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
import { cond, ELSE } from "lib/core";

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
import { everyPred } from "lib/core";

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

## List/Set Functions

### findInSetById

Finds an item in a set of objects with ids by matching the value
of each item's id property against the provided value.

```javascript
import { findInSetById } from "lib/core";

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
import { removeFromSetById } from "lib/core";

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
import { updateSet } from "lib/core";

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
import { getSectionFromSet } from "lib/core";

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
import { rightDiff } from "lib/core";

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
import { leftDiff } from "lib/core";

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
import { part } from "lib/core";

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
import { conj } from "lib/core";

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
import { dissoc } from "lib/core";

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
import { reduceKv } from "lib/core";

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
import { listInsertBefore, listInsertAfter } from "lib/core";

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
import { makeArray } from "lib/core";

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
import { selectKeys } from "lib/core";

console.log(selectKeys({ one: 1, two: 2, three: 3 }, ["one", "two"]));
// { one: 1, two: 2 }
```

#### Parameters

- `map` | `Object`
- `keys` | `Array<string>`
