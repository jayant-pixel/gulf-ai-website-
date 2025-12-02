if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
}

function toggleExpertiseItem(element) {
    if (!element || element.classList.contains('active')) return;

    const section = element.closest('.expertise-section');
    if (!section) return;

    const allItems = section.querySelectorAll('.accordion-item');
    const mainImage = section.querySelector('#expertise-main-image');
    const imageFrame = section.querySelector('.expertise-image-frame');

    allItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    if (mainImage) {
        const newImageSrc = element.getAttribute('data-image');
        mainImage.style.opacity = '0';
        if (imageFrame) {
            imageFrame.classList.add('loading');
        }

        setTimeout(() => {
            mainImage.src = newImageSrc;
            mainImage.onload = () => {
                mainImage.style.opacity = '0.9';
                if (imageFrame) {
                    imageFrame.classList.remove('loading');
                }
            };
        }, 300);
    }
}

window.addEventListener('load', () => {
    const frame = document.querySelector('.expertise-image-frame');
    if (!frame) return;
    const img = frame.querySelector('img');
    if (img && img.complete) {
        frame.classList.remove('loading');
    } else if (img) {
        img.addEventListener('load', () => frame.classList.remove('loading'), { once: true });
    }
});

const testimonialData = [
    {
        quote: '“We\'re delighted with AREA 17\'s work—exceptional design, a user experience that solved business challenges, and optimized lead generation.”',
        name: 'Dafna Sarnoff',
        role: 'Directrice du marketing, Intersection',
        company: 'INTER'
    },
    {
        quote: '“The new design system completely transformed our workflow. It’s elegant, intuitive, and the team adoption has been instant.”',
        name: 'Sam Forde',
        role: 'Merchant Support Manager, Zapier',
        company: 'ZAPIER'
    },
    {
        quote: '“Gulf AI delivered beyond expectations. The ROI was visible within the first quarter and our customers love the new interface.”',
        name: 'Jeff Cardoso',
        role: 'VP Operations, Azazie',
        company: 'AZAZIE'
    }
];

let testimonialIndex = 0;
let testimonialInterval;
const TESTIMONIAL_AUTO_SCROLL = 5000;

function initTestimonialCarousel() {
    const quoteEl = document.querySelector('#quote-display .quote-text');
    const containerEl = document.querySelector('#quote-display');
    const nameEl = document.querySelector('#author-name');
    const roleEl = document.querySelector('#author-role');
    const logoEl = document.querySelector('#logo-display');
    const progressEl = document.querySelector('#progress-bar');

    if (!quoteEl || !containerEl || !nameEl || !roleEl || !logoEl || !progressEl) {
        return;
    }

    const applySlide = () => {
        const data = testimonialData[testimonialIndex];
        quoteEl.textContent = data.quote;
        nameEl.textContent = data.name;
        roleEl.textContent = data.role;
        logoEl.textContent = data.company;
    };

    const updateSlide = () => {
        containerEl.classList.remove('active');
        progressEl.classList.remove('animate');
        progressEl.classList.add('reset');

        setTimeout(() => {
            applySlide();
            containerEl.classList.add('active');
            requestAnimationFrame(() => {
                progressEl.classList.remove('reset');
                progressEl.classList.add('animate');
            });
        }, 400);
    };

    const nextSlide = () => {
        testimonialIndex = (testimonialIndex + 1) % testimonialData.length;
        updateSlide();
    };

    const prevSlide = () => {
        testimonialIndex = (testimonialIndex - 1 + testimonialData.length) % testimonialData.length;
        updateSlide();
    };

    const startAutoScroll = () => {
        if (testimonialInterval) {
            clearInterval(testimonialInterval);
        }
        testimonialInterval = setInterval(nextSlide, TESTIMONIAL_AUTO_SCROLL);
        progressEl.classList.remove('reset');
        progressEl.classList.add('animate');
    };

    const stopAutoScroll = () => {
        if (testimonialInterval) {
            clearInterval(testimonialInterval);
        }
        progressEl.classList.remove('animate');
        progressEl.classList.add('reset');
    };

    window.manualNext = () => {
        stopAutoScroll();
        nextSlide();
        startAutoScroll();
    };

    window.manualPrev = () => {
        stopAutoScroll();
        prevSlide();
        startAutoScroll();
    };

    applySlide();
    containerEl.classList.add('active');
    startAutoScroll();
}

document.addEventListener('DOMContentLoaded', initTestimonialCarousel);
