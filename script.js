document.addEventListener("DOMContentLoaded", function () {
    const heroTitle = document.getElementById("hero-title");
    const navLinks = document.querySelectorAll("#nav-links ul li a");
    const navWrapper = document.getElementById("nav-links");
    const clickHint = document.querySelector(".click-hint");

    const positions = [
        { x: -260, y: 10 }, // Home
        { x: -185, y: 10 }, // Research
        { x: -90,  y: 10 }, // Design Process
        { x: 50,  y: 10 },  // Style Guide
        { x: 170,  y: 10 }  // Analysis
    ];

    function positionNavLinks() {
        const rect = heroTitle.getBoundingClientRect();
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        const centerX = rect.left + rect.width / 2 + scrollX;
        const bottomY = rect.top + rect.height + scrollY;

        navLinks.forEach((link, index) => {
            const pos = positions[index];
            link.style.position = "absolute";
            link.style.left = `${centerX + pos.x}px`;
            link.style.top = `${bottomY + pos.y}px`;
        });
    }

    function positionClickHint() {
        const rect = heroTitle.getBoundingClientRect();
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        const titleCenterY = rect.top + rect.height / 2 + scrollY;
        const titleRightX = rect.right + scrollX;

        const spacingX = 20; // distance from right edge of hero title

        clickHint.style.position = "absolute";
        clickHint.style.left = `${titleRightX + spacingX}px`;
        clickHint.style.top = `${titleCenterY}px`;
        clickHint.style.transform = "translateY(-50%)";
    }

    // Toggle nav and position nav links when clicking the title
    heroTitle.addEventListener("click", () => {
        navWrapper.classList.toggle("active");
        if (navWrapper.classList.contains("active")) {
            positionNavLinks();
        }
    });

    // Always position the click hint on load
    positionClickHint();

    // Reposition on resize or scroll
    window.addEventListener("resize", () => {
        if (navWrapper.classList.contains("active")) {
            positionNavLinks();
        }
        positionClickHint();
    });

    window.addEventListener("scroll", () => {
        if (navWrapper.classList.contains("active")) {
            positionNavLinks();
        }
        positionClickHint();
    });
});
