// navbar const/lets
const hamIcon = document.getElementById('hamIcon');
let navMenu = document.querySelector('.nav-menu');


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
// end 

//space 101 active links on technology page
const spacePage = window.location.pathname;

const spaceLinks = document.querySelectorAll(".tech-row-left a").forEach(link =>{
    if(link.href.includes(`${spacePage}`)){
        link.classList.add('tech_link_active')
    }
})




// event listeners
hamIcon.addEventListener('click', toggleNav)