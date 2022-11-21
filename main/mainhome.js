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