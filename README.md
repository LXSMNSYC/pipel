# pipel

Simple pipelines in JS

[![NPM](https://nodei.co/npm/pipel.png)](https://nodei.co/npm/pipel/)

[![](https://data.jsdelivr.com/v1/package/npm/pipel/badge)](https://www.jsdelivr.com/package/npm/pipel)
[![HitCount](http://hits.dwyl.io/lxsmnsyc/pipel.svg)](http://hits.dwyl.io/lxsmnsyc/pipel)

| Platform | Build Status |
| --- | --- |
| Linux | [![Build Status](https://travis-ci.org/LXSMNSYC/pipel.svg?branch=master)](https://travis-ci.org/LXSMNSYC/pipel) |
| Windows | [![Build status](https://ci.appveyor.com/api/projects/status/mkjwe462uk80axx4?svg=true)](https://ci.appveyor.com/project/LXSMNSYC/pipel) |


[![codecov](https://codecov.io/gh/LXSMNSYC/pipel/branch/master/graph/badge.svg)](https://codecov.io/gh/LXSMNSYC/pipel)
[![Known Vulnerabilities](https://snyk.io/test/github/LXSMNSYC/pipel/badge.svg?targetFile=package.json)](https://snyk.io/test/github/LXSMNSYC/pipel?targetFile=package.json)

## Install

NPM

```bash
npm i pipel
```

CDN

* jsDelivr
```html
<script src="https://cdn.jsdelivr.net/npm/pipel/dist/index.min.js"></script>
```

* unpkg
```html
<script src="https://unpkg.com/pipel/dist/index.min.js"></script>
```

## Usage

### Loading the module

#### CommonJS

```js
const pipel = require('pipel');
```

Loading the CommonJS module provides the pipel function.

#### Browser

Loading the JavaScript file for the pipel provides the pipel function

### Piping

pipel provides a curried function which allows to build pipelines.

Calling pipel returns a function which uses the given value as the seed for the pipeline.

The returned function must be provided with functions which reduces in sequence, returning the reduced result.

```js
const result = pipel(1)(
  x => `Next: ${x}`,
  x => x.length,
);

console.log(result); // 7
```

### Example

```js
const map = mapper => source => {
  const result = [];

  for (const i of source) {
    result.push(mapper(i));
  }

  return result;
};

const filter = predicate => source => {
  const result = [];

  for (const i of source) {
    if (predicate(i)) result.push(i);
  }

  return result;
};

const result = pipel([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])(
  filter(x => x % 2 === 0),
  map(x => x * 2),
  map(x => `Next: ${x}`),
);

for (const i of result) {
  console.log(i);
};
```

Output

```txt
Next: 4
Next: 8
Next: 12
Next: 16
Next: 20
```

## Build

Clone the repo first, then run the following to install the dependencies

```bash
npm install
```

To build the coverages, run the test suite, the docs, and the distributable modules:

```bash
npm run build
```