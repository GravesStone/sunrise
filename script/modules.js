
export function loadHeader() {
  const header = document.getElementById('header');
  header.innerHTML = `
  
  <div class="menu-toggle" id="menu-toggle" onclick="toggleMenu()">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul class="menu" id="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  `;
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
 
