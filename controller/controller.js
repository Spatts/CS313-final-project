const model = require("../model/model.js")

function getBook(req, res){
    model.getBook(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getalphaBook(req, res){
    model.getalphaBook(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function addBook(req, res){
    const book = req.body.book
    model.addBook(book, function(error, result){
    })
}

function removeBook(req,res){
    const kids = req.body.kids
    model.removeBook(kids, function(error, result){

    });
}

function editBook(req,res){
    const book = req.body.book
    model.editBook(book, function(error, result){

    });
}

module.exports = {
    getBook: getBook,
    getalphaBook: getalphaBook,
    addBook: addBook,
    removeBook: removeBook,
    editBook: editBook
};