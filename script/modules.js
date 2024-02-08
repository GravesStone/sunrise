

export function loadHeader(links) {
  const header = document.getElementById('header');
  
  if (!Array.isArray(links)) {
      console.error("Error: 'links' parameter must be an array.");
      return;
  }

  header.innerHTML = `
      <nav id="main-nav">
          <ul>
              ${links.map(link => `<li><a href="${link.url}">${link.text}</a></li>`).join('')}
          </ul>
          <div class="hamburger-menu">&#9776;</div> <!-- Hamburger menu icon -->
      </nav>
  `;

  const nav = document.getElementById('main-nav');
  const hamburgerMenu = nav.querySelector('.hamburger-menu');
  const navLinks = nav.querySelector('ul');

  // Toggle visibility of navigation links when hamburger menu icon is clicked
  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });

  const allNavLinks = document.querySelectorAll('#main-nav ul li a');
  allNavLinks.forEach(navLink => {
      navLink.addEventListener('click', function(event) {
          allNavLinks.forEach(link => link.classList.remove('active'));
          event.target.classList.add('active');
          event.preventDefault();
      });
  });
}

// Function to load dynamic footer content
export function loadFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} wdd330-Final Project Mark Estimada</p>

      `;
}

export function fadeInContent() {
  var content = document.getElementById('heroSection');
  
  // Add the fade-in class
  content.classList.add("fade-in");
}

// Export fadeInContent function to global scope
window.fadeInContent = fadeInContent;

// Call fadeInContent function when the page loads
window.onload = function() {
  fadeInContent();
};
 
