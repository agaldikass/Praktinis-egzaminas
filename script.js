// Tabs
var container = document.querySelectorAll('.tab');
var buttons = document.querySelectorAll('button');

function showTab(event, id) {
  for (var x of container) {
    x.style.display = 'none';
    x.style.opacity = '0';
  }
  document.getElementById(id).style.display = 'block';

  setTimeout(function () {
    document.getElementById(id).style.opacity = '1';
  });

  // buttons style
  for (var x of buttons) {
    x.classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

// Slide menu
const burger = document.getElementById('burger');
const sideNav = document.querySelector('.side-nav');
const links = document.querySelectorAll('.link');

burger.addEventListener('click', function () {
  this.classList.toggle('rotate');
  sideNav.classList.toggle('translate');
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    burger.classList.remove('rotate');
    sideNav.classList.remove('translate');
  }
});
