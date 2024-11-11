document.addEventListener('DOMContentLoaded', () =>{
    mobileNav = document.querySelector('.navbar__mobile-menu-items');
    hamburger = document.querySelector('.navbar__mobile-hamburger');

    hamburger.addEventListener('click', () =>{
        mobileNav.classList.toggle('active-show');
    })

})

window.addEventListener('scroll', () =>{
    const nav = document.querySelector('.navbar');
    window.scrollY > 0 ? nav.classList.add('active-scroll') : nav.classList.remove('active-scroll');
})