document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    const towerImage = document.getElementById('tower-image');
    const footer = document.getElementById('links-footer');
    
    if (towerImage) {
        // Aumentamos la velocidad de movimiento a * 1 (misma velocidad que el scroll)
        towerImage.style.transform = `translateY(${-scrollPosition * 1}px)`; 
    }

    if (footer) {
        const appearanceStart = window.innerHeight * 0.5; 
        const maxVisibilityScroll = window.innerHeight * 1.5;

        let footerProgress = (scrollPosition - appearanceStart) / (maxVisibilityScroll - appearanceStart);
        
        if (footerProgress < 0) {
            footerProgress = 0;
        }
        if (footerProgress > 1) {
            footerProgress = 1;
        }

        footer.style.opacity = footerProgress;
    }
});
