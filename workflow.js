const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("portfolioMenu");
const overlay = document.getElementById("menuOverlay");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {

    menu.classList.add("open");
    overlay.classList.add("show");

}

function closePortfolioMenu() {

    menu.classList.remove("open");
    overlay.classList.remove("show");

}

menuButton.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closePortfolioMenu);

overlay.addEventListener("click", closePortfolioMenu);

document.addEventListener("keydown", function(e){

    if(e.key==="Escape"){

        closePortfolioMenu();

    }

});