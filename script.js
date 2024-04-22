window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var navbarPlaceholder = document.createElement('div'); // Create a placeholder div
navbarPlaceholder.style.height = navbar.offsetHeight + 'px'; // Set its height to that of the navbar
navbarPlaceholder.style.margin = window.getComputedStyle(navbar).margin;

function myFunction() {
    if (window.pageYOffset > sticky) { // change >= to >
      if (!navbar.classList.contains("sticky")) {
        navbar.classList.add("sticky");
        navbar.parentNode.insertBefore(navbarPlaceholder, navbar); // Insert placeholder
      }
    } else {
      if (navbar.classList.contains("sticky")) {
        navbar.classList.remove("sticky");
        if (navbar.parentNode.contains(navbarPlaceholder)) {
          navbar.parentNode.removeChild(navbarPlaceholder); // Remove placeholder
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Get the sidebar links and the sections
    const navLinks = document.querySelectorAll('.sidenav a');
    const sections = document.querySelectorAll('.content-container');
  
    function clearShadows() {
      navLinks.forEach(link => {
        link.style.boxShadow = 'none';
      });
    }
  
    function addShadow(link) {
      clearShadows();
      link.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.5)';
    }
  
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = sections[index].id;
        }
      });
  
      navLinks.forEach((link) => {
        if (link.getAttribute('href').substring(1) === current) {
          const color = getComputedStyle(document.querySelector(`#${current} .title h2`)).color;
          link.style.boxShadow = `0 0 15px ${color}`;
        }
      });
    });
  });
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  // Event listener for the Resources link
  document.getElementById('resourcesLink').addEventListener('click', openNav);
  

  document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('#animatedTitle span');
    letters.forEach((letter) => {
      // Random delay for the falling effect
      let randomDelay = Math.random() * 5;
      letter.style.animationDelay = `${randomDelay}s`;
  
      // Event listener to reset the animation
      letter.addEventListener('animationiteration', () => {
        // Temporary remove the animation
        letter.style.animation = 'none';
  
        // Trigger reflow
        void letter.offsetWidth;
  
        // Re-assign the animation with new random delay
        randomDelay = Math.random() * 5;
        letter.style.animation = '';
        letter.style.animationName = 'fallAndRise';
        letter.style.animationDuration = '5s';
        letter.style.animationFillMode = 'forwards';
        letter.style.animationIterationCount = 'infinite';
        letter.style.animationDelay = `${randomDelay}s`;
      });
    });
  });
  