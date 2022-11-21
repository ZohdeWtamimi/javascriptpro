
let formLogInEvent = document.getElementById("sub")
let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users)
let logform = document.getElementById('logform')
let mail = document.getElementById('mail')
let pass = document.getElementById('pass')
logform.addEventListener('submit', (e)=>{
    let emailValue = mail.value
    let passValue = pass.value
    users.map(e => {
        console.log(e.email == emailValue, e.password == passValue)
        if(e.email == emailValue && e.password == passValue){
            localStorage.setItem('current', JSON.stringify(e.email))
            console.log('welcome')
            // location.href = "http://127.0.0.1:5500/main/mainhome.html";
            location.href = "https://zohdewtamimi.github.io/javascriptpro/main/mainhome.html";
        }else{
            console.log('check your password')
        }
    })
    e.preventDefault()
})
