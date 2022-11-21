let users = JSON.parse(localStorage.getItem("users")) || [];

let validError = []
function logSubmit(){ 
        var fname = document.getElementById('fname');
        var num = document.getElementById('num');
        var email = document.getElementById('email');
        var password= document.getElementById('password');
        var conPass = document.getElementById('conPass');
        const form = document.getElementById('form');
        var namecheck = /\d/;
        var y = /\w+/;
        var numcheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        if (namecheck.test(fname.value) || namecheck == '') {
            document.getElementById('fnameerror').innerHTML = "name should not contain numbers";
            document.getElementById('fnameerror').style.fontSize = '16px'
            document.getElementById('fnameerror').style.color = 'red'
            validError.push('name')
        } else if(y.test(fname.value)){
            document.getElementById('fnameerror').innerHTML = "";
            
        }
        if (numcheck.test(num.value)) {
            document.getElementById('numerror').innerHTML = "";
        } else {
            document.getElementById('numerror').innerHTML = "**Should not contain digits and special characters";
            validError.push('number')
        }
        if (emailcheck.test(email.value)) {
            document.getElementById('mail').innerHTML = "";
        } else {
            document.getElementById('mail').innerHTML = "**Email-id is invalid";
            validError.push('email')
        }
        if(validError.length == 0){
            console.log(fname.value , num.value, email.value, password.value, conPass.value)
            let obj = {
                        name: fname.value,
                        email: email.value,
                        num: num.value,
                        password: password.value,
                        confirmtionPass: conPass.value
                    }
                    users.push(obj)
                    localStorage.setItem("users", JSON.stringify(users));
                    fname.value = ''
                    email.value = ''
                    num.value = ''
                    password.value = ''
                    conPass.value = ''
        }
}