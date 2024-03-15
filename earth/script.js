// Get the dropdown button and content
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

// Add click event listener to the dropdown button
dropdownButton.addEventListener('click', function() {
  // Toggle the display of the dropdown content
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
