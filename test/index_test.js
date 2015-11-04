var path = require('path')

describe("vcr", function() {
  beforeEach(function() {
  })
  afterEach(function() {
  })
  it("load cassettes", function() {
    process.env.CASSETTES_DIR = path.resolve(__dirname, 'support', 'cassettes')
    vcr = require("../index.js")
    assert.deepEqual(vcr.get('cassette'), {
      'host': 'example.com',
      'path': '/lol',
      'method': 'get'
    })
  })
  it("plays one cassette", function() {
    process.env.CASSETTES_DIR = path.resolve(__dirname, 'support', 'cassettes')
    vcr = require("../index.js")
    var spy = sinon.spy(vcr, "get")
    vcr.play('cassette')
    spy.should.have.been.calledOnce
    vcr.get.restore()
  })
  it("returns a nock", function() {
    process.env.CASSETTES_DIR = path.resolve(__dirname, 'support', 'cassettes')
    vcr = require("../index.js")
    var c = vcr.play('cassette')
    assert(c)
  })
})
