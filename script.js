// Slides (8 options with images)
const slides = [
  // { title: 'Citizenship By Investment', image: 'images/Citizenship-By-Investment.jpg' },
  { title: 'Citizenship By Investment', image: 'images/Citizenship-By-Investment.jpg' },
  { title: 'Residency By Investment', image: 'images/res.webp' },
  { title: 'Canada Permanent Residency', image: 'images/canada.jpg' },
  { title: 'Legal Services For Canadian Expats', image: 'images/legal.jpg' },
  { title: 'Real Estate Investment Advisory Services', image: 'images/realestate.webp' },
  { title: 'Other Services', image: 'images/services.jpg' }
];

const bgOne = document.querySelector('.bg-layer.one');
const bgTwo = document.querySelector('.bg-layer.two');
const heroTitle = document.getElementById('heroTitle');
const navLinks = document.querySelectorAll('#navList a');

let currentIndex = 0;
let showingFirst = true;
let intervalId = null;

function setActiveNav(index) {
  navLinks.forEach(a => a.classList.remove('active'));
  const target = document.querySelector(`#navList a[data-index="${index}"]`);
  if (target) target.classList.add('active');
}

function showSlide(index, immediate = false) {
  const slide = slides[index];
  if (!slide) return;

  const incoming = showingFirst ? bgTwo : bgOne;
  const outgoing = showingFirst ? bgOne : bgTwo;

  incoming.style.backgroundImage = `url('${slide.image}')`;
  incoming.classList.add('visible');
  if (immediate) {
    outgoing.classList.remove('visible');
  } else {
    setTimeout(() => outgoing.classList.remove('visible'), 20);
  }

  heroTitle.textContent = slide.title;
//   setActiveNav(index);

  showingFirst = !showingFirst;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startSlideshow() {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 3000);
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const index = parseInt(link.getAttribute('data-index'), 10);

    // If the link is just "#" → control slideshow
    if (href === "#" && !isNaN(index)) {
      e.preventDefault(); // prevent jumping to top
      currentIndex = index;
      showSlide(currentIndex, true);
      startSlideshow();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  navToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  bgOne.style.backgroundImage = `url('${slides[0].image}')`;
  bgOne.classList.add('visible');
  heroTitle.textContent = slides[0].title;
  setActiveNav(0);
  startSlideshow();
});

// Hero slides data
const heroSlides = [
  { title: 'Citizenship By Investment', image: 'images/Citizenship-By-Investment.jpg' },
  { title: 'Residency By Investment', image: 'images/res.webp' },
  { title: 'Canada Permanent Residency', image: 'images/canada.jpg' },
  { title: 'Legal Services For Canadian Expats', image: 'images/legal.jpg' },
  { title: 'Real Estate Investment Advisory Services', image: 'images/realestate.webp' },
  { title: 'Other Services', image: 'images/services.jpg' }
];

let currentSlide = 0;
const bgLayers = document.querySelectorAll('.bg-layer');

function showSlide(index) {
  // Update title
  heroTitle.textContent = heroSlides[index].title;
  // Update background images
  bgLayers.forEach((layer, i) => {
    if (i === 0) {
      layer.style.backgroundImage = `url('${heroSlides[index].image}')`;
      layer.classList.add('visible');
    } else {
      layer.classList.remove('visible');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
}

// Initialize first slide
showSlide(currentSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Reveal sections on scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.reveal-section');
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    {
      threshold: 0.15 // Trigger when 15% of the section is visible
    }
  );
  sections.forEach(section => observer.observe(section));
});
