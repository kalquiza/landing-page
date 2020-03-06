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
function getSections() {
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
    const nav = document.querySelector("#navbar__list");
    // for each section
    for (const section of sections) {
        // create a new <li> element with innerHTML data-nav
        const newSection = document.createElement('li');
        newSection.textContent = section.getAttribute("data-nav");
        newSection.classList.add('menu__link');
        newSection.id = section.id.concat("-menulink");
        // add the the <li> element as the last child element of navbar__list
        nav.appendChild(newSection);
    }
}

// Add class 'active' to section when near top of viewport
function setActive() {
    // determine the height of the viewport and navbar
    const viewportHeight = document.documentElement.clientHeight;
    const navbarHeight = document.querySelector(".navbar__menu").getBoundingClientRect().height;

    for (const section of sections) {
        sectionContainerTop = section.getBoundingClientRect().top;
        sectionContainerHeight = section.getBoundingClientRect().height;
        console.log(viewportHeight);

        // Determine active viewport
        if (
            sectionContainerTop + sectionContainerHeight > navbarHeight + (viewportHeight-navbarHeight)/2
            && sectionContainerTop < navbarHeight + (viewportHeight-navbarHeight)/2)
        {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Get sections
getSections();
// Build menu 
buildNav();
// Determine initial active section
setActive();

// Add event listeners

// Scroll to section on link click
for (const section of sections) {
    const menulink = document.querySelector(`#${section.id}-menulink`);

    menulink.addEventListener('click', function scrollToSection() {
        // get section id
        const menulinkId = menulink.id;
        const sectionId = menulinkId.slice(0, menulinkId.indexOf('-'));

        // determine vertical scroll position
        const yPos = document.querySelector(`#${sectionId}`).getBoundingClientRect().top;
        const yOffset = window.pageYOffset;
        window.scrollTo(0, pageYOffset + yPos - document.querySelector(".navbar__menu").getBoundingClientRect().height);
    })
}

// Set sections as active
window.addEventListener('scroll', function() {
    setActive();
})