// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById("get-in-touch-button").onclick = function() {
    window.location.href = "mailto:tazimakhan40@gmail.com"; // Apna email address yahan likhein
};
