let myLibrary=[];



function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function displayBooks(){
    const bookList= document.getElementById('bookList');
    while(bookList.firstChild){
        bookList.removeChild(bookList.lastChild);
    }
    for(let i=0; i<myLibrary.length; i++){
        const bookCard=document.createElement('div');
        bookCard.classList.add('bookCard');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const done = document.createElement('div');
        bookTitle.textContent=myLibrary[i].title;
        bookAuthor.textContent=myLibrary[i].author;
        bookPages.textContent=myLibrary[i].pages.toString();
        if(myLibrary[i].read=='on'){
            done.style.backgroundC3olor='green';
        } else{
            done.style.backgroundColor='red';
        }
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(done);
        bookList.appendChild(bookCard);
    }
}

function addBookToLibrary(){
    console.log(document.getElementById('read').value);
    const newBook = new Book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').value);
    myLibrary.push(newBook);
    var form = document.querySelector('form');
    form.reset();
    displayBooks();
}


