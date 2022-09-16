

// SIGN IN / LOG-IN PART  / SIGN IN / LOG-IN PART  / SIGN IN / LOG-IN PART  
// SIGN IN / LOG-IN PART  / SIGN IN / LOG-IN PART  / SIGN IN / LOG-IN PART  
  

 const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

loginBtn.addEventListener('click', ()=>{
  moveBtn.classList.add('rightBnt');
  login.classList.add('loginForm');
  signup.classList.remove('signUpForm');
  moveBtn.innerHTML = 'Log-In'
})

signupBtn.addEventListener('click', ()=>{
  moveBtn.classList.remove('rightBnt');
   login.classList.remove('loginForm');
  signup.classList.add('signUpForm');
  moveBtn.innerHTML = 'Sign-Up'
})





// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

    // BLOG POST SECTION



    class Book{
    constructor(title, author, isbn){
    this.title = title;;
    this.author = author;
    this.isbn  = isbn;
    }

}

class UI{

    addBook(book){
        const listItems = document.getElementById('book-list');
        const row = document.createElement('tr')
        row.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href"#"class="deleted">X<a/></td>
                    `
        listItems.appendChild(row) 
    }

    clearField(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
    alertMessage(message , className){
        const container = document.querySelector('.container');
        const form = document.querySelector('form');
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(message));
        div.className =`alert ${className}`;
        container.insertBefore(div, form);

        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 2000)
    }
    deleteBook(target){
        if (target.className === 'deleted') {
            target.parentElement.parentElement.remove()
           
        }
    }
}


document.getElementById('book-form').addEventListener('submit',(e)=> {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

if (title === ''|| author === '' || isbn === '') {
    ui.alertMessage('pls fill all fields', 'error')
} else {
    
 ui.addBook(book);

    // clear field
ui.clearField()

// validation
ui.alertMessage('your book has been successfully added', 'success');
}
    e.preventDefault();
})


    // ADD EVENT LISTENER FOR DELETE
    document.getElementById('book-list').addEventListener('click', (e)=>{

        // instance UI
        const ui = new UI();
        // delete Book
        ui.deleteBook(e.target);
        ui.alertMessage('your book has been deleted', 'delet');
        e.preventDefault();
    })
