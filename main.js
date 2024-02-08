import './style.css'

import { loadFooter,loadHeader,fadeInContent} from './script/modules.js'

    window.addEventListener('DOMContentLoaded', function() {
        // Create elements
        var heroSection = document.getElementById('heroSection');
        var heroContent = document.createElement('div');
        var heading = document.createElement('h2');
        var paragraph = document.createElement('p');
        var paragraph2 = document.createElement('p');
        var link = document.createElement('a'); // Create anchor element
    
        // Set content
        heading.textContent = 'Welcome to Sunrise';
        paragraph.textContent = 'Embrace the dawn of a new day';
        paragraph2.textContent = 'where each sunrise paints the sky with endless possibilities.';
        link.textContent = 'See more weather status'; // Set anchor text
        link.href = 'indexcopy.html'; // Set anchor href
    
        // Add classes
        heroContent.classList.add('hero-content');
    
        // Append elements to the hero section
        heroContent.appendChild(heading);
        heroContent.appendChild(paragraph);
        heroContent.appendChild(paragraph2);
        heroContent.appendChild(link); // Append link to heroContent
        heroSection.appendChild(heroContent);
    
        // Add event listener to the link
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            // Replace the URL with the desired link
            window.location.href = link.href;
        });
    });

//Fade in Effect

loadFooter();
loadHeader();
fadeInContent();