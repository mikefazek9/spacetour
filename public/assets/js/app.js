// navbar const/lets
const hamIcon = document.getElementById('hamIcon');
let navMenu = document.querySelector('.nav-menu');

// slider const/lets


// toggle function for NAVBAR
const toggleNav = () => {
    navMenu.classList.toggle('nav-menu');
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
    }
}


// ACTIVE STATE LINKS ON CREW
const activePage = window.location.pathname;



const crewLinks = document.querySelectorAll('li a').forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');    
    }
})





// event listeners
hamIcon.addEventListener('click', toggleNav)