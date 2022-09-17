## Marble seeds api

## Install with

```
npm i @marble-seeds/api
```

## Docs

#### Server

To create a server do
```
const { server } = require('marble-api')
const routers = require('./routers')

const apiPort = 3000
const app = server()

routers.add(app)

app.listen(apiPort)
console.log(`Api started: <${apiPort}>`)
```

This server is a config version of Koa

#### Routers

To create a router/route do

```
const { Router, Route } = require('marble-api')

const status = new Route({
  method: 'get',
  path: '/',
  handler: async function (ctx) {
    ctx.body = {
      success: true,
      requested: new Date()
    }
  }
})

module.exports = new Router({
  routes: [status],
  prefix: '/status'
})
```

To have multiple routers on you app do

```
const { Router } = require('marble-api')

const status = require('./status')
const webhooks = require('./webhooks')

const routers = new Router({
  routes: [status, webhooks],
  prefix: '/api'
})

module.exports = routers
```


#### To-Dos

- Refactor clone on router.js and forEach on route.js to remove lodash dependency
