import { expect, test } from 'bun:test'
import app from '../src/worker/index'

test('health check answers JSON', async () => {
  const response = await app.request('https://example.test/api/health')
  expect(response.status).toBe(200)
  expect(await response.json()).toEqual({ ok: true })
})

test('unknown API routes never fall through to HTML', async () => {
  for (const route of ['/api/orders', '/api/newsletter', '/api/missing']) {
    const response = await app.request(`https://example.test${route}`)
    expect(response.status).toBe(404)
    expect((await response.json()).error).toBeString()
  }
})
