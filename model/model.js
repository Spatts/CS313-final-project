const { Pool } = require("pg");
require('dotenv').config();
const db_url = process.env.DATABASE_URL || process.env.DATABASE_URL1;
const pool = new Pool({connectionString: db_url});
require('util');

function getBook(callback){
    var sql = "SELECT bookName, descriptionK, photo, book_id FROM book ORDER BY book_id"
    pool.query(sql, function(error, db_info){
        if(error){
            console.log("Error in query book: ")
			console.log(error);
			callback(error, null);
        } 
        else {
            var result = {
                    success:true,
                    list:db_info.rows
            }
            console.log("book DB result: "+ JSON.stringify(db_info.rows))
            callback(null, result);
        }
    })
}

function getalphaBook(callback){
    var sql = "SELECT bookName, descriptionK, photo, book_id FROM book ORDER BY bookName"
    pool.query(sql, function(error, db_info){
        if(error){
            console.log("Error in query book: ")
			console.log(error);
			callback(error, null);
        } 
        else {
            var result = {
                    success:true,
                    list:db_info.rows
            }
            console.log("book DB result: "+ JSON.stringify(db_info.rows))
            callback(null, result);
        }
    })
}

function addBook(book, callback){
    var sql = "INSERT INTO book(bookName, descriptionK, photo) VALUES($1, $2, $3)";
    var params = [book.bookname, book.descriptionk, book.photo];
    pool.query(sql, params, function(error, db_results){
        if(error){
            throw error;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function removeBook(bid, callback){
    var sql = "DELETE FROM book WHERE book_id=$1"
    var params = [bid.bid];
    console.log(bid.bid)
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function editBook(book, callback){
    var sql = "UPDATE book SET bookName=($1), descriptionK=($2), photo=($3), WHERE book_id=($8)";
    var params = [book.bookname, book.descriptionk, book.photo, book.kid];
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

module.exports = {
    getBook: getBook,
    getalphaBook: getalphaBook,
    addBook: addBook,
    removeBook: removeBook,
    editBook: editBook
};