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
let sections = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getSections(sections) {
    const sectionString = "section"
    let sectionId = sectionString;
    let elem = null;

    let i = 1;
    do {
        const elemId = sectionId.concat(i);
        elem = document.getElementById(elemId);
        if (elem != null) sections.push(elem);
        i = i + 1;
    } while (elem != null)
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    // select the navbar__list
    const nav = document.querySelector('#navbar__list');
    // for each section
    for (const section of sections) {
        // create a new <li> element with innerHTML data-nav
        const newSection = document.createElement('li');
        newSection.textContent = section.id;
        newSection.classList.add('menu__link');
        // add the the <li> element as the last child element of navbar__list
        nav.appendChild(newSection);
    }
}

// Add class 'active' to section when near top of viewport
function setActive() {
    // determine the top of the viewport
    // find which section is within or closest to the top of the viewport

}

// Scroll to anchor ID using scrollTo event
function scrollTo() {
    // scroll to anchor id on click
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

getSections(sections);
for (const section of sections) console.log(section.id);
buildNav();

// Build menu 

// Scroll to section on link click

// Set sections as active


