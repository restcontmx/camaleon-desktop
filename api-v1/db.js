var mysql   = require('mysql'),
    async   = require('async'),
    fs      = require('fs')

const   AUTH    = 'authentication',
        SALES   = 'sales'

const dbConfig  = {
    "testing": {
        "authentication": {
            "host": "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            "user": "e71tt9yv75l7qhbo",
            "password": "jac19ut6mfx71892",
            "database": "ziveffmn3b6auo9e",
            "port": 3306
        },
        "sales": {
            "host": "www.camaleonpos.com",
            "user": "camaleonwebpos",
            "password": "CAmAlEOnWeBPoS4872^!",
            "database": "webpos_machina",
            "port": 3306
        }
    },
    "development": {
        "authentication": {
            "host": "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            "user": "e71tt9yv75l7qhbo",
            "password": "jac19ut6mfx71892",
            "database": "ziveffmn3b6auo9e",
            "port": 3306
        },
        "sales": {
            "host": "www.camaleonpos.com",
            "user": "camaleonwebpos",
            "password": "CAmAlEOnWeBPoS4872^!",
            "database": "webpos_machina",
            "port": 3306
        }
    },
    "production": {
        "authentication": {
            "host": "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            "user": "e71tt9yv75l7qhbo",
            "password": "jac19ut6mfx71892",
            "database": "ziveffmn3b6auo9e",
            "port": 3306
        },
        "sales": {
            "host": "www.camaleonpos.com",
            "user": "camaleonwebpos",
            "password": "CAmAlEOnWeBPoS4872^!",
            "database": "webpos_machina",
            "port": 3306
        }
    }
}

var state = {
    pool: null,
    mode: null
}

var auth_state = {
    pool: null,
    mode: null
}

// connect
// function that creates a connection to the sales db
// @param mode - envrionment mode
// @param done - callback function
// @returns none
exports.connect = function (mode, done) {

    state.pool = mysql.createPool(dbConfig[mode][SALES])
    state.mode = mode

    done()
}

// connect_auth
// function that creates a connection to the auth db
// @param mode - envrionment mode
// @param done - callback function
// @returns none
exports.connect_auth = function (mode, done) {

    auth_state.pool = mysql.createPool(dbConfig[mode][AUTH])
    auth_state.mode = mode

    done()

}

// getAuth
// will get a connection on the auth pool
// @params none
// @returns db connection
exports.getAuth = function () {
    return auth_state.pool
}

// get
// will get a connection on the sales pool
// @params none
// @returns db connection
exports.get = function () {
    return state.pool
}