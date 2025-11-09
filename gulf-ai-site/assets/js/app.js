// assets/js/app.js
// Footer year

function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", updateYear);

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = track ? Array.from(track.children) : [];
  const nextButton = document.querySelector(".carousel-arrow.right");
  const prevButton = document.querySelector(".carousel-arrow.left");
  const tabs = document.querySelectorAll(".tab-btn");
  const caption = document.getElementById("industry-caption");
  const captions = [
    "The foresight to secure every transaction and predict market shifts.",
    "The care to triage, schedule, and support every patient—instantly.",
    "The intelligence to prevent downtime and optimize every line.",
    "The clarity to hire better, faster, and at scale.",
    "The power to personalize every journey and drive conversion.",
  ];
  let currentIndex = 0;

  const moveTo = (i) => {
    if (!track || !slides[i]) return;
    const w = slides[0].getBoundingClientRect().width;
    track.style.transform = "translateX(" + -w * i + "px)";
    currentIndex = i;
    updateUI();
  };

  const updateUI = () => {
    if (prevButton) prevButton.style.display = currentIndex === 0 ? "none" : "flex";
    if (nextButton) nextButton.style.display = currentIndex === slides.length - 1 ? "none" : "flex";
    tabs.forEach((t) => t.classList.remove("active"));
    const active = document.querySelector(`.tab-btn[data-slide-index="${currentIndex}"]`);
    if (active) active.classList.add("active");
    if (caption && captions[currentIndex]) caption.textContent = captions[currentIndex];
  };

  if (prevButton)
    prevButton.addEventListener("click", () => currentIndex > 0 && moveTo(currentIndex - 1));
  if (nextButton)
    nextButton.addEventListener("click", () => currentIndex < slides.length - 1 && moveTo(currentIndex + 1));
  tabs.forEach((tab) =>
    tab.addEventListener("click", (e) => {
      const { slideIndex } = e.currentTarget.dataset;
      if (typeof slideIndex === "string") {
        moveTo(parseInt(slideIndex, 10));
      }
    })
  );
  window.addEventListener("resize", () => moveTo(currentIndex));
  updateUI();

  const customerFeatureTriggers = document.querySelectorAll(
    ".customer-card-text .feature-trigger"
  );
  const customerFeatureImage = document.getElementById("customer-feature-image");
  if (customerFeatureTriggers.length > 0 && customerFeatureImage) {
    customerFeatureTriggers.forEach((trigger) => {
      trigger.addEventListener("mouseover", () => {
        customerFeatureTriggers.forEach((t) => t.classList.remove("active"));
        trigger.classList.add("active");
        const newImageSrc = trigger.getAttribute("data-image");
        if (newImageSrc && customerFeatureImage.src !== newImageSrc) {
          customerFeatureImage.style.opacity = "0";
          setTimeout(() => {
            customerFeatureImage.src = newImageSrc;
            customerFeatureImage.style.opacity = "1";
          }, 200);
        }
      });
    });
  }

  const agentTriggers = document.querySelectorAll(".agent-card-features .feature-trigger");
  const agentImg = document.getElementById("agent-feature-image");
  if (agentTriggers.length > 0 && agentImg) {
    agentTriggers.forEach((tr) => {
      tr.addEventListener("mouseover", () => {
        agentTriggers.forEach((t) => t.classList.remove("active"));
        tr.classList.add("active");
        const src = tr.getAttribute("data-image");
        if (src && agentImg.src !== src) {
          agentImg.style.opacity = "0";
          setTimeout(() => {
            agentImg.src = src;
            agentImg.style.opacity = "1";
          }, 200);
        }
      });
    });
  }

  const leaderTriggers = document.querySelectorAll(".leader-card-text .feature-trigger");
  const leaderImg = document.getElementById("leader-feature-image");
  if (leaderTriggers.length > 0 && leaderImg) {
    leaderTriggers.forEach((tr) => {
      tr.addEventListener("mouseover", () => {
        leaderTriggers.forEach((t) => t.classList.remove("active"));
        tr.classList.add("active");
        const src = tr.getAttribute("data-image");
        if (src && leaderImg.src !== src) {
          leaderImg.style.opacity = "0";
          setTimeout(() => {
            leaderImg.src = src;
            leaderImg.style.opacity = "1";
          }, 200);
        }
      });
    });
  }

  const featureItems = document.querySelectorAll(".feature-item");
  const featureImage = document.getElementById("feature-image");
  const activeDot = document.querySelector(".active-dot");
  const positionDot = (activeEl) => {
    if (!activeDot || !activeEl) return;
    const itemTop = activeEl.offsetTop;
    const itemHeight = activeEl.clientHeight;
    activeDot.style.top = `${itemTop + itemHeight / 2 - 5}px`;
  };

  if (featureItems.length > 0 && featureImage && activeDot) {
    const firstActive = document.querySelector(".feature-item.active") || featureItems[0];
    positionDot(firstActive);
    featureItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
        featureItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        positionDot(item);
        const newImageSrc = item.getAttribute("data-image");
        if (newImageSrc && featureImage.src !== newImageSrc) {
          featureImage.style.opacity = "0";
          setTimeout(() => {
            featureImage.src = newImageSrc;
            featureImage.style.opacity = "1";
          }, 200);
        }
      });
    });
    window.addEventListener("resize", () => {
      const currentActive = document.querySelector(".feature-item.active");
      if (currentActive) positionDot(currentActive);
    });
  }

  try {
    console.assert(
      document.querySelectorAll(".tab-btn").length === document.querySelectorAll(".carousel-slide").length,
      "Tabs and slides count should match"
    );
  } catch (e) {
    console.warn("Self-test warning:", e);
  }
});
