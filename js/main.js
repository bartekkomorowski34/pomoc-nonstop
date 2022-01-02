// mobile menu

const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-icon')
const menu = document.querySelector('.menu-mobile')
const menuListMobile = document.querySelectorAll('.hide-menu')


hamburger.addEventListener('click', () =>{
    menu.classList.add('toggle-menu')
})

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('toggle-menu')
})

menuListMobile.forEach((buttons) => {
    buttons.addEventListener('click', ()=> {
        menu.classList.remove('toggle-menu')
        console.log('click menu list')
    })
})

// AOS 
AOS.init({
    // delay: 1000,
    once: true,
    duration: 1000,
});

new Splide( '.splide', {
    pagination: false,
    perPage: 1,
    autoHeight: true,
    loop: true,
} ).mount();