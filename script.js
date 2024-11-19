const images = [
    'hero 4.jpg', 
    'hero 2.jpg', 
    'hero1.webp', 
    'hero 3.jpg'
  ];
  
  let currentImageIndex = 0; // Keep track of the current image index
  const heroSection = document.getElementById("hero"); // Select the hero section
  const intervalTime = 2000; // Time in milliseconds for each slide
  
  // Function to change the background image
  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image
    heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`; // Update the background image
    console.log(`Background changed to: ${images[currentImageIndex]}`); // Debugging
  }
  
  // Start the interval for changing images
  setInterval(changeBackgroundImage, intervalTime);


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the section ID
        const targetElement = document.getElementById(targetId);
        const offset = 100; // Adjust this value based on your navbar height

        if (targetElement) {
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

  