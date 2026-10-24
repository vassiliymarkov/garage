"use strict"

document.addEventListener('DOMContentLoaded', () => {
    let mobileMenu = document.querySelector('.header__menu');
    let burger = document.querySelector('.header__burger');
    let burgerBarOne = document.querySelector('#header__burger-bar-1');
    let burgerBarTwo = document.querySelector('#header__burger-bar-2');
    let burgerBarThree = document.querySelector('#header__burger-bar-3');
    let body = document.querySelector('body');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('header__menu--active');
        burgerBarOne.classList.toggle('clicked');
        burgerBarTwo.classList.toggle('clicked');
        burgerBarThree.classList.toggle('clicked');
        body.classList.toggle('menu-open');
    });

    console.log(burgerBarOne);
});

