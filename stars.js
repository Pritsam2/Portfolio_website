document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars-container');
    const numStars = 150; // Adjust the number of stars as needed

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        const duration = 20 + Math.random() * 20;
        star.style.animationDuration = `${duration}s`;
        
        const delay = Math.random() * 10;
        star.style.animationDelay = `${-delay}s`;
        
        starsContainer.appendChild(star);
    }
}); 