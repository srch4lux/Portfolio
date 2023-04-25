let buttonToggle = document.querySelector(".header__nav-toggle");
let headerNav = document.querySelector('.header__nav');

buttonToggle.addEventListener('click', function () {
  headerNav.classList.toggle('header__nav_opened');
  headerNav.classList.toggle('header__nav_closed');
});
