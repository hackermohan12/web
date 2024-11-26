// JavaScript for Navigation Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  }
  
  // JavaScript for Carousel Functionality
  const images = [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400/ff0000/ffffff?text=Event+2",
    "https://via.placeholder.com/800x400/00ff00/ffffff?text=Event+3",
  ];
  
  let currentImageIndex = 0;
  
  function showImage(index) {
    const carouselImage = document.getElementById("carousel-image");
    carouselImage.src = images[index];
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }
  
  function previousImage() {
    currentImageIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }
  
  // Automatically cycle through images every 5 seconds
  setInterval(nextImage, 5000);
  
  // Highlight the active menu item on scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").includes(currentSection)) {
        item.classList.add("active");
      }
    });
  });
  