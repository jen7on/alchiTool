// HTTP server stuff
require('dotenv').config()
const {app} = require('./utils/expressconfig')
const wirkungen = require('./constants/effects.json')
const tool = require('./alchi')

app.get('/', async function(req, res) {
    const stuff = await tool.start([],[false, false])
    res.render('pages/index', {
    selectedeffects:['0','0','0','0'],
    req: req,
    wirkungen: wirkungen,
    stuff: stuff
  })
})

app.post('/', async function (req, res) {
  const stuff = await tool.start(await tool.buildArguments(req.body.effect),[req.body.checkExact,req.body.checkNegative])
  res.render('pages/index', {
  selectedeffects:req.body.effect,
  req: req,
  wirkungen: wirkungen,
  stuff: stuff
})
})

app.get('*', async function(req, res) {
  res.render('pages/404', {
    req: req,
    wirkungen: wirkungen,
    selectedeffects:['0','0','0','0'],
  })
})

module.exports = { app }