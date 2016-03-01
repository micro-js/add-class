
# add-class

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Add a class to an element

## Installation

    $ npm install @f/add-class

## Usage

```js
var addClass = require('@f/add-class')

function show (element) {
  addClass('show', element)
}
```

## API

### addClass(className, element)

- `className` - The class you want to add
- `element` - The element you want to add `className` to

**Returns:** Returns `element`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/add-class.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/add-class
[git-image]: https://img.shields.io/github/tag/micro-js/add-class.svg?style=flat-square
[git-url]: https://github.com/micro-js/add-class
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/add-class.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/add-class
