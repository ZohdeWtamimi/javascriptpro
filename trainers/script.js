let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

////////////////////////////////////////


let form = document.getElementById('form')
let coachname = document.getElementById('coachname')
let Name = document.getElementById('h1')
let coachinfo = document.getElementById('coachinfo')
let info = document.getElementById('p')
let coachemail= document.getElementById('coachemail')
let email = document.getElementById('h3')
let coachnum = document.getElementById('coachnum')
let num = document.getElementById('hnum')
let update = document.getElementById('update')
let inform = document.getElementById('inform')
let selectPic = document.querySelectorAll('.selectPic')
console.log(selectPic)

let users = JSON.parse(localStorage.getItem('users'))
let current = JSON.parse(localStorage.getItem('current'))
console.log(users)
console.log(current)
function pic(){
    let user = users.filter(e=> e.email == current)
    if(user[0].name == "ala'a amayreh" || user[0].name == "ala'a" || user[0].name == "alaa amayreh" || user[0].name == "alaa"){
        console.log('alaa')
        selectPic[0].src = "../img/alaa.jpeg"
        selectPic[1].src = "../img/alaa.jpeg"
    }
    if(user[0].name == "mona" || user[0].name == "muna" || user[0].name == "muna saleh" || user[0].name == "mona saleh"){
        console.log('mona')
        selectPic[0].src = "../img/mona.jpeg"
        selectPic[1].src = "../img/mona.jpeg"
    }
}
pic()
function getTrainerData(){
    let user = users.filter(e=> e.email == current)
    // console.log(user[0])
    Name.innerHTML = user[0].name
    email.innerHTML = user[0].email
    num.innerHTML = user[0].num
}
getTrainerData()

update.addEventListener('click' , (e)=>{
    e.preventDefault();
    form.style.display='block'
    inform.style.display='none'
})


form.addEventListener('submit' , (e) => {
    e.preventDefault(); 
    let users = JSON.parse(localStorage.getItem('users'))
     users = users.map(e => {
        if(current == e.email){
            console.log(current)
            localStorage.setItem('current', JSON.stringify(coachemail.value))
            return {
                name: coachname.value,
                email: coachemail.value,
                num: coachnum.value,
                password: e.password,
                confirmtionPass: e.confirmtionPass
            }
        }
        return e
    })
    localStorage.setItem('users', JSON.stringify(users))
    console.log(users)
    // Name.innerHTML = coachname.value 
    // email.innerHTML=coachemail.value 
    // num.innerHTML=coachnum.value
    info.innerHTML=coachinfo.value 
    getTrainerData()
    location.reload();
    form.style.display='none'
    inform.style.display='block'
})