const Koa = require('koa')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const removeTrailingSlashes = require('koa-remove-trailing-slashes')

const middlewares = require('./lib/middlewares')
const router = require('./lib/router')

const server = function (config = {}) {
  const app = new Koa()

  if (config.env !== 'test') {
    app.use(logger())
  }
  app.use(cors())
  app.use(removeTrailingSlashes())

  app.use(middlewares.sanitizeBody)
  app.use(middlewares.errorHandler)

  return app
}

module.exports = {
  server,
  middlewares,
  ...router
}
