var mysql   = require('mysql'),
    async   = require('async'),
    fs      = require('fs')

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
exports.connect = function (config, done) {

    state.pool = mysql.createPool(config)

    done()
}

// disconnect function
// will empty the connection pool
exports.disconnect = function(done) {
    state = {
        pool: null,
        mode: null
    }
    done()
}

// get
// will get a connection on the sales pool
// @params none
// @returns db connection
exports.get = function () {
    return state.pool
}