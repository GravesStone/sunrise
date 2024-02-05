import './style.css'

import { loadFooter,loadHeader} from './script/modules.js'




window.addEventListener('DOMContentLoaded', function() {
    // Create elements
    var heroSection = document.getElementById('heroSection');
    var heroContent = document.createElement('div');
    var heading = document.createElement('h2');
    var paragraph = document.createElement('p');
    
    // Set content
    heading.textContent = 'Welcome to Sun Arise';
    paragraph.textContent = 'This is the hero section of our webpage.';
    
    // Add classes
    heroContent.classList.add('hero-content');
    
    // Append elements to the hero section
    heroContent.appendChild(heading);
    heroContent.appendChild(paragraph);
    heroSection.appendChild(heroContent);
  });

  loadFooter();
  loadHeader();