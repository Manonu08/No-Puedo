document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    const towerImage = document.getElementById('tower-image');
    
    if (towerImage) {
        towerImage.style.transform = `translateY(${-scrollPosition * 0.4}px)`; 
    }
});
