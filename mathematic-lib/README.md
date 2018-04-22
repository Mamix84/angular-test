# mathematic-lib

Library to simplify basic mathematical operation beetween two or more operand (arrays)


## Install

    npm i mathematic-lib

## Basic usage

```js
var mathematicLib = require('mathematic-lib')
mathematicLib.sum(4, 5) // => '9'
mathematicLib.multiply(4, 5) // => '20'
```

See [spec](test/test.js).

## Array usage

```js
var mathematicLib = require('mathematic-lib')
var arrays = [2, 5, 10]
mathematicLib.sumArray(arrays) // => '17'
mathematicLib.multiplyArray(arrays) // => '100'
```

See [spec](test/test.js).