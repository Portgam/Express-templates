const colors = require('colors')
const express = require('express')
const router = express.Router()

router.get( '/', ( req, res ) => {
    console.log( `/`.bold )
    res.send( 'ok' )
} )

module.exports = router