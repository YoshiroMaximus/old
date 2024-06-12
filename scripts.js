// Initialize Sentry
Sentry.init({
  dsn: 'https://0511d1eb23a5b7d982a0ad221c754fa7@o4507417449857024.ingest.us.sentry.io/4507417455034368', // Replace with your actual Sentry DSN if different
});

// Custom cursor script
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');
    
    if (!cursor) {
        console.error('Custom cursor element not found in the DOM.');
        return;
    }

    // Add event listeners to track mouse movements
    document.addEventListener('mousemove', function (e) {
        moveCursor(e);
    });

    // Function to move the custom cursor
    function moveCursor(e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    // Add hover effect to clickable elements
    const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            cursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', function () {
            cursor.classList.remove('hover');
        });
    });

    // Add click effect to clickable elements
    clickableElements.forEach(element => {
        element.addEventListener('mousedown', function () {
            cursor.classList.add('click');
        });
        element.addEventListener('mouseup', function () {
            cursor.classList.remove('click');
        });
    });
});
