const express = require('express')
const next = require('next')

const port = 3000

const server = express()
// const dev = process.env.NODE_ENV !== 'production'
const app = next({dev: true})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('*', (req, res) => handle(req, res))
  server.listen(port, (err) => {
    if(err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})