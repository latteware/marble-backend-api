const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

global.request = chai.request
global.expect = chai.expect
