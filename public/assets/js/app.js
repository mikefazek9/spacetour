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

//nav active page
const navPage = window.location.pathname;
const navLinks =document.querySelectorAll('.nav-items a').forEach(link =>{
    if(link.href.includes(`${navPage}`)){
        link.classList.add('nav-items-active');
    }
})


//Planet active page

const planetPage = window.location.pathname;
const planetLinks = document.querySelectorAll('.des-link-cc a').forEach(link =>{
    if(link.href.includes(`${planetPage}`)){
        link.classList.add('dest-planet-links-active');
    }
})

// ACTIVE STATE LINKS ON CREW
const activePage = window.location.pathname;
const crewLinks = document.querySelectorAll('li a').forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('crew-active');    
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