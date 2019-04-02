// HTTP server stuff
require('dotenv').config()
const {app} = require('./utils/expressconfig')
const wirkungen = require('./constants/effects.json')
const tool = require('./alchi')

app.get('/', async function(req, res) {
    const stuff = await tool.start([wirkungen.staerke,wirkungen.geschick,wirkungen.heilung])
    res.render('pages/index', {
    req: req,
    wirkungen: wirkungen,
    stuff: stuff
  })
})

app.post('/', async function (req, res) {
  const stuff = await tool.start(await tool.buildArguments(req.body.effect))
  res.render('pages/index', {
  req: req,
  wirkungen: wirkungen,
  stuff: stuff
})
})

app.get('*', async function(req, res) {
  res.render('pages/404', {
    req: req,
    wirkungen: wirkungen
  })
})

module.exports = { app }