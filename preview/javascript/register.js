let users = []
let stringUsers = []
let user = {}

let username = document.querySelector("#username")
let pas = document.querySelector("#pas")
let btnSignUp = document.querySelector("#btnSignUp")



btnSignUp.addEventListener("click", signup)

function signup(){
    if( username.value && pas.value !== ""){
        user = {
            "username": username.value,
            "password": pas.value
        }
        users.push(user)
        saveLocalStorage()
        window.location = "../page/login.html"
    }
    else{
        alert("لطفا فیلد های مورد نظر را کامل کنید")
    }
}

    
function saveLocalStorage(){
    stringUsers = JSON.stringify(users)
    localStorage.setItem("users", stringUsers)
}