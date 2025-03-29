function toggleMenu() {
  const nav = document.querySelector('.mobile-navigation');
  const hamburger = document.querySelector('.hamburger');
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
}