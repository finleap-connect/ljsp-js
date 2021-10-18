<img src="https://ljsp.org/img/logo.svg" width="200" height="200"/>

# LJSP JS

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

* [Branching Flow](#branching-flow)
* [Deployment](#deployment)

# NOTE: LJSP is not currently available for download. Coming soon!

## Introduction

`ljsp` provides utility functions to do abstract away common operations.
All utility functions are grouped. E.g. math, list, generic, object etc.

For information on how to use LJSP, please visit our official documentation site:
[LJSP.org](https://www.ljsp.org)

## Getting Started

Clone from Git. Run `npm i`.

### Prerequisites

Make sure you have a standard, modern, FE development environment with `git`, and `node` installed and configured.
If you've followed the onboarding steps, you'll be setup correctly.

### Release Process

Once a merge request is merged to master, github pipeline starts running. Once the pipeline finishes, you can see
the new version with changelog and other details in the release section of github project.

#### Versioning

1. `ljsp` uses [semantic versioning][semantic-versioning].
2. `ljsp` follows [conventional commits][conventional-commits]. For list of scopes, see [Contributing Guideline](CONTRIBUTING.md).
3. Release happens automatically once the changes are merged to `master`.

### Submission Guidelines

See the [CONTRIBUTING.md](CONTRIBUTING.md)

### Local Run and Build

As of today, building and testing locally is not integrated into the codebase. Please take advantage of
`RunJS` or use `any live editor` you want to test out your changes. We hope to bring in some dev loop here soon.

**Please test your changes thoroughly**.

## Branching Flow

We use the Release Flow methodology for our branching and release flow.

[semantic-versioning]: https://semver.org/spec/v2.0.0.html
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
