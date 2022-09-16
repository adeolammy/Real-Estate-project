

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

  