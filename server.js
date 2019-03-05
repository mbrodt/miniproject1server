var express = require('express')
var https = require('https')
var app = express()
var fs = require('fs')

app.use(express.json()) // to support JSON-encoded bodies

app.get('/', function(req, res) {
  console.log('got a request')
  res.json(['Simon', 'Bob2'])
})

app.post('/', function(req, res) {
  const MESSAGE = req.body.message
  console.log('message on server:', MESSAGE)
  res.send('got it')
})

const server = https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/nodekeys/server-key.pem'),
      cert: fs.readFileSync(__dirname + '/nodekeys/server-cert.pem')
    },
    app
  )
  .listen(7007)
