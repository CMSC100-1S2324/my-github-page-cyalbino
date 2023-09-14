document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scroll-left').addEventListener('click', function() {
        console.log("Scroll Left button clicked."); 
        var scrollingContainer = document.querySelector('.scrolling-container');
        scrollingContainer.scrollLeft -= scrollingContainer.scrollWidth; // Adjust the scroll distance as needed
    });

    document.getElementById('scroll-right').addEventListener('click', function() {
        console.log("Scroll Right button clicked."); 
        var scrollingContainer = document.querySelector('.scrolling-container');
        scrollingContainer.scrollLeft += scrollingContainer.scrollWidth; // Adjust the scroll distance as needed
    });
});
