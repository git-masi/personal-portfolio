// smooth scroll
function smoothScroll(target, duration) {
  const navbarHeight  = parseInt(getComputedStyle(document.getElementsByTagName('nav')[0]).height) - 1;
  target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top - navbarHeight;
  let startPosition = window.pageYOffset || window.scrollY;
  let startTime = null;
  
  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

const homeBtn = document.querySelector('a[href="#home"]');
const aboutBtn = document.querySelector('a[href="#about"]');
const projectsBtn = document.querySelector('a[href="#projects"]');
const contactBtn = document.querySelector('a[href="#contact"]');

const smoothTime = 1000;

homeBtn.addEventListener('click', () => smoothScroll('#home', smoothTime));
aboutBtn.addEventListener('click', () => smoothScroll('#about', smoothTime));
projectsBtn.addEventListener('click', () => smoothScroll('#projects', smoothTime));
contactBtn.addEventListener('click', () => smoothScroll('#contact', smoothTime));


// navbar fade effect
const navDOM = document.getElementsByClassName('navbar')[0];
window.addEventListener('scroll',() => {
  if(window.scrollY > 150){
    navDOM.style.opacity = .6;
  } else {
    navDOM.style.opacity = 1;
  }
});

navDOM.addEventListener('mouseenter', () => {
  navDOM.style.opacity = 1;
});

navDOM.addEventListener('mouseleave', () => {
  if(window.scrollY > 160){
    navDOM.style.opacity = .6;
  }
});