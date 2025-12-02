document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // --- ACCORDION & IMAGE SWITCHER ---
    const accordionItems = document.querySelectorAll('.accordion-item');
    const mainImage = document.getElementById('automation-main-image');

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            if (this.classList.contains('active')) return;

            accordionItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const newImageSrc = this.getAttribute('data-image');
            
            if (mainImage && newImageSrc) {
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.src = newImageSrc;
                    mainImage.onload = () => {
                        mainImage.style.opacity = '0.9';
                    };
                }, 300);
            }
        });
    });

    // --- TESTIMONIAL SLIDER ---
    const testimonials = [
        {
            quote: "“We're delighted with AREA 17's work—exceptional design, a user experience that solved business challenges, and optimized lead generation.”",
            name: "Dafna Sarnoff",
            role: "Directrice du marketing, Intersection",
            company: "AREA 17"
        },
        {
            quote: "“The new design system completely transformed our workflow. It’s elegant, intuitive, and the team adoption has been instant.”",
            name: "Sam Forde",
            role: "Merchant Support Manager, Zapier",
            company: "ZAPIER"
        },
        {
            quote: "“Gulf AI delivered beyond expectations. The ROI was visible within the first quarter and our customers love the new interface.”",
            name: "Jeff Cardoso",
            role: "VP Operations, Azazie",
            company: "AZAZIE"
        }
    ];

    let testIndex = 0;
    let testInterval;
    const AUTO_SCROLL_TIME = 5000;

    const quoteEl = document.querySelector('.quote-text');
    const containerEl = document.querySelector('#quote-display');
    const nameEl = document.querySelector('#author-name');
    const roleEl = document.querySelector('#author-role');
    const logoEl = document.querySelector('#logo-display');
    const progressEl = document.querySelector('#progress-bar');
    const prevBtn = document.querySelector('#prev-test-btn');
    const nextBtn = document.querySelector('#next-test-btn');

    // Only run if elements exist
    if (quoteEl && containerEl) {
        function updateSlide() {
            containerEl.classList.remove('active');
            progressEl.classList.remove('animate');
            progressEl.classList.add('reset');

            setTimeout(() => {
                const data = testimonials[testIndex];
                quoteEl.textContent = data.quote;
                nameEl.textContent = data.name;
                roleEl.textContent = data.role;
                logoEl.textContent = data.company;

                containerEl.classList.add('active');
                
                setTimeout(() => {
                    progressEl.classList.remove('reset');
                    progressEl.classList.add('animate');
                }, 50);
            }, 600);
        }

        function nextSlide() {
            testIndex = (testIndex + 1) % testimonials.length;
            updateSlide();
        }

        function prevSlide() {
            testIndex = (testIndex - 1 + testimonials.length) % testimonials.length;
            updateSlide();
        }

        function startAutoScroll() {
            if (testInterval) clearInterval(testInterval);
            testInterval = setInterval(nextSlide, AUTO_SCROLL_TIME);
            progressEl.classList.remove('reset');
            progressEl.classList.add('animate');
        }

        function stopAutoScroll() {
            clearInterval(testInterval);
            progressEl.classList.remove('animate');
            progressEl.classList.add('reset');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAutoScroll();
                prevSlide();
                startAutoScroll();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAutoScroll();
                nextSlide();
                startAutoScroll();
            });
        }

        // Init
        startAutoScroll();
    }
});