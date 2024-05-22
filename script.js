const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.querySelector(".nav__mob-menu");

const mobileMenuBtn = document.querySelectorAll("#mob-menu-btn");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuOpen.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
})

mobileMenuBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        mobileMenuBtn.forEach(item => {
            if (item !== btn) {
                item.nextElementSibling.classList.add("hidden");
                item.firstChild.childNodes[1].classList.remove("rotate");
            };
        });
        btn.firstChild.childNodes[1].classList.toggle("rotate");
        btn.nextElementSibling.classList.toggle("hidden");
    });
});

const dropBtns = document.querySelectorAll("#nav-drop-btn");


dropBtns.forEach(dropBtn => {
    dropBtn.addEventListener("click", () => {
        dropBtns.forEach(btnItem => {
            if (btnItem !== dropBtn) {
                btnItem.nextElementSibling.classList.add("hidden");
                btnItem.firstChild.childNodes[1].classList.remove("rotate");
            }
        })
       
        dropBtn.firstChild.childNodes[1].classList.toggle("rotate");
        dropBtn.nextElementSibling.classList.toggle("hidden");
    });
});