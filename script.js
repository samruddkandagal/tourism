// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal functionality for gallery images
const galleryImages = document.querySelectorAll('.gallery-grid img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');
const closeModal = document.createElement('span');

// Set up the modal
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';
modal.style.visibility = 'hidden';
modal.style.opacity = '0';
modal.style.transition = 'visibility 0s, opacity 0.3s ease';

modalImage.style.maxWidth = '90%';
modalImage.style.maxHeight = '90%';
closeModal.textContent = '×';
closeModal.style.position = 'absolute';
closeModal.style.top = '20px';
closeModal.style.right = '30px';
closeModal.style.fontSize = '30px';
closeModal.style.color = '#fff';
closeModal.style.cursor = 'pointer';

modal.appendChild(modalImage);
modal.appendChild(closeModal);
document.body.appendChild(modal);

// Show modal on image click
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.padding = '10px 15px';
backToTop.style.fontSize = '20px';
backToTop.style.backgroundColor = '#ff5722';
backToTop.style.color = '#fff';
backToTop.style.border = 'none';
backToTop.style.borderRadius = '5px';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';

document.body.appendChild(backToTop);

// Show/hide Back to Top button and scroll to top
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Select all anchor links with hash references
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default jump
  
      // Smoothly scroll to the target section
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  function changeText() {
    // Change the text of the paragraph with id "message"
    document.getElementById("message").innerHTML = "Text has been changed!";

    // Show an alert message
    alert("You clicked the button!");
}
// script.js

// Function to change the background color of the page
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#f0f8ff"; // Light blue color
    alert("Background color has been changed!");
}
