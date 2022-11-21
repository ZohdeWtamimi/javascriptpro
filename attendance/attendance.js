function pic(){
    let users = JSON.parse(localStorage.getItem('users'))
    let current = JSON.parse(localStorage.getItem('current'))
    let imgNav = document.getElementById('imgNav')
    let user = users.filter(e=> e.email == current)
    console.log(user[0])
    // console.log(current)
    // console.log(imgNav)
    if(user[0].name == "ala'a amayreh" || user[0].name == "ala'a" || user[0].name == "alaa amayreh" || user[0].name == "alaa"){
        console.log('alaa')
        imgNav.src = "../img/alaa.jpeg"
    }
    if(user[0].name == "mona" || user[0].name == "muna" || user[0].name == "muna saleh" || user[0].name == "mona saleh"){
        console.log('mona')
        imgNav.src = "../img/mona.jpeg" 
    }
}
pic()



let students = JSON.parse(localStorage.getItem("students")) || []
// if()
// create student
// ////////////// CSS
let addUser = document.querySelector('.addUser')
let addUserform = document.querySelector('.addUserform')
addUser.addEventListener('click', ()=>{
    console.log('hello')
    addUserform.style.transform = "translateY(3px)"
    addUserform.style.display = "flex"
    first.focus()
})




// /////
let form = document.getElementById('form')
let first = document.getElementById('first')
let last = document.getElementById('last')

form.addEventListener('submit', addStudent)

function addStudent(e){
    e.preventDefault()
    let student = {
        id: students.length + 1,
        firstname: first.value,
        lastname: last.value,
        statusSt: 'attende',
        absence: 0,
        assign: 0,
        month: [],
        feedback: []
    }
    students.push(student)
    localStorage.setItem("students", JSON.stringify(students))
    first.value = ''
    last.value = ''
    display.innerHTML = getStudent(students)
    addUserform.style.display = "none"
}
// student
const display = document.querySelector('.display')
display.innerHTML = getStudent(students)



// delete
function deleteSt(id){
    students = students.filter(e => e.id !== id)
    students = students.map((e, i)=>{
        return {
            id: i + 1,
            firstname: e.firstname,
            lastname: e.lastname,
            statusSt: e.statusSt,
            absence: e.absence,
            assign: e.assign,
            month: e.month,
            feedback: e.feedback
        }

    })
    localStorage.setItem("students", JSON.stringify(students))
    display.innerHTML = getStudent(students)
}


function absenceSt(id){
    const d = new Date();
    let today = d.getDate()
    students = JSON.parse(localStorage.getItem("students"))
    students = students.map(e => {
        if(e.statusSt == 'attende' && id == e.id && e.month.indexOf(today) == -1){
            let gotDay = e.month.push(today)

            return {
                id: e.id,
                firstname: e.firstname,
                lastname: e.lastname,
                statusSt: 'abcanse',
                absence: (e.absence + 1),
                assign: e.assign,
                month: e.month,
                feedback: e.feedback
            }
        }
        return e
    })
 
    localStorage.setItem("students", JSON.stringify(students))
    display.innerHTML = getStudent(students) 
}


// onClick it will give report and make all student attende again
function getAbsanceStudentS(){
    let absences = students.filter(e => e.statusSt == 'abcanse')
    console.log(absences)
    fixed.style.display = 'block'
    disappear.style.display = 'block'
    let x = new Date()
   console.log(x)
    let ele =`<h1>Absance Summary</h1>
    <h4>Date: ${x.getDate()}/${x.getMonth()}/${x.getFullYear()}</h4>
    <h4>Time: ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}</h4>
    `
    

    absences.map((e,i)=>{
        ele += `<div class="fixedCon">
        <p>number : <span>${i+1}</span></p>
        <h3>name : <span>${e.firstname}</span></h3>
        <h3>abcanse : <span>${e.absence}</span></h3>
        </div>`
    })
    fixed.innerHTML = ele
}

let fixed = document.getElementById('fixed')
let disappear = document.getElementById('disappear')
let sum = document.querySelector('.summary')
sum.addEventListener('click', getAbsanceStudentS)
disappear.addEventListener('click', gotDisappearvalue)

function gotDisappearvalue(){
    fixed.style.display = 'none'
    disappear.style.display = 'none'
}

function getStudent(availableStudent){
    var html = `<table>
    <tr>
    <th>firstname</th>
    <th class="mediaNone">lastname</th>
    <th >details</th>
    <th >feedback</th>
    <th class="mediaSmall">tasks 50:</th>
    <th>status</th>
    <th class="delete">del</th>
    </tr>`
    availableStudent.map( e=> {
    html += `<tr>
    <td>${e.firstname}</td>
    <td class="mediaNone">${e.lastname}</td>
    <td ><button class="changeWord" onClick="details(${e.id})">explore</button></td>
    <td><button class="feedBtn" onClick="addFeedback(${e.id})">feedBack</button></td>
    <td class="mediaSmall" id='assignId'><button class="counterBtn" onClick="increase(${e.id})"><i class="fa-solid fa-plus"></i></button ><p>${e.assign}</p><button class="counterBtn" onClick="decrease(${e.id})"><i class="fa-solid fa-minus"></i></button></td>`
    if(e.statusSt == 'abcanse'){
        html += `<td><button style="background:#8C769C;color:#fff;font-weight:700;" class="changeWord status" onClick="absenceSt(${e.id})">${e.statusSt}</button></td>`
    }else{
        html += `<td><button class="changeWord status" onClick="absenceSt(${e.id})">${e.statusSt}</button></td>`
    }
    html +=`<td class="delete"><button onClick="deleteSt(${e.id})"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>`
    })
    html += `</table>`

    return html
}

