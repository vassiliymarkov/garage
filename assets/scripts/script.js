"use strict"

document.addEventListener('DOMContentLoaded', () => {
    let mobileMenu = document.querySelector('.header__menu');
    let burger = document.querySelector('.header__burger');
    let burgerBarOne = document.querySelector('#header__burger-bar-1');
    let burgerBarTwo = document.querySelector('#header__burger-bar-2');
    let burgerBarThree = document.querySelector('#header__burger-bar-3');
    let body = document.querySelector('body');
    let menuLink = document.querySelectorAll('.header__menu-link');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('header__menu--active');
        burgerBarOne.classList.toggle('clicked');
        burgerBarTwo.classList.toggle('clicked');
        burgerBarThree.classList.toggle('clicked');
        body.classList.toggle('menu-open');
    });

    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('header__menu--active');
            burgerBarOne.classList.remove('clicked');
            burgerBarTwo.classList.remove('clicked');
            burgerBarThree.classList.remove('clicked');
            body.classList.remove('menu-open');
        });
    });
});
``