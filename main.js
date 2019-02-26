// smooth scroll
function smoothScroll(target, duration) {
  const navbarHeight  = parseInt(getComputedStyle(document.getElementsByTagName('nav')[0]).height) - 1;
  target = document.querySelector(target);
  let targetPosition;
  if (document.body.clientWidth > 550 && document.body.clientHeight > 550) {
    targetPosition = target.getBoundingClientRect().top - navbarHeight;
  } else {
    targetPosition = target.getBoundingClientRect().top;
  }
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
  for (let i = 0; i <= headerDOM.classList.length; i++) {
    if (headerDOM.classList[i] == 'display'){
      headerDOM.classList.remove('display');
    };
  };
  burgerCheckbox.checked = false;
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
  if(window.scrollY > 150 && document.body.clientWidth > 550 && document.body.clientHeight > 550){
    navDOM.style.opacity = .6;
  } else {
    navDOM.style.opacity = 1;
  }
});

navDOM.addEventListener('mouseenter', () => {
  navDOM.style.opacity = 1;
});

navDOM.addEventListener('mouseleave', () => {
  if(window.scrollY > 160 && document.body.clientWidth > 550 && document.body.clientHeight > 550){
    navDOM.style.opacity = .6;
  }
});

//hamburger interaction 

const burgerCheckbox = document.querySelector('.toggler');
const headerDOM = document.getElementsByTagName('header')[0];
burgerCheckbox.addEventListener('click', ()=> {
  if (burgerCheckbox.checked) {
    headerDOM.classList.add('display');
  } else {
    headerDOM.classList.remove('display');
  }
});

// project section

const tileIMGs = document.querySelectorAll('.flex-tile > .img');
const nounArr = ['flower', 'temple', 'food', 'water', 'matsuri', 'mountain'];
const tileTextHeader = document.querySelectorAll('.text--header');
const tileTextBody = document.querySelectorAll('.text--body');

for (let i = 0; i < tileIMGs.length; i++){
  document.querySelectorAll('.flex-tile > .img')[i].style.background = `url(\'https://source.unsplash.com/600x450/?japan,${nounArr[i]}\') no-repeat center center/cover`;
  tileTextHeader[i].textContent = 'Picture';
  tileTextBody[i].textContent = 'More projects are on the way! For now, please enjoy this random picture from unsplash. Feel free to reload the page to get a new one.'
};



// set contact-link height

// let siblingHeight = document.querySelector('#contact .contact-form').clientHeight.toString();
// if (window.matchMedia("(orientation: landscape)").matches && document.body.clientHeight < 550) {
//   document.querySelector('#contact .contact-links').style.height = siblingHeight+'px';
// }