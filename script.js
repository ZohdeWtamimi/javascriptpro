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

update.addEventListener('click' , (e)=>{
    e.preventDefault();
    form.style.display='block'
    inform.style.display='none'
})


form.addEventListener('submit' , (e) => {
    e.preventDefault();  
    Name.innerHTML = coachname.value 
    info.innerHTML=coachinfo.value 
    email.innerHTML=coachemail.value 
    num.innerHTML=coachnum.value
    form.style.display='none'
    inform.style.display='block'
})