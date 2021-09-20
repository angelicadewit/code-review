"use strict";

var menus = document.querySelectorAll(".menuwrapper-menu");
var leftMenu = document.querySelector(".menuwrapper-submenu-left");
var rightMenu = document.querySelector(".menuwrapper-submenu-right");
var leftMenuWrapper = document.querySelector(".menuwrapper-left");
var rightMenuWrapper = document.querySelector(".menuwrapper-right");
var menuText = document.querySelector(".menuwrapper-menu h2");

var remove = function remove() {
    menus.forEach(function (menu) {
        menu.classList.remove('is-open');
        menu.setAttribute('aria-expanded', 'false');
        menu.nextElementSibling.classList.remove('is-open');
    });
};

function toggleSubmenu() {
    if (this.nextElementSibling.classList.contains('is-open')) {
        this.classList.remove('is-open');
        this.setAttribute('aria-expanded', 'false');
        this.nextElementSibling.classList.remove('is-open');
    } else {
        remove();
        this.classList.add('is-open');
        this.setAttribute('aria-expanded', 'true');
        this.nextElementSibling.classList.add('is-open');
    }
}
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    if (event.code === "ArrowLeft") {
        remove();
        leftMenu.classList.add('is-open');
        leftMenuWrapper.classList.add('is-open');
    }

    if (event.code === "ArrowRight") {
        remove();
        rightMenu.classList.add('is-open');
        rightMenuWrapper.classList.add('is-open');
    }

    if (event.code === "Escape") {
        remove();
    }

    event.preventDefault();
}, true);

menus.forEach(function (menu) {
    return menu.addEventListener('click', toggleSubmenu);
});
//# sourceMappingURL=main.js.map
