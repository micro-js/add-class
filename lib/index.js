/**
 * Modules
 */

var hasClass = require('@f/has-class')

/**
 * Expose addClass
 */

module.exports = addClass

/**
 * addClass
 */

function addClass (className, node) {
  if (node.classList) {
    node.classList.add(className)
  } else if (!hasClass(className, node)) {
    node.className = node.className
      ? node.className + ' ' + className
      : className
  }

  return node
}
