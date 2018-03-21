var db = require('../db.js')
var jwt = require('jsonwebtoken')
var express = require('express')
var router = express()
var bcrypt = require('bcrypt-nodejs')

const secretJWT = '}x"aEZkk24cbXc$&/Q7cD6KtR]]^?4'

// validateToken
// will validate the request token 
// @param token - a jwt token
// @param done - function callback
// @returns none
function validateToken (token, done) {
    if( token ) {
        jwt.verify(token, secretJWT, function(err, decoded){
            if( err ) {
                done( { message : 'Falied to authenticate token' } )
            } else {
                done( null, decoded )
            }
        })
    } else {
        done( { message : "There is no token" } )
    }
}

// getJWTToken 
// function that will generate a json web token
// @param
// @returns token
function genJWTToken ( user ) {
    const payload = {
        User_EMail : user.User_EMail,
        User_ID : user.User_ID,
        User_Active : user.User_Active
    }
    var token = jwt.sign(payload, secretJWT, {
        expiresIn:1440
    })
    return token
}

// authenticate middleware
// this will work as an authentication middleware
// @param req - http request
// @param res - http response 
// @param next - next callback exc
// @returns next callback or a 401 if not a valid token
exports.authenticate = function(req, res, next) {
    validateToken(req.token, ( err, data )=>{
        if ( err ) {
            res.status(401)
            res.send({ data : null, errors : Array.of(err) })
        } else {
            req.user = data
            return next()
        }
    })
}

// credentials
// will validate validate credentials
// @param user - user model
// @param done - callback function
// @returns callback function
exports.credentials = function(user, done) {
    db.getAuth().query(
        `SELECT 
            a.User_EMail,
            a.User_FirstName,
            a.User_LastName,
            a.User_ID,
            a.User_Active,
            a.User_Password
        FROM web_users a
        WHERE a.User_EMail = ?`,
        [ user.User_EMail ],
        function(err, rows){
            if (err) {
                return done({ message : err })
            } else {
                if( rows.length == 0 ) {
                    done({ message : "Incorrect EMAIL" }, null)
                } else if( bcrypt.compareSync( user.User_Password, rows[0].User_Password ) ) {
                    let retUser = {
                        User_EMail : rows[0].User_EMail,
                        User_FirstName : rows[0].User_FirstName,
                        User_LastName : rows[0].User_LastName,
                        User_ID : rows[0].User_ID,
                        User_Active : rows[0].User_Active
                    }
                    done(null, { user : retUser, token : genJWTToken(retUser)})
                } else {
                    done({ message : "Incorrect PASSWORD" }, null)
                }
            }
        }
    )
}

// createUser
// will create a user into the authentication database
// @param user - a web_users class
// @param done - callback function
// @returns a callback err and data
exports.createUser = function(user, done) {
    db.getAuth().query(
        ` INSERT INTO web_users 
        (
            User_EMail,
            User_FirstName,
            User_LastName,
            User_Password
        ) VALUES ( ?, ?, ?, ? )`,
        [ user.User_EMail, user.User_FirstName, user.User_LastName, bcrypt.hashSync(user.User_Password) ],
        function(err, rows){
            if (err) {
                return done({ message : err })
            } else {
                done(null, { message : "User Successfuly Created" })
            }
        }
    )
}