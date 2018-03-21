var db = require('../db.js')

exports.create = function( data ){
    console.log(data)
}

exports.getAll = function(done) {
    db.get().query( 'SELECT * FROM it_tmove', function( err, rows ) {
        if( err ) return done( err )
        done( null, rows )
    })
}

exports.create - function(data, done) {

}

exports.update = function(data, done) {

}

exports.retrieve = function(id, done) {

}

exports.delete = function( id, done ) {

}