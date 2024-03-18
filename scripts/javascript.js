
document.addEventListener("DOMContentLoaded", function() {
    // Select the logo image
    const logo = document.querySelector('img[src="../images/logo.png"]');
    
    // Set initial opacity to 0
    logo.style.opacity = "0";
  
    // Transition the opacity to 1 over 1 second
    logo.style.transition = "opacity 1s";
  
    // Trigger the transition by setting opacity to 1 after a short delay
    setTimeout(function() {
      logo.style.opacity = "1";
    }, 100); // Adjust the delay as needed
  });
  