# FII JS Core

[![version][version-badge]][changelog]

[changelog]: CHANGELOG.md
[version-badge]: https://img.shields.io/badge/version-0.1.0-blue.svg

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Coding Standards](#coding-standards)
  - [Release Process](#release-process)
    - [Versioning](#versioning)
  - [Submission Guidelines](#submission-guidelines)
  - [Local Run and Build](#local-run-and-build)

* [Core](#core)
  - [String Functions](#string-functions)
    - [str](#str)
    - [strSpace](#strspace)
    - [toPath](#topath)
    - [replaceFirst](#replacefirst)
    - [upperCase](#uppercase)
    - [titleCase](#titlecase)
  - [Generic Functions](#generic-functions)
    - [eq](#eq)
    - [deepEq](#deepeq)
    - [doWork](#dowork)
    - [areDistinct](#aredistinct)
    - [isEmpty](#isempty)
    - [isString](#isstring)
    - [isObject](#isobject)
    - [isRegExp](#isregexp)
    - [isNumber](#isnumber)
    - [isBoolean](#isboolean)  
    - [notEmpty](#notempty)
    - [void$](#void)
    - [diff](#diff)
    - [alike](#alike)
    - [compare](#compare)
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
    - [pos$](#pos)
    - [neg$](#neg)
    - [zero$](#zero)
    - [odd$](#odd)
    - [even$](#even)
    - [lt$](#lt)
    - [gt$](#gt)
    - [lte$](#lte)
    - [gte$](#gte)
    - [float$](#float)
    - [max](#max)
    - [min](#min)
  - [Conditional Functions](#conditional-functions)
    - [iff](#iff)
    - [ifSome](#ifsome)
    - [ifYes](#ifyes)
    - [ifNo](#ifno)
    - [ifClass](#ifclass)
    - [when](#when)
    - [whenNot](#whennot)
    - [cond](#cond)
    - [condp](#condp)
    - [cases](#cases)  
    - [everyPred](#everypred)
    - [some$](#_some)
    - [ifBlank](#ifblank)
    - [ifObj](#ifobj)
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
    - [interpose](#interpose)
    - [last](#last)
    - [butLast](#butlast)
    - [cycle](#cycle)
    - [takeS](#takes)
    - [iterator](#iterator)
    - [walk](#walk)
    - [distinct$](#distinct)
    - [repeat](#repeat)
    - [splitAt](#splitat)
    - [mapcat](#mapcat)
    - [reductions](#reductions)
    - [forIt](#forit)
    - [mapIt](#mapit)
    - [filterIt](#filterit)
    - [reduceIt](#reduceit)
    - [nthnext](#nthnext)
    - [index](#index)
    - [randomSample](#randomsample)
    - [keep](#keep)
    - [nth](#nth)
    - [first](#first)
    - [second](#second)
    - [ffirst](#ffirst)
    - [fillVoid](#fillvoid)
    - [extendArray](#extendarray)
    - [reduce](#reduce)
  - [Function Functions](#function-functions)
    - [juxt](#juxt)
    - [trampoline](#trampoline)
    - [complement](#complement)
    - [fnil](#fnil)
    - [constantly](#constantly)
  - [Object Functions](#object-functions)
    - [swap](#swap)
    - [updateIn](#updatein)
    - [addWatch](#addwatch)
    - [removeWatch](#removewatch)
    - [merge](#merge)
    - [project](#project)
    - [rename](#rename)
    - [ownMethods](#ownmethods)
  - [Validation](#validation)
    - [isPositiveInt](#ispositiveint)
    - [isNonNegativeInt](#isnonnegativeint)
  - [RegExp](#regexp)
    - [cat](#cat)
  - [Spec](#spec)
* [Branching Flow](#branching-flow)
* [Deployment](#deployment)

## Introduction

`js-core` provides utility functions to do abstract away common operations.
All utility functions are grouped. E.g. math, list, generic, object etc.

## Getting Started

Clone from Git. Run `npm i`.

### Prerequisites

Make sure you have a standard, modern, FE development environment with `git`, and `node` installed and configured.
If you've followed the onboarding steps, you'll be setup correctly.

### Coding Standards

Please see our coding standards, here, for more information [Coding Standards](https://finleap-connect.atlassian.net/wiki/spaces/DS/pages/2319745040/FE+Coding+Standards)

### Release Process

Once a merge request is merged to master, gitlab pipeline starts running. Once the pipeline finishes, you can see
the new version with changelog and other details in the release section of gitlab project.

#### Versioning 

1. `js-core` uses [semantic versioning][semantic-versioning].
2. `js-core` follows [conventional commits][conventional-commits]. For list of scopes, see [Contributing Guideline](CONTRIBUTING.md).
3. Release happens automatically once the changes are merged to `master`.

### Submission Guidelines

See the [CONTRIBUTING.md](CONTRIBUTING.md)

### Local Run and Build

As of today, building and testing locally is not integrated into the codebase. Please take advantage of
`RunJS` or use `any live editor` you want to test out your changes. We hope to bring in some dev loop here soon.

**Please test your changes thoroughly**.

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

### replaceFirst

Replaces the first instance of match with replacement in s. Functions
similarly to native JS replace (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

```javascript
import { replaceFirst } from "@flc-ds/fii-js-core";

console.log(replaceFirst("fabulous fodder foo food fodder", /Fodder/gi, "blodder"));
// fabulous blodder foo food fodder
```

#### Parameters

- `string` | `String` 
- `matcher` | `String | RegExp`
- `replacement` | `String | String Pattern | Function` (See MDN docs for details)

### titleCase

Converts string to title case format

```javascript
import { titleCase } from "@flc-ds/fii-js-core";

console.log(titleCase("fabulous fodder foo food fodder"));
// Fabulous Blodder Foo Food Fodder
```

#### Parameters

- `string` | `String` 

### upperCase

Converts string to uppercase format.

```javascript
import { upperCase } from "@flc-ds/fii-js-core";

console.log(upperCase("fabulous fodder foo food fodder"));
// FABULOUS BLODDER FOO FOOD FODDER
```

#### Parameters

- `string` | `String`

### strInterpose

Returns a string separated by sep. If no string is provided, returns a partially applied `strInterpose` function.

```javascript
import { strInterpose } from "@flc-ds/fii-js-core";

console.log(strInterpose("-", "my name is bob"));
// "my-name-is-bob"

console.log(strInterpose(12, "my-name-is-bob", "-"));
// "my12name12is12bob"

console.log(strInterpose(1, null, "-"));
/**
 * function run(str) {
 *   sep = sep.toString();
 *   return str.split(splitter).join(sep);
 * }
 */
```

#### Parameters

- | Returns an empty string.
- `*` | converts the value to a string
- `...string` | concatenates values with a forward-slash delimiter (and converts them to strings)

### blank$

True if s is nil, empty, or contains only whitespace.

```javascript
import { blank$ } from "@flc-ds/fii-js-core";

console.log(blank$(""));
// true

console.log(blank$("    "));
// true

console.log(blank$(null));
// true

console.log(blank$(undefined));
// true

console.log(blank$("hello"));
// false
```

#### Parameters

- `str` | `String | null | undefined` The item to test for blankness.

### mapcat

Returns the result of applying concat to the result of applying map to f and colls. Thus function f should return a
collection. Returns a partially applied function when no collections are provided

```javascript
import { mapcat } from "@flc-ds/fii-js-core";

console.log(
  mapcat(_.reverse, [
    [3, 2, 1, 0],
    [6, 5, 4],
    [9, 8, 7]
  ])
);

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function splitWord(item) {
  return _.split(item, /(\d)/);
}

console.log(mapcat(splitWord, ["aa1bb", "cc2dd", "ee3ff"]));
// ["aa", "1", "bb", "cc", "2", "dd", "ee", "3", "ff"]
```

#### Parameters

- `func` | `Function` The function to apply map to.
- `set` | `Array` [_optional_] The set to map over.

### reductions

Returns an iterator function that returns the intermediate values of a reduction (as per reduce) of set by f, starting
with init. If init is not provided, the init value is the first item in set.

```javascript
import { reductions } from "@flc-ds/fii-js-core";

function add(a, b) {
  return a + b;
}

const test = reductions(add, 8, [1, 2, 3, 4]);
console.log(test());
// 9
console.log(test());
// 11
console.log(test());
// 14

// WITHOUT INIT
const test = reductions(add, [1, 2, 3, 4]);
console.log(test());
// 3
console.log(test());
// 6
console.log(test());
// 10
```

#### Parameters

- `func` | `Function` The function to apply map to.
- `init` | `*` [_optional_] The initial value.
- `set` | `Array`

### forIt

Loops over all values in an iterator.

```javascript
import { forIt, reductions } from "@flc-ds/fii-js-core";

const iterator = reductions((a, b) => a + b, 8, [1, 2, 3]);
const result = forIt(console.log, iterator);
// 9, 11, 14
```

#### Parameters

- `fn` | `Function` The function to run against a value from the iterator.
- `Iterator` The iterator.

### mapIt

`map` over an iterator. Returns a new iterator.

```javascript
import { mapIt, reductions } from "@flc-ds/fii-js-core";

const iterator = reductions((a, b) => a + b, 8, [1, 2, 3]);
const result = mapIt((a) => a * 2, iterator);
// iterator of: 18, 22, 28
```

#### Parameters

- `fn` | `Function` The mapping function.
- `Iterator` The iterator.

### filterIt

`filter` over an iterator. Returns a new iterator.

```javascript
import { filterIt, reductions } from "@flc-ds/fii-js-core";

const iterator = reductions((a, b) => a + b, 8, [1, 2, 3]);
const result = filterIt((a) => a > 12, test);
// iterator of: 14
```

#### Parameters

- `fn` | `Function` The mapping function.
- `Iterator` The iterator.

### reduceIt

`reduce` over an iterator.

```javascript
import { filterIt, reductions } from "@flc-ds/fii-js-core";

const iterator = reductions((a, b) => a + b, 8, [1, 2, 3]);
const result = reduceIt(add, test);
// 6
```

#### Parameters

- `fn` | `Function` The reducing function.
- `init` | `*` [_optional_] The initial value.
- `Iterator` The iterator.

### nthnext

Returns the nth next of set, An empty Array when n is 0.

```javascript
import { nthnext } from "@flc-ds/fii-js-core";

console.log(nthnext([1, 2, 3, 4, 5, 6, 7], 4));
// [5,6,7]
```

#### Parameters

- `set` | `Array` The set.
- `num` | `number` The number of items to drop from the front of the Array.

### index

Returns a map of the distinct values of `keys` in the `obj` mapped to a set of the objects in `obj` with the
corresponding values of `keys`.

```javascript
import { index } from "@flc-ds/fii-js-core";

const set = [
  { name: "betsy", weight: 1000 },
  { name: "jake", weight: 756 },
  { name: "shaq", weight: 1000 }
];

console.log(index(set, ["weight"]));

/**
 * {
 *   weight_1000: [
 *     {
 *       name: "betsy",
 *       weight: 1000
 *     }, {
 *       name: "shaq",
 *       weight: 1000
 *     }
 *   ],
 *   weight_756: [
 *     {
 *       name: "jake",
 *       weight: 756
 *     }
 *   ]
 * }
 */
```

#### Parameters

- `objects` | `Array<Object>` An object or Array of objects of the same shape.
- `keys` | `Array<string>` An Array of property names.

### randomSample

Returns items from coll with random probability of prob (0.0 - 1.0). Returns a partially applied function when no
collection is provided.

```javascript
import { randomSample } from "@flc-ds/fii-js-core";

console.log(randomSample(0.5, [1, 2, 3, 4, 5]));
// [1,2,5]
```

#### Parameters

- `prob` | `Float` A floating-point decimal between 0.0 and 1.0.
- `set` | `Array` An Array to sample.

### keep

`keep` can be used to return a non nullish result of `fn(set)`.
_`fn` should be free from any side effects_. **falsy values** are returned by the function. If `set` is not passed, it
returns a transducer function `fn`, which accepts set as argument.

```javascript
import { keep, odd$ } from "@flc-ds/fii-js-core";

function returnWithBool(val) {
  return iff(odd(val), val, false);
}

function returnWithNull(val) {
  return iff(odd(val), val, null);
}

function returnWithUndefined(val) {
  return iff(odd(val), val, undefined);
}

console.log(keep(returnWithBool, range(5)));
// [ false, 1, false, 3, false ]

console.log(keep(returnWithNull, range(5)));
// [ 1, 3 ]

console.log(keep(returnWithUndefined, range(5)));
// [ 1, 3 ]

let keepFn = (arg) => keep(arg);

console.log(keepFn(returnWithBool)(range(5)));
// [ false, 1, false, 3, false ]

console.log(keepFn(returnWithNull)(range(5)));
// [ 1, 3 ]

console.log(keepFn(returnWithUndefined)(range(5)));
// [ 1, 3 ]
```

#### Parameters

- `fn` | `Function` A predicate function.
- `set` | `Array` An Array to filter.

### nth

Returns an index value from an Array.

```javascript
import { nth } from "@flc-ds/fii-js-core";

console.log(nth([]));
// undefined

console.log(nth([[1, 2, 3]], 1));
// 1
```

#### Parameters

- `set` | `Array<Array>` An Array.

### ffirst

Same as (first (first x))

```javascript
import { ffirst } from "@flc-ds/fii-js-core";

console.log(ffirst([]));
// undefined

console.log(ffirst([[1, 2, 3]]));
// 1
```

#### Parameters

- `set` | `Array<Array>` A two-dimensional Array.

### second

Same as (first (next x))

```javascript
import { second } from "@flc-ds/fii-js-core";

console.log(second([]));
// undefined

console.log(second([1, 2, 3]));
// 2
```

#### Parameters

- `set` | `Array<Array>` A two-dimensional Array.

### fillVoid

A function which replaces void values in an array from the template and returns a new array.

```javascript
import { fillVoid } from "@flc-ds/fii-js-core";

console.log(fillVoid([1, 2, null, 4], [1, 2, 3, 4]));
// [1, 2, 3, 4]
```

#### Parameters

- `source` | `Array<>` A one-dimensional Array.
- `template` | `Array<>` A one-dimensional Array which should not have void values.

### first

A convenience export of Lodash's `first` function.

```javascript
import { first } from "@flc-ds/fii-js-core";

console.log(first([]));
// undefined

console.log(first([1, 2, 3]));
// 1
```

#### Parameters

- `set` | `Array<Array>` A two-dimensional Array.

### extendArray

Extends original array with provided value or function which receives index as param.

```javascript
import { extendArray } from "@flc-ds/fii-js-core";
import { identity } from "lodash";

console.log(extendArray([1, 2, 3], 10, "x"));
// [1, 2, 3,'x','x','x','x', 'x', 'x', 'x']

console.log(extendArray([1, 2, 3], 10, identity));
// [1,2,3,4,5,6,7,8,9]
```

#### Parameters

- `source` | `[]` array.
- `len` | `number` length.
- `value` | `*` A function which receives the index or a static value

### reduce

NOTE: `js-core`'s `reduce` function varies from the standard JS Array.reduce pattern. Read below for more detail.

`f` should be a function of 2 arguments. If `val` is not supplied, returns the result of applying `f` to the first 2
items in `set`, then applying `f` to that result and the 3rd item, etc. If `set` contains no items, `f` must accept no
arguments as well, and reduce returns the result of calling `f` with no arguments. If `set` has only 1 item, it is
returned and `f` is not called. If `val` is supplied, returns the result of applying `f` to `val` and the first item
in `set`, then applying `f` to that result and the 2nd item, etc. If coll contains no items, returns `val` and `f` is
not called.

Additionally, the reduction will terminate early if an intermediate result wraps its result in the `reduced` function.

```javascript
import { reduce, add, reduced } from "@flc-ds/fii-js-core";

console.log(reduce(add, [1, 2, 3, 4]));
// 10

console.log(reduce(add, 2, [1, 2, 3, 4]));
// 12

console.log(reduce(add, 0, [1]));
// 1

console.log(reduce(add, 10, []));
// 10

console.log(
  reduce(
    (acc, cur) => {
      return acc < 5 ? add(acc, cur) : reduced(acc);
    },
    0,
    [1, 2, 3, 4, 5]
  )
);
// 6
```

#### Parameters

- `f` | `Function` The callback function. Must take 2 parameters: accumulator and current.
- `val` | `*` An initializer value. The first value in the accumulation.
- `set` | `Array` An array.

### reduced

Wraps `x` in a way such that a `reduce` will terminate with the value `x`

```javascript
import { reduce, add, reduced } from "@flc-ds/fii-js-core";

console.log(
  reduce(
    (acc, cur) => {
      return acc < 5 ? add(acc, cur) : reduced(acc);
    },
    0,
    [1, 2, 3, 4, 5]
  )
);
// 6
```

#### Parameters

- `val` | `*` A value.

### reduced$

Returns true if `x` is the result of a call to `reduced`

```javascript
import { reduced$ } from "@flc-ds/fii-js-core";

const test = 1;

const reducedTest = reduced(test);

console.log(reduced$(reducedTest));
// true

console.log(reduced$(12));
// false
```

#### Parameters

- `val` | `*` A value.

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

### isEmpty

Checks if value is an empty object, collection, map, or set. Objects are considered empty
if they have no own enumerable string keyed properties. Maps and Sets are considered empty
if they have a size of 0. Does not work with Buffers.

```javascript
import { isEmpty } from "@flc-ds/fii-js-core";

console.log(isEmpty({}));
// true

console.log(isEmpty([2, 4, 7, 4]));
// false
```

#### Parameters

- `*` | `Object | Array | Map | Set` The item to test.

### notEmpty

Checks if value is NOT an empty object, collection, map, or set. Objects are considered empty if they have no own
enumerable string keyed properties. Array-like values such as arguments objects, arrays, buffers, strings, or
jQuery-like collections are considered empty if they have a length of 0. Similarly, maps and sets are considered empty
if they have a size of 0.

```javascript
import { notEmpty } from "@flc-ds/fii-js-core";

console.log(notEmpty({}));
// false

console.log(notEmpty([2, 4, 7, 4]));
// true
```

#### Parameters

- `...Function` | Variable number of functions

### isString

Determines whether a value is a string.

```javascript
import { isString } from "@flc-ds/fii-js-core";

console.log(isString({}));
// false

console.log(isString("one"));
// true
```

#### Parameters

- `*` | The variable to test.

### isObject

Determines whether a value is an object.

```javascript
import { isObject } from "@flc-ds/fii-js-core";

console.log(isObject({}));
// true

console.log(isObject("one"));
// false
```

#### Parameters

- `*` | The variable to test.

### isRegExp

Determines whether a value is a RegExp.

```javascript
import { isRegExp } from "@flc-ds/fii-js-core";

console.log(isRegExp(/one/));
// true

console.log(isRegExp("one"));
// false
```

#### Parameters

- `*` | The variable to test.

### isBoolean

Determines whether a value is a Boolean.

```javascript
import { isBoolean } from "@flc-ds/fii-js-core";

console.log(isBoolean(true));
// true

console.log(isBoolean("one"));
// false
```

#### Parameters

- `*` | The variable to test.

### isNumber

Determines whether a value is a Number.

```javascript
import { isNumber } from "@flc-ds/fii-js-core";

console.log(isNumber(1));
// true

console.log(isNumber("one"));
// false
```

#### Parameters

- `*` | The variable to test.

### void$

Checks if value is either `null` or (`typeof`) `undefined`.

```javascript
import { void$ } from "@flc-ds/fii-js-core";

console.log(void$({}));
// false

console.log(void$(null));
// true

console.log(void$(undefined));
// true
```

#### Parameters

- `...Function` | Variable number of functions

### not

Returns true if x is logically `false`, `false` otherwise

```javascript
import { not } from "@flc-ds/fii-js-core";

console.log(not(1));
// false

console.log(not(true));
// false

console.log(not(false));
// true
```

#### Parameters

- `...Function` | Variable number of functions

### diff

Recursively compares a and b, returning an Array of
[things-only-in-a things-only-in-b things-in-both].
Comparison rules:

- For equal a and b, return [a].
- Objects are sub-diffed where keys match and values differ.
- Sets are never sub-diffed.
- All sequential things are treated as associative collections
  by their indexes, with results returned as an Array.
- Everything else is compared for equality.

```javascript
import { diff } from "@flc-ds/fii-js-core";

const uno = { same: "same", different: "one" };
const dos = { same: "same", different: "two", only_here: "whatever" };

console.log(diff(uno, dos));
/*
 * [
 *  { different: 'one' },
 *  { different: 'two', only_here: 'whatever' },
 *  { same: 'same' }
 * ]
 */

console.log(diff([1, 2, 3], [5, 9, 3, 2, 3, 7]));
// [ [ 1, 2 ], [ 5, 9, 2, 3, 7 ], [ 3 ] ]

console.log(diff({ a: { b: 1 }, c: 2 }, { a: {}, c: 2 }));
// [ { a: { b: 1 } }, { a: {} }, { c: 2 } ]

/* Nothing Unique in first Object */
console.log(diff({ a: 1 }, { a: 1, b: 2 }));
// [ {}, { b: 2 }, { a: 1 } ]

/* Compare by equality */
console.log(diff("one", "onet"));
// [ 'one', 'onet', null ]

console.log(diff("one", "one"));
// [ null, null, "one" ]
```

#### Parameters

- `a` | `Array | Object | String` The left side
- `b` | `Array | Object | String` The right side

### alike

Performs a coercive comparison of two values, using ES's Abstract Equality Comparison (==).

```javascript
import { alike } from "@flc-ds/fii-js-core";

console.log(alike(1, "1"));
// true

console.log(alike("one", 1));
// false
```

#### Parameters

- `a` | `*` The left side
- `b` | `*` The right side

### compare

Returns a negative number, zero, or a positive number
when `x` is logically 'less than', 'equal to', or 'greater than'
`y`. Works with `number`, `string`, and `boolean` values---as well as Arrays
of those values. Compares numbers and Arrays in a type-independent
manner; however the types compared must always match.
  
When comparing strings, a delta in a string returns the distance between
the first two letters that don't match. See examples below for details.

```javascript
import { compare } from "@flc-ds/fii-js-core";

/* NUMBERS */
console.log(compare(1, 0));
// 1

console.log(compare(1, 1));
// 0

console.log(compare(0, 1));
// -1

/* STRINGS */
console.log(compare("def", "abc"));
// 3

console.log(compare("abc", "abc"));
// 0

console.log(compare("a", "d"));
// -3

console.log(compare("abc", "aec"));
// -3

/* BOOLEANS */
console.log(compare(true, false));
// 1
console.log(compare(false, true));
// -1
console.log(compare(true, true));
// 0

/* ARRAYS */

console.log(compare([1, 2, 3], [0, 2, 3]));
// 1
console.log(compare(["d", "e", "f"], ["a", "b", "c"]));
// 3
console.log(compare([false, false, true], [true, false, true]));
// -1

// --> Arrays can have mixed values
console.log(compare([true, "a", 2], [true, "a", 1]));
// 1
```

#### Parameters

- `left` | `*` The left side
- `right` | `*` The right side

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

### pos$

Returns true if num is greater than zero, else false.

```javascript
import { pos$ } from "@flc-ds/fii-js-core";

console.log(pos$(9));
// true
```

#### Parameters

- `Number` | A number.

### neg$

Returns true if num is less than zero, else false.

```javascript
import { neg$ } from "@flc-ds/fii-js-core";

console.log(neg$(-5));
// true
```

#### Parameters

- `Number` | A number.

### zero$

Returns true if num is zero, else false.

```javascript
import { zero$ } from "@flc-ds/fii-js-core";

console.log(zero$(0));
// true
```

#### Parameters

- `Number` | A number.

### even$

Returns true if a number is even, otherwise false.

```javascript
import { even$ } from "@flc-ds/fii-js-core";

console.log(even$(8));
// true
```

#### Parameters

- `Number` | A number.

### odd$

Returns true if a number is odd, otherwise false.

```javascript
import { odd$ } from "@flc-ds/fii-js-core";

console.log(odd$(9));
// true
```

#### Parameters

- `Number` | A number.

### lt$

Returns `true` if nums are in monotonically increasing order, otherwise `false`. Calls with no comparison act like the
identity function.

```javascript
import { lt$ } from "@flc-ds/fii-js-core";

console.log(lt$(8, 10, 12, 25));
// true

console.log(lt$(8));
// 8
```

#### Parameters

- `number` | A number(s) (variadic).

### gt$

Returns `true` if nums are in monotonically decreasing order, otherwise `false`. Calls with no comparison act like the
identity function.

```javascript
import { gt$ } from "@flc-ds/fii-js-core";

console.log(gt$(18, 10, 5, 2));
// true

console.log(gt$(18));
// 18
```

#### Parameters

- `number` | A number(s) (variadic).

### lte$

Returns true if nums are in monotonically non-decreasing order, otherwise false. Calls with no comparison act like the
identity function.

```javascript
import { lte$ } from "@flc-ds/fii-js-core";

console.log(lte$(8, 10, 10, 15, 25));
// true

console.log(lte$(8));
// 8
```

#### Parameters

- `number` | A number(s) (variadic).

### gte$

Returns true if nums are in monotonically non-increasing order, otherwise false. Calls with no comparison act like the
identity function.

```javascript
import { gte$ } from "@flc-ds/fii-js-core";

console.log(gte$(18, 10, 10, 2));
// true

console.log(gte$(18));
// 18
```

#### Parameters

- `number` | A number(s) (variadic).

### float$

Returns `true` if the number is a `Float`.

```javascript
import { float$ } from "@flc-ds/fii-js-core";

console.log(float$(0.5));
// true
```

#### Parameters

- `number` | A number.

### max

Returns the greatest of the nums.

```javascript
import { max } from "@flc-ds/fii-js-core";

console.log(max(5, 10, 35, 20, 15));
// 35
```

#### Parameters

- `num` | `Numbers(s)` A number (variadic).

### min

Returns the least of the nums.

```javascript
import { min } from "@flc-ds/fii-js-core";

console.log(min(5, 10, 2, 20, 15));
// 2
```

#### Parameters

- `num` | `Numbers(s)` A number (variadic).

## Conditional Functions

### iff

A functional version of `if` that always returns a value. NOTE: _because this is a functional implementation, all
expressions will be evaluated_.

```javascript
import { iff } from "@flc-ds/fii-js-core";

console.log(iff(true, "Monkeys", "Dwarves"));
// "Monkeys"

console.log(iff(false, "Birds", "Castles"));
// "Castles"
```

#### Parameters

- `condition` | A truthy value or expression that evaluates to a truthy value.
- `trueCondition` | A value or expression that will return if the condition is true.
- `falseCondition` | A value or expression that will return if the condition is false.

### ifSome

If test is not `null`, evaluates `then` with binding-form bound to the
value of `predicate`, if not, yields `else`.

```javascript
import { ifSome } from "@flc-ds/fii-js-core";

console.log(ifSome("true", (val) => val, "nope"));
// "true"
```

#### Parameters

- `condition` | A truthy value or expression that evaluates to a truthy value.
- `trueCondition` | A function that will receive the value of the condition, and return if the condition is true.
- `falseCondition` | A value or expression that will return if the condition is false.

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

- `condition` | A truthy value or expression that evaluates to a truthy value.
- `trueCondition` | A value or expression that will return if the condition is true.

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

- `condition` | A truthy value or expression that evaluates to a truthy value.
- `falseCondition` | A value or expression that will return if the condition is false.

### ifBlank

If truthy, evaluates and returns then expr, otherwise the _empty string_.

```javascript
import { ifBlank } from "@flc-ds/fii-js-core";

console.log(ifBlank(true, "Monkeys"));
// "Monkeys"

console.log(ifBlank(false, "Birds"));
// """
```

#### Parameters

- `condition` | A truthy value or expression that evaluates to a truthy value.
- `trueCondition` | A value or expression that will return if the condition is true.

### ifClass

An alias of `ifBlank`. A semantic, convenience method for including conditional class names.

```javascript
import { ifClass } from "@flc-ds/fii-js-core";

console.log(ifClass(true, "Monkeys"));
// "Monkeys"

console.log(ifClass(false, "Birds"));
// """
```

#### Parameters

- `condition` | A truthy value or expression that evaluates to a truthy value.
- `trueCondition` | A value or expression that will return if the condition is true.

### ifObj

Returns the consequent if true, otherwise an empty object.

```javascript
import { ifObj } from "@flc-ds/fii-js-core";

console.log(ifObj(true, { one: 1 }));
// { one: 1 }

console.log(ifObj(false, { one: 1 }));
// {}
```

#### Parameters

- `condition` | A truthy value or expression that evaluates to a truthy value.
- `trueCondition` | A value or expression that will return if the condition is true.

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

- `...Functions` | Variable number of Functions.

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

- `...Functions` | Variable number of Functions.

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

### condp

Takes a binary predicate function, an expression, and a set of clauses.
Each clause can take the form of either:
test-expr, result-expr
test-expr, result-fn (must be a unary function)
For each clause, `pred(test-expr, expr)` is evaluated. If it returns
logical `true`, the clause is a match. If a binary clause matches, the
result-expr is returned, if a function clause matches, it is called with 
the result of the predicate as its argument, the result of that call 
being the return value of `condp`. A single default expression can follow 
the clauses, and its value will be returned if no clause matches. If no 
default expression is provided and no clause matches, `undefined` is 
returned.

```javascript
import { condp, lt$ } from "@flc-ds/fii-js-core";

console.log(
  condp(lt$, 15,
    1, "one",
    10, "ten",
    100, "hundred",
    1000, "thousand",
    "default"
  )
);
// hundred

console.log(
  condp(lt$, 2500,
    1, "one",
    10, "ten",
    100, "hundred",
    1000, "thousand",
    "default"
  )
);
// default
```

#### Parameters

- `pred` | `Function` A binary function
- `expr` |  An expression
- `...rest` | `Expression | Function` An expression or function. If it is a function, the function must be unary.

### cases

Takes an expression, and a set of clauses.  Each clause can take the form of either:

test-constant result-expr
(test-constant1 ... test-constantN)  result-expr

The test-constants are not evaluated. They must be compile-time
literals.  If the expression is equal to a  test-constant, the corresponding 
result-expr is returned. A single default expression can follow the clauses, 
and its value will be returned if no clause matches. If no default expression 
is provided and no clause matches, undefined is returned.
All manner of constant expressions are acceptable in `cases`,
including `numbers`, `strings`, `booleans`, `BigInts`, and `Symbols`. The
test-constants need not be all the same type.


```javascript
import { cases } from "@flc-ds/fii-js-core";

const myStr = "hello";

console.log(
  (cases(myStr,
        "", 0,
        "hello", "there"
  ))
);
// there

console.log(
  (cases(myStr,
    "", 0,
    "no-match", "there",
    "default"
  ))
);
// default

console.log(
  (cases(myStr,
    "", 0,
    "hello", () => myStr.length
  ))
);
// 5

console.log(
  (cases(myStr,
    "", 0,
    "no-match", "there"
  ))
);
// undefined
```

#### Parameters

- `expr` | `string | number | boolean | Symbol | BigInt` A compile-time literal expression.
- `...rest` | `Expression | Function` See `cond`, above for details.

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

- `...Functions` | Variable number of Functions.

### \_some$

Returns true if x is not nil, false otherwise.

```javascript
import { some$ } from "@flc-ds/fii-js-core";

console.log(some$(2));
// true

console.log(some$());
// false
```

#### Parameters

- `val` | `*` Any value or expression.

### and

Evaluates exprs one at a time, from left to right. If a form returns logical false (nil or false), it returns that value
and doesn't evaluate any of the other expressions; otherwise, it returns the value of the last expr. (and) returns true.

```javascript
import { and } from "@flc-ds/fii-js-core";

console.log(and(2, true, () => true));
// () => true)

console.log(and(0, true, () => true));
// 0

console.log(and());
// true
```

### or

Evaluates exprs one at a time, from left to right. If a form returns a logical true value, or returns that value and
doesn't evaluate any of the other expressions, otherwise it returns the value of the last expression. (or) returns nil.

```javascript
import { or } from "@flc-ds/fii-js-core";

console.log(or(2, true, () => true));
// 2

console.log(or(0, false, () => true));
// () => true

console.log(or());
// undefined
```

## List Functions

### findInSetById

Finds an item in a set of objects with ids by matching the value of each item's id property against the provided value.

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
- `val` | `*`

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
- `indices` | `string` A variadic list of indices to remove.

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

console.log(makeArray(3, (i) => ({ num: i })));
// [ { num: 3 } ]

console.log(makeArray([1, 2, 3, 4], (i) => [i]));
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
```

#### Parameters

- `item` | `*`
- `transform` | `Function` Transformer function receiving the item as argument

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

- `val` | `*`
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

- `comparator` | `Function` Optional. A valid comparator function. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description) for details.
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

- `predicate` | `Function` A predicate function.
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
);
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

- `set` An Array of objects.

### includes

A functional, variadic implementation of `Array.prototype.includes`.

```javascript
import { includes } from "@flc-ds/fii-js-core";

console.log(includes([1, 2, 3], 2));
// true

console.log(includes([1, 2, 3], 2, 3));
// true

console.log(includes([1, 2, 3], 2, 5));
// false
```

#### Parameters

- `set` An Array.
- `values` | `*`

### notIncludes

An inverted functional, variadic implementation of `Array.prototype.includes`.

```javascript
import { notIncludes } from "@flc-ds/fii-js-core";

console.log(notIncludes([1, 2, 3], 2));
// false

console.log(notIncludes([1, 2, 3], 2, 3));
// false

console.log(notIncludes([1, 2, 3], 2, 5));
// true
```

#### Parameters

- `set` An Array.
- `values` | `*`

### interpose

Returns an Array of the elements of `set` separated by `sep`.
Returns a partially applied function, when no `set` is provided.

```javascript
import { interpose } from "@flc-ds/fii-js-core";

console.log(interpose("-", [1, 2, 3]));
// [1, "-", "-", 2, "-", 3]
```

#### Parameters

- `value` | `*`
- `set` An Array.

### last

Return the last item in an Array or Object.

```javascript
import { last } from "@flc-ds/fii-js-core";

console.log(last([1, 2, 3]));
// 3

console.log(last({ one: 1, two: 2, three: 3 }));
// ["three", 3]
```

#### Parameters

- `set` An Array.

### butLast

Return a seq of all but the last item in coll.

```javascript
import { butLast } from "@flc-ds/fii-js-core";

console.log(butLast([1, 2, 3]));
// [1, 2]
```

#### Parameters

- `set` An Array.

### cycle

Returns a lazy (infinite!) iterator of cycled repetitions of the items in coll.

```javascript
import { cycle } from "@flc-ds/fii-js-core";

const aAndB = ["a", "b"];

const generator = cycle(aAndB);

for (let i = 0; i < 3; i++) {
  console.log(generator());
}
// "a", "b", "a"
```

#### Parameters

- `set` An Array.

### takeS

Returns an Array of the first n items in a sequence or iterator, or all items if there are fewer than n. Returns a
stateful function when no collection is provided.

```javascript
import { cycle, takeS } from "@flc-ds/fii-js-core";

const aAndB = ["a", "b"];

const generator = cycle(aAndB);

console.log(takeS(10, generator));
// ["a", "b", "a", "b", "a", "b", "a", "b", "a", "b"]
```

#### Parameters

- `count` | `Number` The number of items to return.
- `seq` | `Sequence Generator` A generator function that, when called, produces a value.

### iterator

Returns an iterator function that can be called to return the values in an Array sequentially. Once values have been exhausted, returns `undefined`.

```javascript
import { iterator } from "@flc-ds/fii-js-core";

const aAndB = ["a", "b"];

const iterableAB = iterator(aAndB);

console.log(iterableAB());
// "a"

console.log(iterableAB());
// "b"

console.log(iterableAB());
// undefined
```

#### Parameters

- `count` | `Number` The number of items to return.
- `seq` | `Sequence Generator` A generator function that, when called, produces a value.

### walk

Traverses set, an Array or Object. `inner` and `outer` are
functions. Applies `inner` to each element of `set`, building up a
data structure of the same type, then applies `outer` to the result.

```javascript
import { walk } from "@flc-ds/fii-js-core";

// prettier-ignore
console.log(walk(
        (i) => i * 2,
        (set) => set.reduce((acc, cur) => acc + cur),
        [1, 2, 3, 4, 5]
        )
)
// 30

console.log(
        walk(
                ([key, value]) => [key, value + 1],
                (set) => set,
                { one: 1, two: 2, three: 3 }
        )
);
/**
 * {
 *  one: 2,
 *  two: 3,
 *  three: 4
 * }
 */
```

#### Parameters

- `inner` | `Function` A `map` function to apply to each element. If an `Object` is provided as the set, the `Functor`
  must conform to calling `map` as `Object.entries.map`.
- `outer` | `Function` A function to apply to the final result. The result function will receive the modified data structure.
- `set` | `Array | Object` The item to walk.

### distinct$

Returns true if no two of the arguments are == (uses Lodash `isEqual`). Works on a series of args, or an Array.

```javascript
import { distinct$ } from "@flc-ds/fii-js-core";

console.log(distinct$(1));
// true - single args always return true

console.log(distinct$(1, 2, 3));
// true

console.log(distinct$(1, 2, 3, 4, 2));
// false

console.log(distinct$([1, 2, 3]));
// true

console.log(distinct$([1, 2, 3, 2]));
// false
```

#### Parameters

- `set` | `Array` An array of values to compare.
- `*` A set of primitive arguments.

### repeat

Returns a lazy (infinite!, or length n if supplied) sequence of xs.

```javascript
import { repeat } from "@flc-ds/fii-js-core";

const repeater = repeat(5, "x");

console.log(repeater());
console.log(repeater());
// "x"
// "x"

const repeater = repeat(5, { one: 1 });

console.log(repeater());
console.log(repeater());
// {one: 1} -- Note, these objects are NOT the same. They are all deep clones
// {one: 1} -- using Lodash's `cloneDeep`.
```

#### Parameters

- `num` | `Number` If the first value is a number, this number controls how many times the value is repeated. If there
  is no second value, the first value will be repeated infinitely/
- `*` A value to repeat.

### splitAt

Returns an Array of [(take n coll) (drop n coll)]

```javascript
import { splitAt } from "@flc-ds/fii-js-core";

const result = splitAt(2, [1, 2, 3, 4, 5]);
// [[1, 2] [3, 4, 5]]

const result = splitAt(3, [1, 2]);
// [[1, 2] []]

console.log(splitAt(3, []));
// [[], []]
```

#### Parameters

- `num` | `Number` The index at which to split the Array.
- `set` | `Array` The Array to split.

## Function Functions

### juxt

Takes a set of functions and returns a fn that is the juxtaposition of those fns. The returned fn takes a variable
number of args (each function passed to `juxt` must take the same number of args. When calling the function returned
by `juxt`, you must match this variadicity), and returns an Array containing the result of applying each fn to the
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

### trampoline

`trampoline` can be used to convert recursive algorithms without stack consumption. Calls `fn` with supplied args, if
any. If `fn` returns a function, calls that function with no arguments, and continues to repeat, until the return value
is not a function, then returns that non-fn value. Note that if you want to return a function as a final value, you must
wrap it in some data structure and unpack it after `trampoline`
returns.

Note that the returned function (see the _else_ clause) returns the results of calling the "recursed" function.

```javascript
import { trampoline } from "@flc-ds/fii-js-core";

function foo(x) {
  // Base case
  if (x < 0) {
    return console.log("done");
  }
  // "recursive" call
  else {
    return function () {
      console.log(x); // this line is just a side-effect
      return foo(--x);
    };
  }
}

trampoline(foo, 3);
/**
 * 3
 * 2
 * 1
 * 0
 * "done"
 */
```

#### Parameters

- `args` | `Function` Variadic. One or more functions.

### complement

Takes a fn f and returns a fn that takes the same arguments as f, has the same effects, if any, and returns the opposite
truth value.

```javascript
import { complement } from "@flc-ds/fii-js-core";

const notEq = complement(_.eq);

console.log(notEq("a", "b"));
// true
```

#### Parameters

- `args` | `Function` Variadic. One or more functions.

### fNil

Takes a function `f`, and returns a function that calls `f`, replacing a `nullish` first argument to `f` with the
supplied value. Higher arity versions can replace arguments in the second, third, etc. positions. Note that the
function `f` can take any number of arguments, not just the one(s) being nil-patched.

```javascript
import { fNill } from "@flc-ds/fii-js-core";

function sayHello(first, other) {
  return str("Hello ", first, " and ", other);
}

const sayHelloWithDefaults = fNill(sayHello, "John", "Reed");

console.log(sayHelloWithDefaults());
// "Hello John and Reed"

console.log(sayHelloWithDefaults("Maxx"));
// "Hello Maxx and Reed"
```

#### Parameters

- `fn` | `Function` A function
- `...args` | `*` Variadic arguments.


### identity

Returns its argument

```javascript
import { identity } from "@flc-ds/fii-js-core";

console.log(identity("Scipio"));
// "Scipio"
```

### Parameters

- `value` | `*` A value

### constantly

Returns a function that takes any number of arguments and returns `x`.

```javascript
import { constantly } from "@flc-ds/fii-js-core";

const fn = constantly(2);
console.log(fn(1, 2, 3, 4, 5, "22", () => {}));
// 2
```

#### Parameters

- `value` | `*` A value.

## Object Functions

### swap

Swaps the value of an object to be: `(apply f current-value-of-object args)`. Returns the value that was swapped
in. `swap` returns a new object. The original object is unchanged. Uses lodash's `cloneDeep` to for working with nested
objects.

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

- `object` | `Object` An object.
- `transformer` | `Function` A function used to transform (modify) the object.
- `updates` | `Object` Variadic. One or more objects to modify the main object.

### updateIn

"Updates" a value in a nested associative structure, where `ks` is a
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

- `map` | `Object` An object to watch.
- `property` | `string` A property on the object to watch.
- `fn` | `Function` A function to run when the property of the object is updated.

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

- `map` | `Object` An object to watch.
- `property` | `string` The property on the object to un-watch.

### merge

Returns a map that consists of the rest of the maps conj-ed onto
the first. If a key occurs in more than one map, the mapping from
the latter (left-to-right) will be the mapping in the result.

```javascript
import { merge } from "@flc-ds/fii-js-core";

const test = { one: 1, two: 2, three: 3 };
const one = { four: 4, five: 5 };
const two = { seven: 7, eight: 8 };

console.log(merge(test, one, two));
/*
{
  eight: 8,
  five: 5,
  four: 4,
  one: 1,
  seven: 7,
  three: 3,
  two: 2
}
*/
```

#### Parameters

- `map` | `Object` Variadic. Objects to merge.

### project

Similar to lodash `pick`, except that `project` is variadic and
can work on sets of objects. Additionally, it always returns an
Array.

```javascript
import { project } from "@flc-ds/fii-js-core";

console.log(project({ one: 1, two: 2, three: 3 }, ["one", "three"]));
//  { one: 1, three: 3 }

console.log(
        project(
                [
                  { one: 1, two: 2, three: 3 },
                  { one: 1, two: 2, three: 3 }
                ],
                ["one", "three"]
        )
);
// [{ one: 1, three: 3 }, { one: 1, three: 3 }]
```

#### Parameters

- `objects` | `Object | Array<Object>` An object or Array of objects of the same shape.
- `keys` | `Array<string>` An Array of property names.

### rename

Renames object keys with provided ones.

```javascript
import { rename } from "@flc-ds/fii-js-core";

let users = [
  { name: "John Doe", country: "US", pin: 100001 },
  { name: "Micheal Klark", country: "US" },
  { name: "Sheldon", country: "Cooper", zip: 20001 }
];

console.log(rename(users, { pin: "zip" }));
/*
[
  { name: 'John Doe', country: 'US', zip: 100001 },
  { name: 'Micheal Klark', country: 'US' },
  { name: 'Sheldon', country: 'Cooper', zip: 20001 }
]
 */
```

#### Parameters

- `collection | Array<Object>` A collection
- `mapper | Object` A mapper

### ownMethods

Returns an Array of an object's own methods. Returns an empty Array if no methods are found.

```javascript
import { ownMethods } from "@flc-ds/fii-js-core";

console.log(
        ownMethods({
          one() {},
          two() {},
          three() {},
          name: "Pete"
        })
);
// [ one(){}, two(){}, three(){} ]

console.log(
        ownMethods({
          name: "Pete"
        })
);
// []
```

#### Parameters

- `obj | Object` An object

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

## RegExp

### cat

Takes key+pred pairs, e.g. Returns a regex function that matches (all) values in sequence, returning a map containing
the keys of each matched regex and its corresponding value.

```javascript
import { cat } from "@flc-ds/fii-js-core";

const regexSet = cat({ a: /a/, b: /b/ });

console.log(regexSet(["ab", "bc"]));
// [{a:["a"], b:["b"]},{a:null, b:["b"]}]
```

#### Parameters

- `keyPred` | `Object` An Object with key-predicate pairs.

## Branching Flow

We use the Release Flow methodology for our branching and release flow. For details, see

[Release Flow](https://finleap-connect.atlassian.net/wiki/spaces/DS/pages/2302967817/FE+Application+Release+Process)

# Deployment

Deployment is handled by GitLab; for details see the `.gitlab-ci.yml`.

[semantic-versioning]: https://semver.org/spec/v2.0.0.html
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
