/* eslint-disable semi */
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
const sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Begin Main Functions
 *
*/

// Build the navigation bar
const buildNav = () => {
  // select the navbar__list
  const nav = document.querySelector('#navbar__list');
  // for each section
  for (const section of sections) {
    // build a new <li> element with appropriate innerHTML and styled class
    const newSection = document.createElement('li');
    newSection.textContent = section.getAttribute('data-nav');
    newSection.classList.add('menu__link');

    newSection.id = `${section.id}-menulink`;
    // add the the <li> element as the last child element of navbar__list
    nav.appendChild(newSection);
  }
}

// Add class 'active' to section when near top of viewport
const setActive = () => {
  // get the height of the viewport and navbar
  const viewportHeight = document.documentElement.clientHeight;
  const navbarHeight = document.querySelector('.navbar__menu').getBoundingClientRect().height;

  for (const section of sections) {
    // get the top boundary and height of the section
    const sectionContainerTop = section.getBoundingClientRect().top;
    const sectionContainerHeight = section.getBoundingClientRect().height;

    // get the corresponding nav menu link
    const navMenuLink = document.querySelector(`#${section.id}-menulink`);

    // determine active viewport and set or remove the active class
    if (
      sectionContainerTop + sectionContainerHeight > navbarHeight + (viewportHeight - navbarHeight) / 2 &&
            sectionContainerTop < navbarHeight + (viewportHeight - navbarHeight) / 2
    ) {
      section.classList.add('your-active-class');
      navMenuLink.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
      navMenuLink.classList.remove('your-active-class');
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNav();
// Determine initial active section
setActive();

/**
 * Add Event Listeners
 *
*/
// Scroll to section on menu link click
for (const section of sections) {
  const menulink = document.querySelector(`#${section.id}-menulink`);
  const navbarHeight = document.querySelector('.navbar__menu').getBoundingClientRect().height;

  menulink.addEventListener('click', function scrollToSection () {
    // get section id
    const menulinkId = menulink.id;
    const sectionId = menulinkId.slice(0, menulinkId.indexOf('-'));

    // determine vertical scroll position
    const yPos = document.querySelector(`#${sectionId}`).getBoundingClientRect().top;
    const yOffset = window.pageYOffset;
    window.scrollTo(0, yOffset + yPos - navbarHeight);
  })
}

// Set active section on scroll
window.addEventListener('scroll', function () {
  setActive();
})
