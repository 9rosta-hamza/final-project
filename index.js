let buttonnavbar = document.querySelector('.fa-solid')
let signup = document.querySelector('#button1')
let xmark = document.querySelector('.fa-xmark')
let v = 0

buttonnavbar.addEventListener('click', function navbar() {
    let navbar = document.querySelector('#dropdown-menu-parent')
    let main = document.querySelector('main')
    let footer = document.querySelector('footer')
    if (v === 0) {
        main.style.filter = 'brightness(0.5)'
        footer.style.filter = 'brightness(0.5)'
        v = 1
    } else {
        main.style.filter = 'none'
        footer.style.filter = 'none'
        v = 0
    }
    navbar.classList.toggle('visible');
})
signup.addEventListener('click', function signup() {
    let menu = document.querySelector('#sectionsignup')
    let main = document.querySelector('main')
    let navbar = document.querySelector('nav')
    let footer = document.querySelector('footer')
    menu.style.visibility = 'visible'
    main.style.filter = 'brightness(0.5)'
    footer.style.filter = 'brightness(0.5)'
    navbar.style.filter = 'brightness(0.5)'
})
xmark.addEventListener('click', function xmark() {
    let menu = document.querySelector('#sectionsignup')
    let main = document.querySelector('main')
    let footer = document.querySelector('footer')
    let navbar = document.querySelector('nav')
    menu.style.visibility = 'hidden'
    navbar.style.filter = 'none'
    main.style.filter = 'none'
    footer.style.filter = 'none'
})










