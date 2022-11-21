let users = JSON.parse(localStorage.getItem('users'))
let current = JSON.parse(localStorage.getItem('current'))
let img = document.getElementById('img')

function pic(){
    let user = users.filter(e=> e.email == current)
    if(user[0].name == "ala'a amayreh" || user[0].name == "ala'a" || user[0].name == "alaa"){
        console.log('alaa')
        img.src = "../img/alaa.jpeg"
        
    }
    if(user[0].name == "mona" || user[0].name == "muna" || user[0].name == "muna saleh" || user[0].name == "mona saleh"){
        console.log('mona')
        img.src = "../img/mona.jpeg"
        
    }
}
pic()

let flip = document.querySelector('.flip-card-back')
console.log(flip)
function displayTopAbsance(){
    let students = JSON.parse(localStorage.getItem('students'))
    console.log(students)
    students.sort((a,b) => (a.absence < b.absence) ? 1 : ((b.absence < a.absence) ? -1 : 0))
    let displayValue = `<table>
    <tr>
        <th>name</th>
        <th>Absance</th>
        <th>order</th>
    </tr>`
    let display = students.map((e,i)=>{
        displayValue += `<tr><td>${e.firstname} ${e.lastname}</td><td>${e.absence}</td><td>${i + 1}</td></tr>`
    })
    displayValue += `</table>`
    console.log(displayValue)
    flip.innerHTML = displayValue
}
displayTopAbsance()

let flip2 = document.querySelector('.flip-card2-back')
console.log(flip2)
function displayTopAssignment(){
    let students = JSON.parse(localStorage.getItem('students'))
    console.log(students)
    students.sort((a,b) => (a.assign < b.assign) ? 1 : ((b.assign < a.assign) ? -1 : 0))
    let displayValue = `<table>
    <tr>
        <th>name</th>
        <th>Assignment</th>
        <th>order</th>
    </tr>`
    let display = students.map((e,i)=>{
        displayValue += `<tr><td>${e.firstname} ${e.lastname}</td><td>${e.assign}</td><td>${i + 1}</td></tr>`
    })
    displayValue += `</table>`
    console.log(displayValue)
    flip2.innerHTML = displayValue
}

displayTopAssignment()



