const nav= document.querySelector('.l-header');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 450) {
    nav.classList.add('navActive');
   
  } else {
    nav.classList.remove('navActive');
   
}
}