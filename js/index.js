const humburger = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('#menu');

function navToggle() {
  humburger.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
}

humburger.addEventListener('click', navToggle);
