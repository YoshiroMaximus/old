document.addEventListener('DOMContentLoaded', function () {
    const clickableElements = document.querySelectorAll('.clickable');

    // Add hover effect to clickable elements
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            element.classList.add('hover');
        });
        element.addEventListener('mouseleave', function () {
            element.classList.remove('hover');
        });
    });

    // Add click effect to clickable elements
    clickableElements.forEach(element => {
        element.addEventListener('mousedown', function () {
            element.classList.add('click');
        });
        element.addEventListener('mouseup', function () {
            element.classList.remove('click');
        });
    });

    // Performance optimization suggestions:
    // 1. Cache DOM queries to minimize re-querying.
    // 2. Minimize classList manipulations for better performance.
    // 3. Consolidate event listeners where possible to reduce overhead.

    // Optional: Add further optimizations based on specific performance profiling.
});
