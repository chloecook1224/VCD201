document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");
    
    // Example: Add hover effect to navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
});

