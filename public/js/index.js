document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded

const but = document.getElementById('cars_page'); // gets reference for button

but.addEventListener('click', function() { // add an event to direct to cars page
    window.location.href = '/cars'; // Redirect to the /cars route
});

});


