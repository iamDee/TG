let navbar = document.querySelector('.navbar');
let header = document.querySelector('.head-2');
let menu = document.querySelector('#menu-bar');
let cart = document.querySelector('#shoping-cart');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}