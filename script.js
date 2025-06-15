const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-btn');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navBtn.classList.toggle('show');
});
