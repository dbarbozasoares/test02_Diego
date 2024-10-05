    document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded

    // cars images array
    const bmw_list = [
        '/public/images/bmw/bmw1.jpg',
        '/public/images/bmw/bmw2.jpg',
        '/public/images/bmw/bmw3.jpg',
        '/public/images/bmw/bmw4.jpg',
        '/public/images/bmw/bmw5.jpg'
    ];

    const audi_list = [
        '/public/images/audi/audi1.jpg',
        '/public/images/audi/audi2.jpg',
        '/public/images/audi/audi3.jpg',
        '/public/images/audi/audi4.jpg',
        '/public/images/audi/audi5.jpg'
    ];

    const bmw = document.getElementById('bmw_cars'); // bmw "button"
    const audi = document.getElementById('audi_cars'); // audi "button"
    const images_container = document.getElementById('cars_area'); // area where cars will be displayed
    const home_button = document.getElementById('home_button');

    function loadImages(imageList, folder) {
        images_container.innerHTML = ''; // Clear existing images
        console.log(imageList);
        
        imageList.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;  // Use the full image source directly
            images_container.appendChild(img);
        });
    }

    bmw.addEventListener('click', function(){
        loadImages(bmw_list, 'bmw');
    });
    audi.addEventListener('click', function(){
        loadImages(audi_list, 'audi');
    });

    home_button.addEventListener('click', function(){
        window.location.href = '/';
    });

    });