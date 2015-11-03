sinonChai = require("sinon-chai")
global.sinon  = require("sinon")
chai          = require("chai")
chai.should()
chai.use(sinonChai)
global.assert = chai.assert
process.env.NODE_ENV = 'test'
