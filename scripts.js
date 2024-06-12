document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.custom-cursor');

    // Check if cursor element is found
    if (!cursor) {
        console.error("Custom cursor element not found in the DOM.");
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
