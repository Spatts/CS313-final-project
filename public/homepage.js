var bid;

function displayBook() {    
    $.get("/getBook", function(data) {
        for (var i = 0; i < data.list.length; i++) {
            var book = data.list[i];
            if(i == 0){
                bid = book.book_id;
                $("#displayBooks_id").empty().append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + book.bookname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + book.photo + "'></div><div><h4>" + book.descriptionk + "</h4></div><div><input onclick='editBook("+bid+")' name='Edit Book' value='Edit Book' class='btn btn-warning btn-sm float-center'><input onclick='removeBook(" + bid + ")' type='button' name='Remove book' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></div></div></div>" );
            }
            else{
                bid = book.book_id;
                $("#displayBooks_id").append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + book.bookname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + book.photo + "'></div><div><h4>" + book.descriptionk + "</h4></div><div><input onclick='editBook("+bid+")' name='Edit Book' value='Edit Book' class='btn btn-warning btn-sm float-center'><input onclick='removeBook(" + bid + ")' type='button' name='Remove book' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></div></div></div>");
            }
        }
    })
    $("#dBook").toggle();
}

function alphaBook() {    
    $.get("/getalphaBook", function(data) {
        for (var i = 0; i < data.list.length; i++) {
            var book = data.list[i];
            if(i == 0){
                bid = book.book_id;
                $("#displayBooks_id").empty().append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + book.bookname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + book.photo + "'></div><div><h4>" + book.descriptionk + "</h4></div><div><input onclick='editBook("+bid+")' name='Edit Book' value='Edit Book' class='btn btn-warning btn-sm float-center'><input onclick='removeBook(" + bid + ")' type='button' name='Remove book' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></div></div></div>");
            }
            else{
                bid = book.book_id;
                $("#displayBooks_id").append("<div id='myDIV'><div class='jumbotron text-center'><h1>" + book.bookname + "</a></h1></div><div class='keyList'><div><img class='img-thumbnail mx-auto d-block img-fluid darkphoto' src='" + book.photo + "'></div><div><h4>" + book.descriptionk + "</h4></div><div><input onclick='editBook("+bid+")' name='Edit Book' value='Edit Book' class='btn btn-warning btn-sm float-center'><input onclick='removeBook(" + bid + ")' type='button' name='Remove book' id ='button1' value='Remove' class='btn btn-danger btn-sm float-right'></input></div></div></div>" );
            }
        }
    })
    $("#dBook").toggle();
}

function addBook(){
    $("#addBooks_id").empty().append("<div class='panel-body'><div class='form-group'><input type='text' name='bookName' id='bookName' class='form-control input-sm' placeholder='Book Name' required></div><div class='form-group'><input type='text' name='desc' id='desc' class='form-control input-sm' placeholder='Description' required></div><div class='form-group'><input type='text' name='photo' id='photo' class='form-control input-sm' placeholder='Photo URL' required></div><input onclick='sendBookInfo();' name='Add' value='Add' class='btn btn-info btn-block'></div>")
    $("#aBook").toggle();
}

function sendBookInfo(){
    var name = $("#bookName").val();
    var description = $("#desc").val();
    var photo = $("#photo").val();
    var book = {"bookname": name, "descriptionk": description, "photo": photo };
    $.post("/addBook", {book:book}, function(error, res){
        if(!error){
            alert("book succesfully created");
        } 
        else {
            alert("error");
        }
    })
    alert("book added!");
    $("#abook").toggle();
}

function removeBook(bid){
    var bids = {"bid": bid};
    if(window.confirm("Are you sure you want to delete that book?")){
        $.post("/removeBook", {bids:bids}, function(error, res){
            if(!error){
                alert("did not remove book");
            } 
            else {
                alert("error");
            }
        })
    }
    displayBook()
}

function editBook(bid){
    $("#dBook").toggle();
    var bid = bid;
    $.get("/getBook", function(data) {
        for (var i = 0; i < data.list.length; i++) {
            var book = data.list[i];
            if(bid == book.book_id){
                $("#editKey_id").empty().append("<div class='panel-body'><div class='form-group'><div class='darkTitle'>Name</div><input type='text' name='bookName' id='bookName' class='form-control input-sm' value='"+book.bookname+"' placeholder='Book Name' required></div><div class='darkTitle'>Description</div><div class='form-group'><input type='text' name='desc' id='desc' class='form-control input-sm' value='"+book.descriptionk+"' placeholder='Description' required></div><div class='form-group'><div class='darkTitle'>Photo URL</div><input type='text' name='photo' id='photo' class='form-control input-sm' value='"+book.photo+"' placeholder='Photo URL' required></div><input onclick='sendEBookInfo("+bid+")' name='Edit' value='Edit' class='btn btn-info btn-block'></div>")
                $("#eKey").toggle();
            }
        }
    })
}

function sendEBookInfo(bid){
    var name = $("#bookName").val();
    var description = $("#desc").val();
    var photo = $("#photo").val();
    var bid = bid;
    var book = {"bookname": name, "descriptionk": description, "photo": photo, "bid": bid};
        $.post("/editBook", {book, book}, function(error, res){
            if(!error){
                alert("book succesfully update");
            } 
            else {
                alert("error");
            }
        })
    alert("Book edited!");
    $("#eKey").toggle();
    $("#dBook").toggle();
    $("#dBook").toggle();
}