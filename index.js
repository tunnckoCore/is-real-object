/*!
 * is-real-object <https://github.com/tunnckoCore/is-real-object>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isArray = require('isarray')
var isObject = require('is-extendable')

module.exports = function isRealObject (val) {
  return !isArray(val) && isObject(val)
}