function increase(id){
    let students = JSON.parse(localStorage.getItem('students'))
    students.map(e=>{
        if(e.id == id && e.assign <= 50){
            console.log(e.assign)
            return {
                id: e.id,
                firstname: e.firstname,
                lastname: e.lastname,
                statusSt: e.statusSt,
                absence: e.absence,
                assign: e.assign++,
                month: e.month,
                feedback: e.feedback
            }
        }
        return e
    })
    localStorage.setItem("students", JSON.stringify(students))
    display.innerHTML = getStudent(students) 
}

function decrease(id){
    let students = JSON.parse(localStorage.getItem('students'))
    students.map(e=>{
        if(e.id == id && e.assign > 0){
            console.log(e.assign)
            return {
                id: e.id,
                firstname: e.firstname,
                lastname: e.lastname,
                statusSt: e.statusSt,
                absence: e.absence,
                assign: e.assign--,
                month: e.month,
                feedback: e.feedback
            }
        }
        return e
    })
    localStorage.setItem("students", JSON.stringify(students))
    display.innerHTML = getStudent(students) 
}

let parent = document.getElementById("parent")
let box = document.getElementById('box')
parent.addEventListener('click', ()=>{
    parent.style.display = 'none'
    box.style.display = 'none'
})
let rowBox = document.querySelector('.rowBox')
function details(id){
    
    parent.style.display = 'block'
    box.style.display = 'block'
    let studs = JSON.parse(localStorage.getItem("students"))
    let e = studs.filter(e => e.id == id)
    displaySection1(e[0].month)
    var details = `<img class="studentImg" src="../img/users.jpg" alt="">
    <div class="studentText">
        <h3 class="getNum">student number: ${id}</h3>
        <h3>name: ${e[0].firstname} ${e[0].lastname}</h3>
        <h3>status: ${e[0].statusSt}</h3>
    </div>`
    rowBox.innerHTML = details
    // console.log(students)
}
const btnabcanseDis = document.getElementById('abcanseDis')
const calender = document.querySelector('.calender')
// console.log(calender)
let h3 = document.querySelector('.month')
function displaySection1(month){
    h3.innerHTML = `absence in this month: ${month.length ? month.length : 'none' }`
    let htmlDiv;
    for(let i = 1; i<31; i++){
        htmlDiv += `<div class="day">${i}</div>`
    }
calender.innerHTML = htmlDiv.slice(9)

month.map(e => {
    document.querySelectorAll('.day')[e - 1].classList.add('red')
 })
}


let section1 = document.querySelector('.section1')
console.log(section1)













// function addToLocal(e){
//         // console.log(id)
//         // e.preventDefault()
//         // let x = new Date()
//         // let date = `${x.getDate()}/${x.getMonth()}/${x.getFullYear()} ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}` 
    
//         // console.log(feedbackInput.value, date)
    
// }


let feedbackFrom = document.getElementById('feedbackFrom')
let feedbackInput = document.querySelector('.feedbackInput')

feedbackFrom.addEventListener('submit', (e)=>{
    console.log(feedbackInput.value)
    e.preventDefault()
})

let feedback = document.getElementById('feedback')
let feedbackDisappear = document.getElementById('feedbackDisappear')
let dispalyFeedback = document.getElementById('dispalyFeedback')
// console.log(addFeedback())
function addFeedback(id){
    feedback.style.display = 'block'
    feedbackDisappear.style.display = 'block'
    console.log(id)
    // addToLocal(id)
    feedbackFrom.addEventListener('submit', (e)=>{
        // console.log(id)

        e.preventDefault()
        let x = new Date()
        let date = `${x.getDate()}/${x.getMonth()}/${x.getFullYear()} ${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}` 

        let students = JSON.parse(localStorage.getItem('students'))
        
        students[id - 1].feedback.push({value: feedbackInput.value, date })
        localStorage.setItem("students", JSON.stringify(students))
        // console.log(students)
        dispalyFeedback.innerHTML = displayFeedback(id)
    })
    // dispalyFeedback.innerHTML = displayFeedback(id)
}

feedbackDisappear.addEventListener('click', ()=>{
    feedback.style.display = 'none'
    feedbackDisappear.style.display = 'none'
})


function displayFeedback(id){
    let students = JSON.parse(localStorage.getItem('students'))
    var feedbackString = `<div>`
    students[id -1].feedback.map(e => {
        feedbackString += `<div>${e.value}</div> <p>${e.date}</p>`
    })
    feedbackString += `</div>`
    // console.log(feedbackString)
    return feedbackString
}
