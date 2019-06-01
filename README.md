[![Version](https://img.shields.io/github/package-json/v/anwarhahjjeffersongeorge/foft/master.svg)](https://github.com/anwarhahjjeffersongeorge/foft)[![Build Status](https://travis-ci.com/anwarhahjjeffersongeorge/foft.svg?branch=master)](https://travis-ci.com/anwarhahjjeffersongeorge/foft) [![codecov](https://codecov.io/gh/anwarhahjjeffersongeorge/foft/branch/master/graph/badge.svg)](https://codecov.io/gh/anwarhahjjeffersongeorge/foft)
------------

[![license](https://img.shields.io/github/license/anwarhahjjeffersongeorge/foft.svg)](UNLICENSE) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-blue.svg)](https://standardjs.com)

--------------

# &mdash; `foft` &mdash;

### Syntactic sugar for discontinuous (mathematical) functions.

#### It Is

- A lot of [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)
- For investigating the _results_ of known arithmetic expressions provided as functions in JavaScript over _specified evaluation ranges_,
- For investigating floating-point error tendencies in a JavaScript environment, and
- An [ECMAScript module](https://github.com/standard-things/esm) for browsers or nodejs.

#### It Is _not_

- Fast,
- A comprehensive calculator,
- Immune to inaccuracies,
- A computer algebra system,
- An equation solver, or
- An expression parser.

## Usage:
Foft exports a single class, `Foft` that can create an instance as well as provide some `static` utilities.

### Example:
	import {Foft} from 'foftjs';
	m = new Foft({
        terms: [t => 2*t],
        range: [0, 10],
        segmentDivisor: 10 //one less than resultant number of evaluation points
    });
	[...m] // Array(11) [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
  m(5.13) // 10.26

### Generally, a Foft instance can evaluate:

1. Its `terms`: `Function` or `Foft` instances
that should generally receive and return
  - Numbers
  - Arrays of Numbers,
  - Nested Arrays of Numbers, or
  - TypedArrays.
2. Some of the properties of its `terms(1)`.


## Development Guidelines

### Testing
#### in nodejs
Run `npm test`

### Documentation
Run `npm run-script docs`
