
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

            const url = getCurrentURL()
            loc = url.match(/.*?(?=\/login\/login\.html|$)/i)[0]
            location.href = `${loc}/main/mainhome.html`
        }else{
            console.log('check your password')
        }
    })
    e.preventDefault()
})

function getCurrentURL () {
    return window.location.href
}

