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

// determine if the element is in the viewport
function inView(element) {
    console.log(element.getBoundingClientRect());
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
    let active = null;
        // determine the bottom of the viewport
    let viewportBottom = document.documentElement.clientHeight;
    for (const section of sections) {
        let landingContainer = section.firstElementChild;
        landingContainerTop = landingContainer.getBoundingClientRect().top;
        landingContainerBottom = landingContainer.getBoundingClientRect().bottom;

        // Determine active viewport
        if (
            // container is fully in the viewport
            (landingContainerTop > -1 && landingContainerBottom < viewportBottom) ||
            // container is clipped at the top of the viewport
            (landingContainerTop < 0 && landingContainerBottom < viewportBottom) ||
            // container is clipped at the bottom of the view port
            (landingContainerTop > -1 && landingContainerBottom > viewportBottom && landingContainerTop < viewportBottom)) {
            active = section;
        }
    }
    if (active != null) active.classList.add("your-active-class");
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

getSections(sections);
for (const section of sections) console.log(section.id);
buildNav();
setActive();

// Build menu 

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
        window.scrollTo(0, pageYOffset + yPos);
    })
}
// Set sections as active