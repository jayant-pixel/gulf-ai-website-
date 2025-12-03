document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize Lucide Icons ---
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // --- STRATEGIC SOLUTIONS ANIMATION (Features Grid) ---
    const featureSection = document.getElementById('featureSection');
    if (featureSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(featureSection);
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
        if (navMenu && menuToggle) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });

    // --- Mobile Dropdown Toggle ---
    const dropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = trigger.closest('.nav-item.dropdown');
            if (parent) {
                parent.classList.toggle('active');
            }
        });
    });

    // --- ACCORDION & IMAGE SWITCHER (Automation Section) ---
    const accordionItems = document.querySelectorAll('.accordion-item');
    const mainImage = document.getElementById('automation-main-image');

    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            item.addEventListener('click', function () {
                if (this.classList.contains('active')) return;

                // Remove active class from all items
                accordionItems.forEach(i => i.classList.remove('active'));
                // Add active class to clicked item
                this.classList.add('active');

                // Update Image
                const newImageSrc = this.getAttribute('data-image');

                if (mainImage && newImageSrc) {
                    // Fade out
                    mainImage.style.opacity = '0';
                    setTimeout(() => {
                        // Change source
                        mainImage.src = newImageSrc;
                        // Fade in after load
                        mainImage.onload = () => {
                            mainImage.style.opacity = '1';
                        };
                        // Fallback
                        setTimeout(() => {
                            mainImage.style.opacity = '1';
                        }, 50);
                    }, 300);
                }
            });
        });
    }

    // --- NEW: SOLUTIONS CAROUSEL LOGIC ---
    const carousel = document.getElementById('carousel');
    // We use distinct variable names to avoid conflict with Testimonial buttons below
    const carouselPrevBtn = document.getElementById('prevBtn');
    const carouselNextBtn = document.getElementById('nextBtn');

    if (carousel && carouselPrevBtn && carouselNextBtn) {
        // Calculate scroll amount: Card Width (from CSS) + Gap
        // CSS: Mobile ~360px + 24px gap = 384px
        // CSS: Desktop (>=1200px) ~400px + 24px gap = 424px
        const getScrollAmount = () => {
            return window.innerWidth >= 1200 ? 424 : 384;
        };

        const updateCarouselButtons = () => {
            // Check if we can scroll left
            if (carousel.scrollLeft <= 10) {
                carouselPrevBtn.style.opacity = "0.3";
                carouselPrevBtn.style.pointerEvents = "none";
            } else {
                carouselPrevBtn.style.opacity = "1";
                carouselPrevBtn.style.pointerEvents = "auto";
            }

            // Check if we can scroll right
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
            if ((maxScrollLeft - carousel.scrollLeft) <= 10) {
                carouselNextBtn.style.opacity = "0.3";
                carouselNextBtn.style.pointerEvents = "none";
            } else {
                carouselNextBtn.style.opacity = "1";
                carouselNextBtn.style.pointerEvents = "auto";
            }
        };

        carouselNextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        carouselPrevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        // Listen for scroll and resize to update button visibility
        carousel.addEventListener('scroll', updateCarouselButtons);
        window.addEventListener('resize', updateCarouselButtons);

        // Initial check
        updateCarouselButtons();
    }

    // --- TESTIMONIAL SLIDER ---
    const testimonials = [{
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

    // These specific IDs are for the testimonial section
    const testPrevBtn = document.querySelector('#prev-test-btn');
    const testNextBtn = document.querySelector('#next-test-btn');

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
            if (progressEl) {
                progressEl.classList.remove('reset');
                progressEl.classList.add('animate');
            }
        }

        function stopAutoScroll() {
            clearInterval(testInterval);
            if (progressEl) {
                progressEl.classList.remove('animate');
                progressEl.classList.add('reset');
            }
        }

        if (testPrevBtn) {
            testPrevBtn.addEventListener('click', () => {
                stopAutoScroll();
                prevSlide();
                startAutoScroll();
            });
        }

        if (testNextBtn) {
            testNextBtn.addEventListener('click', () => {
                stopAutoScroll();
                nextSlide();
                startAutoScroll();
            });
        }

        // Init
        startAutoScroll();
    }
});