let myLibrary=[];

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}


function addBookToLibrary(){
    const newBook = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').value);
    myLibrary.push(newBook);
    var form = document.querySelector('form');
    form.reset();
}

