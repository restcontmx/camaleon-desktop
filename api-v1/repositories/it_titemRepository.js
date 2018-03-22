var db = require('../db.js')


exports.getAll = function(done) {
    db.get().query( 
        `
        SELECT *, 
        it_titem.ITEM_Class_ID, it_titem.ITEM_Cate_ID,
        it_titem.ITEM_Sale_Price AS ITEM_CSale_Price,
        1 AS MODE, it_titem.ITEM_ID AS Order_MItem_ID, 
        1 AS Order_Item_Q,it_titem.ITEM_Sale_Price, 
        it_titem.ITEM_Type_ID, it_titem.ITEM_Screen_Name, 
        it_titem.ITEM_Description, it_tcategory.TAXPERC, 
        it_titem.ITEM_Cost, 1 AS Host,
        NOW() AS TIMEIN, 0 AS STOCKROOM, 
        '' AS DISCOUNTCODE
        FROM it_titem
        INNER JOIN it_tcategory ON it_titem.ITEM_Cate_ID = it_tcategory.Cate_ID 
        ORDER BY ITEM_Description;
        `
    , function( err, rows ) {
        if( err ) return done( err )
        done( null, rows )
    })
}

exports.create - function(data, done) {
    db.get().query(
        ` INSERT INTO it_titemclass 
            (
                Class_Name, 
                Class_Show
            ) VALUES ( ?, ? ) ;`,
        [ it_titemclass.Class_Name, it_titemclass.Class_Show ],
        function (err, rows) {
          if (err) {
            return done({ message: err })
          } else {
            done(null, { message: 'ItemClass Successfuly Created' })
          }
        }
      )
}

exports.update = function(data, done) {

}

exports.retrieve = function (id, done) {
    db.get().query(
      `
        SELECT *, 
        it_titem.ITEM_Show, it_titem.ITEM_Cate_ID, 
        it_tcategory.Cate_Name, it_titem.ITEM_Class_ID, 
        it_titemclass.Class_Name, it_titem.ITEM_Sale_Price AS ITEM_CSale_Price, 
        1 AS MODE, it_titem.ITEM_ID AS Order_MItem_ID, 
        1 AS Order_Item_Q, it_titem.ITEM_Sale_Price, 
        it_titem.ITEM_Type_ID, it_titem.ITEM_Screen_Name, 
        it_titem.ITEM_Description, it_tcategory.TAXPERC, 
        it_titem.ITEM_Cost, 1 AS Host, NOW() AS TIMEIN, 
        0 AS STOCKROOM, '' AS DISCOUNTCODE
        FROM it_titem
        LEFT JOIN it_tcategory ON it_titem.ITEM_Cate_ID = it_tcategory.Cate_ID
        LEFT JOIN it_titemclass ON it_titem.ITEM_Class_ID = it_titemclass.Class_ID
        WHERE ITEM_ID= ?
        ORDER BY ITEM_Description
        LIMIT 1;
      `,
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
      `DELETE FROM it_titem WHERE ITEM_ID = ? ;`,
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
  

