/**
 *
 * @authors cate
 * @date    2017-11-09 10:29:03
 * @version 1.0
 */
var config = (function () {
  var options = process.argv
  return {
    env: options[2] || ''
  }
}())

module.exports = config
