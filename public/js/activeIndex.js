function activeMenuItem() {
    let current = document.location.pathname.split("/");
    let items = document.getElementsByClassName("menu__item");

    items[0].classList.add("active")
}

document.addEventListener("DOMContentLoaded", activeMenuItem);