// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

// Main UI interactions once DOM is ready (after partials)
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = track ? Array.from(track.children) : [];
  const nextButton = document.querySelector('.carousel-arrow.right');
  const prevButton = document.querySelector('.carousel-arrow.left');
  const tabs = document.querySelectorAll('.tab-btn');
  const caption = document.getElementById('industry-caption');
  const captions = [
    'The foresight to secure every transaction and predict market shifts.',
    'The care to triage, schedule, and support every patient—instantly.',
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
    if (!track || !slides[index]) return;
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

  const customerFeatureTriggers = document.querySelectorAll('.customer-card-text .feature-trigger');
  const customerFeatureImage = document.getElementById('customer-feature-image');
  if (customerFeatureTriggers.length > 0 && customerFeatureImage) {
    customerFeatureTriggers.forEach((trigger) => {
      trigger.addEventListener('mouseover', () => {
        customerFeatureTriggers.forEach((t) => t.classList.remove('active'));
        trigger.classList.add('active');
        const newImageSrc = trigger.getAttribute('data-image');
        if (newImageSrc && customerFeatureImage.src !== newImageSrc) {
          customerFeatureImage.style.opacity = 0;
          setTimeout(() => {
            customerFeatureImage.src = newImageSrc;
            customerFeatureImage.style.opacity = 1;
          }, 200);
        }
      });
    });
  }

  const agentTriggers = document.querySelectorAll('.agent-card-features .feature-trigger');
  const agentImg = document.getElementById('agent-feature-image');
  if (agentTriggers.length > 0 && agentImg) {
    agentTriggers.forEach((trigger) => {
      trigger.addEventListener('mouseover', () => {
        agentTriggers.forEach((t) => t.classList.remove('active'));
        trigger.classList.add('active');
        const src = trigger.getAttribute('data-image');
        if (src && agentImg.src !== src) {
          agentImg.style.opacity = 0;
          setTimeout(() => {
            agentImg.src = src;
            agentImg.style.opacity = 1;
          }, 200);
        }
      });
    });
  }

  const leaderTriggers = document.querySelectorAll('.leader-card-text .feature-trigger');
  const leaderImg = document.getElementById('leader-feature-image');
  if (leaderTriggers.length > 0 && leaderImg) {
    leaderTriggers.forEach((trigger) => {
      trigger.addEventListener('mouseover', () => {
        leaderTriggers.forEach((t) => t.classList.remove('active'));
        trigger.classList.add('active');
        const src = trigger.getAttribute('data-image');
        if (src && leaderImg.src !== src) {
          leaderImg.style.opacity = 0;
          setTimeout(() => {
            leaderImg.src = src;
            leaderImg.style.opacity = 1;
          }, 200);
        }
      });
    });
  }

  const featureItems = document.querySelectorAll('.feature-item');
  const featureImage = document.getElementById('feature-image');
  const activeDot = document.querySelector('.active-dot');
  const positionDot = (activeElement) => {
    if (!activeDot || !activeElement) return;
    const itemTop = activeElement.offsetTop;
    const itemHeight = activeElement.clientHeight;
    activeDot.style.top = `${itemTop + itemHeight / 2 - 5}px`;
  };

  if (featureItems.length > 0 && featureImage && activeDot) {
    const firstActive = document.querySelector('.feature-item.active') || featureItems[0];
    positionDot(firstActive);
    featureItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        featureItems.forEach((i) => i.classList.remove('active'));
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
    window.addEventListener('resize', () => {
      const activeItem = document.querySelector('.feature-item.active');
      positionDot(activeItem);
    });
  }

  try {
    console.assert(
      document.querySelectorAll('.tab-btn').length === document.querySelectorAll('.carousel-slide').length,
      'Tabs and slides count should match',
    );
  } catch (error) {
    console.warn('Self-test warning:', error);
  }
});
