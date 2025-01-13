function toggleDropdown(id) {
    // Hide other dropdowns if open
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown.id !== id) dropdown.style.display = 'none';
    });
    
    // Toggle the display of the clicked dropdown
    const dropdown = document.getElementById(id);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
  
  // Hide dropdowns when clicking outside the navbar
  window.onclick = function(event) {
    if (!event.target.matches('.navbar-item')) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    }
  }
  