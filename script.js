document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    const maxScroll = window.innerHeight * 1.5; 
    
    let opacity = 1 - (scrollPosition / maxScroll);
    
    if (opacity < 0) {
        opacity = 0;
    }
    if (opacity > 1) {
        opacity = 1;
    }
    
    const towerImage = document.getElementById('tower-image');
    if (towerImage) {
        towerImage.style.opacity = opacity;
    }

    const footer = document.getElementById('links-footer');
    if (footer) {
        const startPoint = maxScroll * 0.7;
        const endPoint = maxScroll;
        
        let footerProgress = (scrollPosition - startPoint) / (endPoint - startPoint);
        
        if (footerProgress < 0) {
            footerProgress = 0;
        }
        if (footerProgress > 1) {
            footerProgress = 1;
        }

        footer.style.opacity = footerProgress;
    }
});