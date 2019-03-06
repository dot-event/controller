/*prettier-ignore*/
"use strict"

module.exports = function(dot, opts) {
  var state = dot.state

  if (state.controller) {
    return
  }

  state.controller = opts || {}

  dot("logLevel", "controller", { info: "debug" })

  dot.any("controller", controller)
}

function controller(prop, arg, dot) {
  dot.any(prop[0], function(p, a, d, e, s) {
    p = p.concat([e.replace(/[A-Z][a-z]*$/, "")])
    return arg.call(null, p, a, d, e, s)
  })
}
