var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var urlLib = require( 'url' );
var router = express()
var jsonParser = bodyParser.json();

var dummy = require('../repositories/dummyRepository.js')
var auth = require( '../repositories/authRepository.js' )

// Get the message test 
router.get( '/', jsonParser, auth.authenticate, function( req, res ) {
    dummy.getAll(function( err, data ) {
        if( err  ) {
            res.status(400)
        }
        res.send( { data : data, errors : err } )
    })
})

// Post the dummy message test
router.post( '/', jsonParser, function( req, res ) {
    res.send( req.body )
})

// requested id 
router.get( '/:id', jsonParser, function(req, res) {
    res.send({'requestedID' : req.params.id})
})

// Post the dummy message test
router.put( '/:id', jsonParser, function( req, res ) {
    res.send( req.body )
})

// delete requested id
router.delete( '/:id', jsonParser, function(req, res) {
    res.send({'requestedID' : req.params.id})
})

module.exports = router