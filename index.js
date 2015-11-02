var nock = require('nock')
var fs   = require('fs')
var path = require('path')
var _    = require('lodash')

var cassettesDir = process.env.CASSETTES_DIR || './test/support/cassettes'

var files = fs.readdirSync(path.resolve(cassettesDir))
var cassettes = _.reduce(files, function(cassettes, file) {
  return _.extend(cassettes, require(path.resolve(cassettesDir, file)).cassettes)
}, {})

module.exports.get = function(vcrName) {
  return cassettes[vcrName]
}

module.exports.play = function(vcrName) {
  var cassette = cassettes[vcrName]
  var path = vcrName
  var method = cassette.method || 'get'
  if (cassette.path) {
    path = cassette.path
	}
  return nock(cassette.host).filteringPath(/\?.*/g, '')[method](path).reply(cassette.code, cassette.body)
}

module.exports.stop = function() {
  return nock.cleanAll()
}

module.exports.playback = function() {
  return nock.disableNetConnect()
}

