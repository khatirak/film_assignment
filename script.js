// BTS Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = [
        {
            src: 'img/BTS1.png',
            title: 'Shopping for the ingredients',
            text: 'Us selecting which milk we like best. Usually people like coconut, almond, or oat as they tend to complement the matcha better and make it creamier.'
        },
        {
            src: 'img/BTS2.png',
            title: 'Prepping the scene',
            text: 'Having the ingredients laid out clearly for the viewer to see exactly what\'s going on.'
        },
        {
            src: 'img/BTS3.png',
            title: 'Solo shots of ingredients',
            text: 'We like Jenki matcha because the quality is known to be excellent from London.'
        }
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('carouselImage');
    const textElement = document.getElementById('carouselText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Only initialize if we're on the BTS page
    if (imageElement && textElement && prevBtn && nextBtn) {
        function updateCarousel() {
            const current = carouselImages[currentIndex];
            imageElement.src = current.src;
            imageElement.alt = current.title;
            textElement.innerHTML = `
                <h2>${current.title}</h2>
                <p>${current.text}</p>
            `;
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            updateCarousel();
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
            updateCarousel();
        }

        // Handle image load errors (for placeholder images)
        imageElement.addEventListener('error', function() {
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.backgroundColor = '#e0e0e0';
            this.style.color = '#999';
            this.style.fontSize = '1.2rem';
            if (!this.textContent) {
                this.textContent = carouselImages[currentIndex].title;
            }
        });

        prevBtn.addEventListener('click', showPrev);
        nextBtn.addEventListener('click', showNext);

        // Initialize carousel
        updateCarousel();
    }
});

