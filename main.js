import './style.css'

import { loadFooter,fadeInContent ,createNavigationLinks} from './script/modules.js'




window.addEventListener('DOMContentLoaded', function() {
    // Create elements
    var heroSection = document.getElementById('heroSection');
    var heroContent = document.createElement('div');
    var heading = document.createElement('h2');
    var paragraph = document.createElement('p');
    var paragraph2 = document.createElement('p');
    var button = document.createElement('button'); // Create button element
    
    // Set content
    heading.textContent = 'Welcome to Sunrise';
    paragraph.textContent = 'Embrace the dawn of a new day';
    paragraph2.textContent = 'where each sunrise paints the sky with endless possibilities.';
    button.textContent = 'See more weather status'; // Set button text
    
    // Add classes
    heroContent.classList.add('hero-content');
    
    // Append elements to the hero section
    heroContent.appendChild(heading);
    heroContent.appendChild(paragraph);
    heroContent.appendChild(paragraph2);
    heroContent.appendChild(button); // Append button to heroContent
    heroSection.appendChild(heroContent);
    
    // Add event listener to the button
    button.addEventListener('click', function() {
        // Replace the URL with the desired link
        window.location.href = 'status.html'; // Replace 'https://example.com' with your desired URL
    });
});

window.onload = function() {
    createNavigationLinks();
    toggleMenu();
};

// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

//Fade in Effect

loadFooter();
createNavigationLinks();
fadeInContent();