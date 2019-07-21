const homepageModel = require("../model/model.js")

function getBook(req, res){
    homepageModel.getBook(function(error, result){
        if (error || result == null) {
            res.status(500).json({success: false, data: error});
        } 
        else{
            res.json(result)
        }
    })
}

function getalphaBook(req, res){
    homepageModel.getalphaBook(function(error, result){
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
    homepageModel.addBook(book, function(error, result){
    })
}

function removeBook(req,res){
    const kids = req.body.kids
    homepageModel.removeBook(kids, function(error, result){

    });
}

function editBook(req,res){
    const book = req.body.book
    homepageModel.editBook(book, function(error, result){

    });
}

module.exports = {
    getBook: getBook,
    getalphaBook: getalphaBook,
    addBook: addBook,
    removeBook: removeBook,
    editBook: editBook
};