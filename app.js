require('dotenv').config()
const colors = require('colors')
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
// const cors = require('cors')
const { cors } = require('./cors/cors')

// app.use( cors() )
app.use( ( req, res, next ) => cors( req, res, next ) )
app.use( '/path-name' , require( './routes/routes' ) )

app.get('/', (req, res) => {
  console.log('Hello World!'.bold)
  res.send('Hello World!')
})

app.listen( port, () => {
  console.log(`App listening on http://localhost:${port}`.green.bold)
})
