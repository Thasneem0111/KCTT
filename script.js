// Unified Slides data (hero)
const heroSlides = [
  { title: 'Citizenship By Investment', image: 'images/Citizenship-By-Investment.jpg' },
  { title: 'Residency By Investment', image: 'images/res.webp' },
  { title: 'Canada Permanent Residency', image: 'images/canada.jpg' },
  { title: 'Legal Services For Canadian Expats', image: 'images/legal.jpg' },
  { title: 'Real Estate Investment Advisory Services', image: 'images/realestate.webp' },
  { title: 'Other Services', image: 'images/affid1.jpg' }
];

const heroTitle = document.getElementById('heroTitle');
const navLinks = document.querySelectorAll('#navList a');
const layerA = document.querySelector('.bg-layer.one');
const layerB = document.querySelector('.bg-layer.two');
let activeLayerIsA = true;
let currentSlideIndex = 0;
let heroIntervalId = null;

function setActiveNav(i) {
  navLinks.forEach(a => a.classList.remove('active'));
  const target = document.querySelector(`#navList a[data-index="${i}"]`);
  if (target) target.classList.add('active');
}

function prepareInitialLayers() {
  if (!layerA || !layerB) return;
  
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('loading'); // Add loading state
  }
  
  // Set initial state without expensive transitions
  layerA.style.transition = 'none';
  layerA.style.backgroundImage = `url('${heroSlides[0].image}')`;
  layerA.classList.add('is-entering');
  layerB.classList.add('is-idle');
  
  heroTitle.textContent = heroSlides[0].title;
  setActiveNav(0);
  
  // Re-enable transitions after a brief delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      layerA.style.transition = '';
      if (hero) {
        hero.classList.remove('loading');
      }
      // Ensure smooth scrolling is enabled after initialization
      document.documentElement.style.scrollBehavior = 'auto';
    }, 100);
  });
}

function transitionToSlide(nextIndex) {
  if (!layerA || !layerB) return;
  const nextData = heroSlides[nextIndex];
  const incoming = activeLayerIsA ? layerB : layerA;
  const outgoing = activeLayerIsA ? layerA : layerB;

  // Reset classes
  [incoming, outgoing].forEach(el => el.classList.remove('is-entering','is-leaving','is-idle'));

  // Prepare incoming off-screen right
  incoming.style.backgroundImage = `url('${nextData.image}')`;
  incoming.classList.add('is-entering');
  // Mark outgoing to slide left & fade
  outgoing.classList.add('is-leaving');

  // After animation completes, park outgoing to idle right again
  setTimeout(() => {
    outgoing.classList.remove('is-leaving');
    outgoing.classList.add('is-idle');
  }, 900); // slightly longer than CSS transition

  heroTitle.textContent = nextData.title;
  setActiveNav(nextIndex);
  activeLayerIsA = !activeLayerIsA;
}

function nextHeroSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
  transitionToSlide(currentSlideIndex);
}

function startHeroAuto() {
  if (heroIntervalId) clearInterval(heroIntervalId);
  heroIntervalId = setInterval(nextHeroSlide, 2500);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const idxAttr = link.getAttribute('data-index');
    const idx = parseInt(idxAttr, 10);
    const href = link.getAttribute('href');
    // Only hijack if link is meant to control hero (e.g., Home) AND doesn't point to another page
    const isInternalSlide = !isNaN(idx) && idx >= 0 && idx < heroSlides.length && (href === '' || href === '#' || href === window.location.pathname || href === null);
    if (isInternalSlide) {
      e.preventDefault();
      currentSlideIndex = idx;
      transitionToSlide(currentSlideIndex);
      startHeroAuto();
    } else {
      // Let normal navigation occur; also close mobile menu if open
      if (window.innerWidth <= 768) {
        const mainNav = document.querySelector('.main-nav');
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!navToggle || !mainNav) return;

  function lockScroll(lock) {
    if (lock) {
      document.body.dataset.prevOverflow = document.body.style.overflow || '';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = document.body.dataset.prevOverflow || '';
    }
  }

  function closeMenu() {
    if (mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      lockScroll(false);
    }
  }

  navToggle.addEventListener('click', function() {
    const willOpen = !mainNav.classList.contains('active');
    mainNav.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    lockScroll(willOpen && window.innerWidth <= 768);
  });

  // Close menu when any nav link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeMenu();
    });
  });

  // Outside click
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // On resize: if switching to desktop, ensure menu visible (handled by CSS) and scroll unlocked
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      lockScroll(false);
      navToggle.setAttribute('aria-expanded', 'false');
    } else if (!mainNav.classList.contains('active')) {
      lockScroll(false);
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Initialize hero after DOM ready
window.addEventListener('DOMContentLoaded', () => {
  if (heroSlides.length && layerA && layerB && heroTitle) {
    // Temporarily prevent scroll interference during hero initialization
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    prepareInitialLayers();
    
    // Re-enable scrolling after hero is ready
    setTimeout(() => {
      document.body.style.overflow = originalOverflow || '';
      startHeroAuto();
    }, 200);
  }
});

// Reveal sections on scroll - optimized for mobile
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.reveal-section');
  
  // Use different thresholds for mobile vs desktop
  const isMobile = window.innerWidth <= 768;
  const threshold = isMobile ? 0.05 : 0.1; // Lower threshold for mobile - reveals sooner
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animations without blocking scroll
          requestAnimationFrame(() => {
            entry.target.classList.add('visible');
          });
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: threshold,
      rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -40px 0px'
    }
  );
  sections.forEach(section => observer.observe(section));
});

// Global Fixed Top Bar + Header handling
(function() {
  function initFixedHeaders() {
    const topBar = document.querySelector('.top-bar');
    const header = document.querySelector('.main-header');
    if(!topBar || !header) return;

    function applyOffsets() {
      const topBarHeight = topBar.getBoundingClientRect().height || 0;
      header.style.top = topBarHeight + 'px';
      const total = topBarHeight + header.getBoundingClientRect().height;
      document.body.classList.add('has-fixed-headers');
      document.body.style.setProperty('--fixed-headers-height', total + 'px');
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(applyOffsets, 120);
    });

    window.addEventListener('scroll', () => {
      if(window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });

    const obs = new MutationObserver(applyOffsets);
    obs.observe(topBar, {childList:true, subtree:true});
    obs.observe(header, {childList:true, subtree:true});

    applyOffsets();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFixedHeaders);
  } else {
    initFixedHeaders();
  }
})();
