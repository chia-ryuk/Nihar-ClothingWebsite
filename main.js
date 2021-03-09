const menu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');
const upButton = document.querySelector('.button-up');
const modal = document.querySelector('.modal');
const submitButton = document.querySelector('#submit-button');
const closeButton = document.querySelector('.close');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('client-email');
const phone = document.getElementById('client-number');
const form = document.getElementById('form');
const spinnerWrapper = document.querySelector('.spinner-wrapper');

//Webpage loader
window.addEventListener('load', () => {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

//Menu toggle and animations
menu.addEventListener('click', () => {
    navList.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navLinkAppear 500ms ease forwards ${index / 5 + 0.3}s`;
        }
    });
});

//Scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        upButton.style.display = "block";
    } else{
        upButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Modal functionality
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(fname.value === '' || fname.value == 'null' || lname.value === '' || lname.value == 'null' ||email.value === '' || email.value == 'null' || phone.value === '' || phone.value == 'null'){
        modal.style.display = 'none';
    }
    else{
        modal.style.display = 'block';
    }    
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    document.querySelector('form').reset();
});

