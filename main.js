//Selectors
$(document).ready(function(){

    $('.hamburger-menu').click(function(){
        $('.nav').toggleClass('menu-open');
    });

    
    $(window).scroll(function(){
        if($(document).scrollTop() > 0){
            $('.header').addClass('active');
        }
        else {
            $('.header').removeClass('active');
        }
    });
});

// Javascripts 
// let header = document.querySelector('.header');
// let hamburgerMenu = document.querySelector('.hamburger-menu');

// window.addEventListener('scroll', function() {
//     let windowPosition = window.screenY > 0;
//     header.classList.toggle('active', window.screenY > 0 );
// })


// hamburgerMenu.addEventListener('click', function() {
//     header.classList.toggle('menu-open');
// });