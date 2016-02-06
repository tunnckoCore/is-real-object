/*!
 * is-real-object <https://github.com/tunnckoCore/is-real-object>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var isRealObject = require('./index')

function ok (val) {
  return test.strictEqual(val, true)
}

function notOk (val) {
  return test.strictEqual(val, false)
}

test('should return `true` when a value is an object', function (done) {
  ok(isRealObject({}))
  ok(isRealObject({foo: 'bar'}))
  ok(isRealObject(function () {}))
  ok(isRealObject(arguments))
  ok(isRealObject(/foo/))
  ok(isRealObject(new Error()))
  ok(isRealObject(new TypeError()))
  ok(isRealObject(new Boolean())) // eslint-disable-line no-new-wrappers
  ok(isRealObject(new Number())) // eslint-disable-line no-new-wrappers
  ok(isRealObject(new String())) // eslint-disable-line no-new-wrappers
  ok(isRealObject(new Object())) // eslint-disable-line no-new-object
  ok(isRealObject(new Date()))
  ok(isRealObject(new RegExp()))
  ok(isRealObject(new RegExp('foo')))
  ok(isRealObject(new Function())) // eslint-disable-line no-new-func
  ok(isRealObject(new Function('foo'))) // eslint-disable-line no-new-func
  ok(isRealObject(Object.create(null)))
  ok(isRealObject(Object.create({})))
  ok(isRealObject(Object.create({a: 'b'})))
  ok(isRealObject(Object(0)))
  ok(isRealObject(Object(1)))
  ok(isRealObject(Object(false)))
  ok(isRealObject(Object(true)))
  ok(isRealObject(Object('foo')))
  done()
})

test('should return `false` when a value is not an object or is array', function (done) {
  notOk(isRealObject(new Array())) // eslint-disable-line no-array-constructor
  notOk(isRealObject(new Array(2)))
  notOk(isRealObject(Number(123)))
  notOk(isRealObject(String(123)))
  notOk(isRealObject(Boolean(true)))
  notOk(isRealObject(Boolean(false)))
  notOk(isRealObject(Boolean('foo')))
  notOk(isRealObject(String()))
  notOk(isRealObject(String(123)))
  notOk(isRealObject(String('foo')))
  notOk(isRealObject([]))
  notOk(isRealObject(['a']))
  notOk(isRealObject('foo'))
  notOk(isRealObject(null))
  notOk(isRealObject(undefined))
  notOk(isRealObject(NaN))
  notOk(isRealObject(123))
  notOk(isRealObject(0))
  notOk(isRealObject(false))
  notOk(isRealObject(true))
  notOk(isRealObject())
  done()
})
