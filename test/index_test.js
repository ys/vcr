var path = require('path')

describe("vcr", function() {
  it("load cassettes", function() {
    process.env.CASSETTES_DIR = path.resolve(__dirname, 'support', 'cassettes')
    vcr = require("../index.js")
    assert.deepEqual(vcr.get('cassette'), {})
  })
})
