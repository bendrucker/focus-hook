'use strict'

var test = require('tape')
var FocusHook = require('./')

test(function (t) {
  t.plan(2)

  var matched = FocusHook(truthy)
  matched.hook({
    focus: function focus () {
      t.pass('node focused')
    }
  })

  var noPredicate = FocusHook()
  noPredicate.hook({
    focus: function focus () {
      t.pass('node focused')
    }
  })

  var unmatched = FocusHook(falsy)
  unmatched.hook({
    focus: function focus () {
      t.fail('node should not be focused')
    }
  })
})

function truthy () {
  return true
}

function falsy () {
  return false
}
