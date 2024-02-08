




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
 
