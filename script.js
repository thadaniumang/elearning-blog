// mouseover, mouseout, click, submit, keyup
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.navbar .navlinks a');
const logo = document.querySelector('#logo h1');

logo.addEventListener('click', e => {
    if (window.location.pathname.includes('pages')) {
        window.location.href = '../index.html';
    } else {
        window.location.href = './index.html';
    }
})

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
})

navLinks.forEach(link => {
    if(!link.parentElement.classList.contains('selected')) {
        link.addEventListener('mouseover', e => {
            link.style.borderBottom = '1px solid #353535';
        })
        link.addEventListener('mouseout', e => {
            link.style.borderBottom = '0';
        })
    }
})