let buttonnavbar = document.querySelector('.fa-solid')
let v = 0

buttonnavbar.addEventListener('click', function navbar() {
    let navbar = document.querySelector('#dropdown-menu-parent')
    // if (v === 0) {
    //     navbar.style.display = 'block'
    //     v = 1
    // } else {
    //     navbar.style.display = 'none'
    //     v = 0
    // }
    navbar.classList.toggle('visible');
})











