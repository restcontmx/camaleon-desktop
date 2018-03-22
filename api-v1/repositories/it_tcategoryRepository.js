var db = require('../db.js')

exports.getAll = function (done) {
  db.get().query('SELECT it_tcategory.Cate_id, it_tcategory.Cate_Name FROM it_tcategory ORDER BY Cate_Name ASC ;',
    function (err, rows) {
      if (err) return done(err)
      done(null, rows)
    })
}

exports.getAllWithItems = function (done) {
  db.get().query(
    `SELECT DISTINCT it_tcategory.Cate_id, it_tcategory.Cate_Name 
      FROM it_tcategory 
      INNER JOIN it_titem ON it_tcategory.Cate_ID = it_titem.ITEM_Cate_ID 
      ORDER BY Cate_Name ASC ; `
    , function (err, rows) {
      if (err) return done(err)
      done(null, rows)
    })
}

exports.create = function (it_tcategory, done) {
  db.get().query(
    ` INSERT INTO it_tcategory 
        (
            Cate_Name, 
            TAXPERC
        ) VALUES ( ?, ? ) ;`,
    [ it_tcategory.Cate_Name, it_tcategory.TAXPERC ],
    function (err, rows) {
      if (err) {
        return done({ message: err })
      } else {
        done(null, { message: 'ItemCategory Successfuly Created' })
      }
    }
  )
}

exports.update = function (id, it_tcategory, done) {
  db.get().query(
    `UPDATE it_tcategory 
         SET Cate_Name= ? ,
         TAXPERC= ? 
         WHERE Cate_ID= ? ;`,
    [ it_tcategory.Cate_Name, it_tcategory.TAXPERC, id ],
    function (err, rows) {
      if (err) {
        return done({ message: err })
      } else {
        done(null, { message: 'ItemCategory Successfuly Updated' })
      }
    }
  )
}

exports.retrieveByName = function (name, done) {
  db.get().query(
    `SELECT * FROM it_tcategory WHERE Cate_Name = ? ;`,
    [name],
    function (err, rows) {
      if (err) {
        return done({ message: err })
      } else {
        done(null, rows)
      }
    }
  )
}

exports.retrieve = function (id, done) {
  db.get().query(
    `SELECT * FROM it_tcategory WHERE Cate_ID = ? ;`,
    [id],
    function (err, rows) {
      if (err) {
        return done({ message: err })
      } else {
        done(null, rows)
      }
    }
  )
}

exports.delete = function (id, done) {
  db.get().query(
    `DELETE FROM it_tcategory WHERE Cate_ID = ? ;`,
    [id],
    function (err, rows) {
      if (err) {
        return done({ message: err })
      } else {
        done(null, { message: 'ItemCategory Successfuly Deleted' })
      }
    }
  )
}
