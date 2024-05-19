$(document).ready(()=>{
var swiper = new Swiper(".homeslider", {
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
}); 

  var swiper = new Swiper(".itemslider", {
   slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".btn-itm-next",
      prevEl: ".btn-itm-prev",
    },
  });
  
  var swiper = new Swiper(".Portfolioslider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".btn-itm-next",
      prevEl: ".btn-itm-prev",
    },
  });


let signup = document.getElementById("signup")
let user;
if (localStorage.getItem("user") === "true") {
    user = true
} else {
    user = false
}

if (user) {
    let users = []
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    users.forEach((item) => {
    if (item.username !== "") {
      signup.innerText = "welcom" + " " + item.username
      } else {
      signup.innerText = "Sign Up"
      signup.setAttribute("href", "pages/register.html")
    }
  })
}

window.onscroll= function(){
  let scrol = document.documentElement.scrollTop;
  let Home = document.querySelector("#Home")
  let Product = document.querySelector("#Product")
  let Services = document.querySelector("#Services")
  let Portfolio = document.querySelector("#Portfolio")
  let Team = document.querySelector("#Team")
  let Blog = document.querySelector("#Blog")
  let Contact = document.querySelector("#Contact")
  
  if( scrol < 726 ){
    Home.style.color= "#fe7865"
    Product.style.color= "#737777"
    Services.style.color= "#737777"
    Portfolio.style.color= "#737777"
    Team.style.color= "#737777"
    Blog.style.color= "#737777"
    Contact.style.color= "#737777"
  }else if( scrol < 1597 ){
    Home.style.color= "#737777"
    Product.style.color= "#fe7865"
    Services.style.color= "#737777"
    Portfolio.style.color= "#737777"
    Team.style.color= "#737777"
    Blog.style.color= "#737777"
    Contact.style.color= "#737777"
  }
  else if( scrol < 2666){
    Home.style.color= "#737777"
    Product.style.color= "#737777"
    Services.style.color= "#fe7865"
    Portfolio.style.color= "#737777"
    Team.style.color= "#737777"
    Blog.style.color= "#737777"
    Contact.style.color= "#737777"
  }
  else if( scrol < 3878 ){
    Home.style.color= "#737777"
    Product.style.color= "#737777"
    Services.style.color= "#737777"
    Portfolio.style.color= "#fe7865"
    Team.style.color= "#737777"
    Blog.style.color= "#737777"
    Contact.style.color= "#737777"
  }
  else if( scrol < 5369 ){
    Home.style.color= "#737777"
    Product.style.color= "#737777"
    Services.style.color= "#737777"
    Portfolio.style.color= "#737777"
    Team.style.color= "#fe7865"
    Blog.style.color= "#737777"
    Contact.style.color= "#737777"
  }
  else if( scrol < 6270 ){
    Home.style.color= "#737777"
    Product.style.color= "#737777"
    Services.style.color= "#737777"
    Portfolio.style.color= "#737777"
    Team.style.color= "#737777"
    Blog.style.color= "#fe7865"
    Contact.style.color= "#737777"
  }
  else{
    Home.style.color= "#737777"
    Product.style.color= "#737777"
    Services.style.color= "#737777"
    Portfolio.style.color= "#737777"
    Team.style.color= "#737777"
    Blog.style.color= "#737777"
    Contact.style.color= "#fe7865"
  }

}
})

let add = true;
function setCartItem(id) {
  cartLen = localStorage.getItem("cart");
  cartItems = JSON.parse(localStorage.getItem("cart"));
  console.log(cartItems);
  if (cartLen) {
    let i = 0;
    cartItems.forEach(item => {
      if (item.id === id) {
        cartItems[i].count++;
        let newCart = JSON.stringify(cartItems);
        localStorage.setItem("cart", newCart);
        add = false;
      }
      i++;
    });
    if (add) {
      cartItems.push({
        id: id,
        count: 1
      })
      let newCart = JSON.stringify(cartItems);
      localStorage.setItem("cart", newCart);
    }
  } else {
    localStorage.setItem("cart", JSON.stringify([{
      id: id,
      count: 1
    }]))
  }
  
}




var shop = document.getElementById("shop")

shop.addEventListener("click",()=>{
  window.location = "page/Cartshop.html"
})

var numberShop = document.getElementById("number-shop")
var signup = document.getElementById("signup")
var lc = JSON.parse(localStorage.getItem("cart"))
window.addEventListener("load",()=>{
  if( signup.innerText !== "Sing Up" ){
    if( lc == null ){
      numberShop.textContent = 0
    }
    else{
      numberShop.textContent = JSON.stringify(lc.length)
    }
  }
})
