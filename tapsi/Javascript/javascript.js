const ham = document.getElementById("hamber");
ham.addEventListener("click", () => {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.classList.toggle("active");
})