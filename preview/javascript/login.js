let users = []
let username = document.getElementById("username")
let pas = document.getElementById("pas")
let btn = document.getElementById("btn")
let logout = document.getElementById("logout")

btn.addEventListener("click", () => {
    users = localStorage.getItem("users")
    users = JSON.parse(users)

    users.forEach((item) => {
        if (item.username === username.value  && item.password === pas.value) {
            alert("Login successfully!")
            localStorage.setItem("user", true)
            window.location.href = "../index.html"
            
        }else {
            alert("Login Unsuccessfully!")
            localStorage.setItem("user", false)
        }
    })
})
logout.addEventListener("click" , ()=>{
    localStorage.removeItem("users")
})