const loginForm = document.querySelector("#login-form");
const input = loginForm.querySelector("input");
const hello = document.querySelector("#hello");


function handleLogin(e){
    e.preventDefault();
     
    loginForm.classList.add("hidden");
    const userName = input.value;
    localStorage.setItem("username",userName);

    hello.innerText = `Hello ${userName}`;
    hello.classList.remove("hidden");   
}

loginForm.addEventListener("submit", handleLogin);

const savedName = localStorage.getItem("username");
console.log(savedName);
    if(savedName === null){
        loginForm.classList.remove("hidden");
    }else {
        hello.classList.remove("hidden");
        hello.innerText = `Hello ${savedName}`;
        loginForm.classList.add("hidden");
    }
