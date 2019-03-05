console.log('Running server...')

const https = require('https'),
  fs = require('fs')

const express = require('express')
const app = express()
const port = 7007

app.use(express.json()) // to support JSON-encoded bodies
// const options = {
//   key: fs.readFileSync(__dirname + '/keys/publickey.pem', 'utf8'),
//   cert: fs.readFileSync(__dirname + '/keys/server.pem', 'utf8')
// }

const options = {
  key: fs.readFileSync(__dirname + '/nodekeys/server-key.pem'),
  cert: fs.readFileSync(__dirname + '/nodekeys/server-crt.pem')
  // ca: fs.readFileSync(__dirname + '/nodekeys/ca-crt.pem')
}

// app.use(express.urlencoded()) // to support URL-encoded bodies

app.post('/', function(req, res) {
  const MESSAGE = req.body.message
  console.log('message on server:', MESSAGE)
  res.send('got it')
})

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
