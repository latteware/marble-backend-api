/* global request, describe, expect, it */
const { server, Router, Route } = require('../../index')

describe('server base tests', function () {
  it('Empty test should return 404', async function () {
    const srv = server()
    const app = srv.listen()

    const res = await request(app).get('/')

    expect(res).to.have.status(404)
  })

  it('/api/status should return 200', async function () {
    const srv = server()

    const route = new Route({
      method: 'get',
      path: '/status',
      handler: async (ctx) => {
        ctx.body = {
          success: true
        }
      }
    })

    const routers = new Router({
      routes: [route],
      prefix: '/api'
    })

    routers.add(srv)
    const app = srv.listen()

    const res = await request(app).get('/api/status')

    expect(res).to.have.status(200)
    expect(res.body).to.deep.equal({
      success: true
    })
  })
})
