document.addEventListener('DOMContentLoaded', function () {
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  var navigationMenu = document.querySelector('.navigace');

  hamburgerMenu.addEventListener('click', function () {
      navigationMenu.classList.toggle('visible');
  });
});