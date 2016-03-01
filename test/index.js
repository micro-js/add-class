/**
 * Imports
 */

var hasClass = require('@f/has-class')
var addClass = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var node = $('<div></div>')

  addClass('test', node)
  t.ok(hasClass('test', node))

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHTML = html
  return document.body.firstChild
}
