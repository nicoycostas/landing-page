/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarList = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createMenuItems(){
    for(section of sections){
        const newListItem = document.createElement('li');
        sectionLink = section.getAttribute('id');
        NameofSection = section.getAttribute('data-nav');
        newListItem.innerHTML = `<a href="#${sectionLink}" class="navbar__link">${NameofSection}</a>`;
       
        navbarList.appendChild(newListItem);
    }
}




/**
 * End Helper Functions
 * Begin Main FunctionsC
 * 
*/

// build the nav
createMenuItems();

// Add class 'active' to section when near top of viewport

// when on click check if is active
// if it is active do something
// else 

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


