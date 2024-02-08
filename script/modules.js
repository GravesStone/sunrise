
// navigation.js
export function createNavigationLinks() {
  const navList = document.querySelector('.nav-list');
  
  // Array of page names and their corresponding URLs
  const pages = [
      { name: 'Home', url: 'index.html' },
      { name: 'About', url: 'about.html' },
      { name: 'Services', url: 'services.html' },
      { name: 'Contact', url: 'contact.html' }
  ];

  // Loop through the pages array
  pages.forEach(page => {
      // Create a list item element
      const listItem = document.createElement('li');
      listItem.classList.add('nav-item');
      
      // Create an anchor element
      const link = document.createElement('a');
      link.href = page.url;
      link.textContent = page.name;
      
      // Append the anchor element to the list item
      listItem.appendChild(link);
      
      // Append the list item to the navigation list
      navList.appendChild(listItem);
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
 
