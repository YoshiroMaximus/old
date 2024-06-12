// Initialize Sentry
if (typeof Sentry !== 'undefined') {
    Sentry.init({
        dsn: 'https://0511d1eb23a5b7d982a0ad221c754fa7@sentry.io/123456' // Replace with your actual Sentry DSN if different
    });
} else {
    console.error('Sentry script not loaded.');
}

// Custom cursor script
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');
    
    if (!cursor) {
        console.error('Custom cursor element not found in the DOM.');
        return;
    }

    // Function to move the custom cursor
    function moveCursor(e) {
        cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`; // Center the cursor
    }

    // Add event listeners to track mouse movements
    document.addEventListener('mousemove', moveCursor);

    // Add hover effect to clickable elements
    const clickableElements = document.querySelectorAll('a, button, input, .clickable');
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
