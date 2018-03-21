var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var urlLib = require( 'url' );
var router = express()
var jsonParser = bodyParser.json();

var auth = require( '../repositories/authRepository.js' )
var web_users = require( '../models/web_users' )

// credentials pettition
// validates the right credentials on the repository
// will return a jwt token
// @param route
// @param jsonParser json middle ware
// @param callback function with request and response
// @returns response
router.post( '/credentials', jsonParser, function(req, res) {
    var user = new web_users(req.body.User_EMail, req.body.User_Password)
    auth.credentials(user, function( err, data ){
        if( err ) {
            res.status(403)
            res.send( { errors : Array.of( err ) } )
        } else {
            var responseCredentials = {
                user : data.user,
                token : data.token
            }
            res.send( responseCredentials )
        }
    })
})

// register pettition
// creates a new registration
// TODO : Create the required rows on the required tables
// TODO : Application authentication
// @param route
// @param jsonParser
// @param callback function with request and response
// @returns response
router.post( '/register', jsonParser, function(req, res) {
    // sets data to web_users model
    var user = new web_users(req.body.User_EMail, req.body.User_Password)
    user.User_FirstName = req.body.User_FirstName
    user.User_LastName = req.body.User_LastName
    // Create User
    auth.createUser(user, function( err, data ){
        if( err ) {
            res.status(400)
            res.send( { errors : Array.of( err ) } )
        } else {
            res.status(201)
            res.send( data )
        }
    })
})

module.exports = router