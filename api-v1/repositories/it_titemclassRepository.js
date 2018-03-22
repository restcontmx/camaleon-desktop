var db = require('../db.js')


exports.getAll = function (done) {
    db.get().query('SELECT * FROM it_titemclass ;', function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}

exports.getAllWithItems = function (done) {
    db.get().query(
        `SELECT DISTINCT Class_ID, Class_Name 
     FROM it_titemclass 
     INNER JOIN it_titem ON it_titemclass.Class_ID = it_titem.ITEM_Class_ID 
     ORDER BY Priority; `
        , function (err, rows) {
            if (err) return done(err)
            done(null, rows)
        })
}

exports.create = function (it_titemclass, done) {
    db.get().query(
        ` INSERT INTO it_titemclass 
        (
            Class_Name, 
            Class_Show
        ) VALUES ( ?, ? ) ;`,
        [it_titemclass.Class_Name, it_titemclass.Class_Show],
        function (err, rows) {
            if (err) {
                return done({ message: err })
            } else {
                done(null, { message: 'ItemClass Successfuly Created' })
            }
        }
    )
}

exports.update = function (id, it_titemclass, done) {
    db.get().query(
        `UPDATE it_titemclass 
         SET Class_Name= ? ,
         Class_Show= ? 
         WHERE Class_ID= ? ;`,
        [it_titemclass.Class_Name, it_titemclass.Class_Show, id],
        function (err, rows) {
            if (err) {
                return done({ message: err })
            } else {
                done(null, { message: 'ItemClass Successfuly Updated' })
            }
        }
    )
}

exports.retrieveByName = function (name, done) {
    db.get().query(
        `SELECT * FROM it_titemclass WHERE Class_Name = ? ;`,
        [name],
        function (err, rows) {
            if (err) {
                return done({ message: err })
            } else {
                done(null, rows[0])
            }
        }
    )
}

exports.retrieve = function (id, done) {
    db.get().query(
        `SELECT * FROM it_titemclass WHERE Class_ID = ? ;`,
        [id],
        function (err, rows) {
            if (err) {
                return done({ message: err })
            } else {
                done(null, rows[0])
            }
        }
    )
}

exports.delete = function (id, done) {
    db.get().query(
        `DELETE FROM it_titemclass WHERE Class_ID = ? ;`,
        [id],
        function (err, rows) {
            if (err) {
                return done({ message: err })
            } else {
                done(null, { message: 'ItemClass Successfuly Deleted' })
            }
        }
    )
}
