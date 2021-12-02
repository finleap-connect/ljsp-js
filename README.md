<img src="https://ljsp.org/img/logo.svg" width="200" height="200"/>

# LJSP JS

[![version][version-badge]][changelog]

[changelog]: CHANGELOG.md
[version-badge]: https://img.shields.io/badge/version-0.1.8-blue.svg

# LJSP: Embrace the Lisp in JavaScript!
Whether you agree that JavaScript is a Lisp or not, you can still harness the Lisp-inspired power of LJSP in your app. LJSP derives most of its functions from Clojure libraries. Clojurians will notice the extent to which we treated the Clojure docs not only as our requirements' specification, but as a great place to copy and paste text for our docs! For this, we offer heart-felt, tremendous thanks to the Clojure community.

For information on how to use LJSP, please visit our official documentation site:
[LJSP.org](https://www.ljsp.org)

## Getting Started

NPM `npm i ljsp-core`

YARN `yarn add ljsp-core`

### USAGE

```javascript
import { log, condp, str, mult, count, instance$ } from 'ljsp-core';

log("Enter a number: ")
(function(line) {
    log(
     condp(eq, value,
       1, "one",
       2, "two",
       3, "three",
       str('unexpected value, "', value, '"')))
    log(
     condp(instance$, value,
       Number, () => mult(value, 2),
       String, () => mult(count(value), 2)))
})(Number(readLine()))
```

### Submission Guidelines

See the [CONTRIBUTING.md](CONTRIBUTING.md)

[semantic-versioning]: https://semver.org/spec/v2.0.0.html
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
