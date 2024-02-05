
export function loadHeader() {
  const header = document.getElementById('header');
  header.innerHTML = `
  <div class="container">
      <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
</div>
  `;
}



// Function to load dynamic footer content
export function loadFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} wdd330-Final Project Mark Estimada</p>
  `;
}

