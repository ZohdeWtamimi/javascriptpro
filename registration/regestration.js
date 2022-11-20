let users = JSON.parse(localStorage.getItem("users")) || [];
        
function logSubmit(event) {
    let obj = {
        name: fname.value,
        email: email.value,
        num: num.value,
        password: password.value,
        confirmtionPass: conPass.value
    }
    users.push(obj)
    
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users));

event.preventDefault();
}
const fname = document.getElementById('fname')
const email = document.getElementById('email')
const num = document.getElementById('num')
const password = document.getElementById('password')
const conPass = document.getElementById('conPass')
const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);
