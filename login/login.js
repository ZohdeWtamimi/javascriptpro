
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
    // if ( valueFromEmailLog == localStorage.getItem('email')){
    //     document.getElementById("login-email-accept").style.display = 'block'
    //     document.getElementById("login-email-warining").style.display = 'none'  
    // } else {
    //     document.getElementById("login-email-accept").style.display = 'none'
    //     document.getElementById("login-email-warining").style.display = 'block' 
    // } 

    // if ( valueFromPasswordLog == localStorage.getItem('password')){
    //     document.getElementById("login-password-accept").style.display = 'block'
    //     document.getElementById("login-password-warining").style.display = 'none'  
    // } else {
    //     document.getElementById("login-password-accept").style.display = 'none'
    //     document.getElementById("login-password-warining").style.display = 'block' 
    // }





// let users = JSON.parse(localStorage.getItem("users")) || [];
// console.log(users)
// function logSubmit(event) {
//     console.log('hello from submit')
//     let compareName = logName.value 
//     let comparePass = password.value
//     // console.log(compareName, comparePass)
//     // console.log(users)
//     users.map(e => {
//         if(e.name === compareName && e.password == comparePass){
//             console.log(`Welcome ${e.name}`)
//             log.textContent = `Welcome ${e.name}`
//         }
//     })
    

// event.preventDefault();
// }
// const log = document.getElementById('log')
// const logName = document.getElementById('logName')
// const password = document.getElementById('password')
// const form = document.getElementById('form');
// form.addEventListener('submit', logSubmit);