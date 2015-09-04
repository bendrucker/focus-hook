'use strict'

var Hook = require('virtual-hook')
var nextTick = require('next-tick')

module.exports = function FocusHook (predicate) {
  if (!arguments.length) {
    predicate = truthy
  }

  return Hook({
    hook: function focusHook (node) {
      nextTick(function check () {
        if (predicate(node)) node.focus()
      })
    }
  })
}

function truthy () {
  return true
}
