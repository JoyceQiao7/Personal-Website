document.addEventListener("DOMContentLoaded", function () {
    const images = [
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img5.jpg',
    ];
    
    let currentIndex = 0;
    
    function changeBackground() {
        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; 
    }

    document.getElementById("changeBg").addEventListener("click", changeBackground);
});

