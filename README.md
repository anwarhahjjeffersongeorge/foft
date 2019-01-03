# mathoftjs
### Is

- For investigating the _results_ of arithmetic expressions provided as functions in JavaScript over _specified evaluation ranges_,
- For investigating floating-point error tendencies in a JavaScript environment, and
- An ESM module for browsers or nodejs.

### Is _not_
- A comprehensive calculator,
- Immune to inaccuracies,
- A computer algebra system,
- An equation solver, or
- An expression parser.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage:
MathOfT exports a single class, `MathOfT` that can create an instance as well as provide some `static` utilities.

### Example:
	import {MathOfT} from 'mathoftjs';
	m = new MathOfT({
        terms: [t => 2*t],
        range: [0, 10],
        segmentDivisor: 10 //one less than resultant number of evaluation points
    });
	[...m] //Array(11) [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

### Generally, a MathOfT instance can evaluate:
  1. Its `terms`: `Function` or `MathOfT` instances
     that should generally receive and return
    - Numbers
    - Arrays of Numbers,
    - Nested Arrays of Numbers, or
    - TypedArrays.
  2. Some of the properties of its `terms(1)`.


## Development Guidelines

### Testing
Run `npm test`

### Documentation
Run `npm run-script docs`
