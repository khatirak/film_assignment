// BTS Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = [
        {
            src: 'img/img1.jpg',
            title: 'Image 1',
            text: 'This is the description for image 1. Add your BTS content here.'
        },
        {
            src: 'img/img2.jpg',
            title: 'Image 2',
            text: 'This is the description for image 2. Add your BTS content here.'
        },
        {
            src: 'img/img3.jpg',
            title: 'Image 3',
            text: 'This is the description for image 3. Add your BTS content here.'
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

