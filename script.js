// Slides (8 options with images)
const slides = [
//   { title: 'Citizenship By Investment', image: 'images/Citizenship-By-Investment.jpg' },
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
    e.preventDefault();
    const index = parseInt(link.getAttribute('data-index'), 10);
    if (!isNaN(index)) {
      currentIndex = index;
      showSlide(currentIndex, true);
      startSlideshow();
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  bgOne.style.backgroundImage = `url('${slides[0].image}')`;
  bgOne.classList.add('visible');
  heroTitle.textContent = slides[0].title;
  setActiveNav(0);
  startSlideshow();
});
