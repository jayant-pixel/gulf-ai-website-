// ===== DOM Ready =====
(() => {
  if (window.__gulfMainInitialized) {
    return;
  }
  window.__gulfMainInitialized = true;

  const init = () => {
    const year = document.getElementById('year');
    if (year) {
      year.textContent = new Date().getFullYear();
    }

    // ===== Module: Carousel =====
    const track = document.querySelector('.carousel-track');
    const slides = track ? Array.from(track.children) : [];
    const nextButton = document.querySelector('.carousel-arrow.right');
    const prevButton = document.querySelector('.carousel-arrow.left');
    const tabs = document.querySelectorAll('.tab-btn');
    const caption = document.getElementById('industry-caption');
    const captions = [
      'The foresight to secure every transaction and predict market shifts.',
      'The care to triage, schedule, and support every patient\u2014instantly.',
      'The intelligence to prevent downtime and optimize every line.',
      'The clarity to hire better, faster, and at scale.',
      'The power to personalize every journey and drive conversion.',
    ];
    let currentIndex = 0;

    const updateUI = () => {
      if (prevButton) {
        prevButton.style.display = currentIndex === 0 ? 'none' : 'flex';
      }
      if (nextButton) {
        nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'flex';
      }
      tabs.forEach((tab) => tab.classList.remove('active'));
      const active = document.querySelector(`.tab-btn[data-slide-index="${currentIndex}"]`);
      if (active) {
        active.classList.add('active');
      }
      if (caption && captions[currentIndex]) {
        caption.textContent = captions[currentIndex];
      }
    };

    const moveTo = (index) => {
      if (!track || slides.length === 0 || !slides[index]) {
        return;
      }
      const width = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(${-width * index}px)`;
      currentIndex = index;
      updateUI();
    };

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          moveTo(currentIndex - 1);
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
          moveTo(currentIndex + 1);
        }
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => {
        const slideIndex = parseInt(event.currentTarget.dataset.slideIndex, 10);
        if (!Number.isNaN(slideIndex)) {
          moveTo(slideIndex);
        }
      });
    });

    window.addEventListener('resize', () => moveTo(currentIndex));
    updateUI();

    // ===== Module: Feature Image Swaps =====
    const bindHoverSwap = (selector, imageId) => {
      const triggers = document.querySelectorAll(`${selector} .feature-trigger`);
      const targetImage = document.getElementById(imageId);
      if (triggers.length === 0 || !targetImage) {
        return;
      }
      triggers.forEach((trigger) => {
        trigger.addEventListener('mouseover', () => {
          triggers.forEach((t) => t.classList.remove('active'));
          trigger.classList.add('active');
          const newImageSrc = trigger.getAttribute('data-image');
          if (newImageSrc && targetImage.src !== newImageSrc) {
            targetImage.style.opacity = 0;
            setTimeout(() => {
              targetImage.src = newImageSrc;
              targetImage.style.opacity = 1;
            }, 200);
          }
        });
      });
    };

    bindHoverSwap('.customer-card-text', 'customer-feature-image');
    bindHoverSwap('.agent-card-features', 'agent-feature-image');
    bindHoverSwap('.leader-card-text', 'leader-feature-image');

    const wireNavigationTargets = (selector) => {
      const nodes = document.querySelectorAll(selector);
      if (!nodes.length) {
        return;
      }
      nodes.forEach((node) => {
        const target = node.dataset ? node.dataset.target : null;
        if (!target) {
          return;
        }
        if (!node.hasAttribute('tabindex')) {
          node.setAttribute('tabindex', '0');
          node.setAttribute('role', 'button');
        }
        const navigate = () => {
          window.location.href = target;
        };
        node.addEventListener('click', navigate);
        node.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            navigate();
          }
        });
      });
    };

    wireNavigationTargets('.feature-trigger');

    // ===== Module: Features List =====
    const featureItems = document.querySelectorAll('.feature-item');
    const featureImage = document.getElementById('feature-image');
    const activeDot = document.querySelector('.active-dot');

    const positionDot = (activeElement) => {
      if (!activeDot || !activeElement) {
        return;
      }
      const itemTop = activeElement.offsetTop;
      const itemHeight = activeElement.clientHeight;
      activeDot.style.top = `${itemTop + itemHeight / 2 - 5}px`;
    };

    if (featureItems.length > 0 && featureImage && activeDot) {
      const firstActive = document.querySelector('.feature-item.active') || featureItems[0];
      positionDot(firstActive);
      featureItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
          featureItems.forEach((el) => el.classList.remove('active'));
          item.classList.add('active');
          positionDot(item);
          const newImageSrc = item.getAttribute('data-image');
          if (newImageSrc && featureImage.src !== newImageSrc) {
            featureImage.style.opacity = 0;
            setTimeout(() => {
              featureImage.src = newImageSrc;
              featureImage.style.opacity = 1;
            }, 200);
          }
        });
      });
      wireNavigationTargets('.feature-item');
      window.addEventListener('resize', () => {
        const activeItem = document.querySelector('.feature-item.active');
        positionDot(activeItem);
      });
    }

    // ===== Module: Self-Tests =====
    try {
      console.assert(
        document.querySelectorAll('.tab-btn').length === document.querySelectorAll('.carousel-slide').length,
        'Tabs and slides count should match',
      );
      console.assert(document.getElementById('customer-feature-image'), 'Customer feature image should exist');
      console.assert(document.getElementById('agent-feature-image'), 'Agent feature image should exist');
      console.assert(document.getElementById('leader-feature-image'), 'Leader feature image should exist');
    } catch (error) {
      console.warn('Self-test warning:', error);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();

