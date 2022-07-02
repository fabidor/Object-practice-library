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
        const remove=document.createElement('button');
        bookTitle.textContent=myLibrary[i].title;
        bookAuthor.textContent=myLibrary[i].author;
        bookPages.textContent=myLibrary[i].pages.toString();
        if(myLibrary[i].read===true){
            done.style.backgroundColor='green';
        } else{
            done.style.backgroundColor='red';
        }
        remove.textContent="Remove";
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(done);
        bookCard.appendChild(remove);
        bookList.appendChild(bookCard);
        remove.addEventListener('click', () =>{
            for(let i =0; i<myLibrary.length; i++){
                if(myLibrary[i].title==bookTitle.textContent){
                    myLibrary.splice(i,1)
                }
            }
            displayBooks();
        }
    )
}
}

//function openForm(){
    //const formField=document.getElementById('formField');
    //const formBox=document.getElementById('formBox');
    //formField.appendChild(formBox);
//}

function addBookToLibrary(){
    let title=document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    let read=document.getElementById('read').checked;
    console.log(read);
    const newBook=new Book(title, author, pages, read);
    myLibrary.push(newBook);
    var form = document.querySelector('form');
    form.reset();
    displayBooks();
    //const formField=document.getElementById('formField');
    //const formBox=document.getElementById('formBox');
    //formField.removeChild(formBox);
}



