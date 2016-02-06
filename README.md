# [is-real-object][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Returns `true` if a value is any type of object, but not an array. [Browserify](http://browserify.org/)-ready.

[![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Why?!
Yea, that's it! Yea, it's so simple as `!isArray && isObject`. Because all of the others checks that given value [is-object](https://github.com/jonschlinkert/isobject) or [is-plain-object](https://github.com/jonschlinkert/is-plain-object), or even [is-extendable](https://github.com/jonschlinkert/isobject) and [is-obj](https://github.com/sindresorhus/is-obj). And last two are absolutely the same things - returns `true` if a value is any type of object, including array-ish values.  
That being said, just it isn't okey for me to pass array value as `options` object for example.


## Install
```
npm i is-real-object --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const isRealObject = require('is-real-object')
```

### returns `true`

```js
isRealObject({})
isRealObject({foo: 'bar'})
isRealObject(function () {})
isRealObject(arguments)
isRealObject(/foo/)
isRealObject(new Error())
isRealObject(new TypeError())
isRealObject(new Boolean()) // it is object!
isRealObject(new Number()) // it is object!
isRealObject(new String()) // it is object!
isRealObject(new Object())
isRealObject(new Date())
isRealObject(new RegExp())
isRealObject(new RegExp('foo'))
isRealObject(new Function())
isRealObject(new Function('foo'))
isRealObject(Object.create(null))
isRealObject(Object.create({}))
isRealObject(Object.create({a: 'b'}))
isRealObject(Object(0))
isRealObject(Object(1))
isRealObject(Object(false))
isRealObject(Object(true))
isRealObject(Object('foo'))
```

### returns `false`

```js
isRealObject(new Array())
isRealObject(new Array(2))
isRealObject(Number(123))
isRealObject(String(123))
isRealObject(Boolean(true))
isRealObject(Boolean(false))
isRealObject(Boolean('foo'))
isRealObject(String())
isRealObject(String(123))
isRealObject(String('foo'))
isRealObject([])
isRealObject(['a'])
isRealObject('foo')
isRealObject(null))
isRealObject(undefined)
isRealObject(NaN)
isRealObject(123)
isRealObject(0)
isRealObject(false)
isRealObject(true)
isRealObject()
```


## Related
- [is-extendable](https://github.com/jonschlinkert/is-extendable): Returns true if a value is any of the object types: array, regexp, plain object, function or date. This is useful for determining if a value can be extended,… [more](https://github.com/jonschlinkert/is-extendable)
- [is-obj](https://github.com/sindresorhus/is-obj): Check if a value is an object
- [is-plain-obj](https://github.com/sindresorhus/is-plain-obj): Check if a value is a plain object
- [is-plain-object](https://github.com/jonschlinkert/is-plain-object): Returns true if an object was created by the `Object` constructor.
- [isobject](https://github.com/jonschlinkert/isobject): Returns true if the value is an object and not an array or null.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-real-object/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-real-object
[npmjs-img]: https://img.shields.io/npm/v/is-real-object.svg?label=is-real-object

[license-url]: https://github.com/tunnckoCore/is-real-object/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-real-object
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-real-object.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-real-object
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-real-object.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-real-object
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-real-object.svg

[david-url]: https://david-dm.org/tunnckoCore/is-real-object
[david-img]: https://img.shields.io/david/tunnckoCore/is-real-object.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg