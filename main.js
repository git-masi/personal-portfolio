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

const tileTextHeader = document.querySelectorAll('.text--header');
const tileTextBody = document.querySelectorAll('.text--body');
const urlBtn = document.querySelectorAll('.text--btn__link');
const gitHubBtn = document.querySelectorAll('.text--btn__github');

const myProjects = [
  {
    'img': './assets/my-project-pictures/bitcoin-data-visualizer.PNG',
    'title': 'Bitcoin Data Visualizer',
    'description': 'See historical bitcoin price data graphically displayed and use investment tools to calculate return on investment.',
    'url': 'https://git-masi.github.io/bitcoin-data-visualizer/#/',
    'GitHub': 'https://github.com/git-masi/bitcoin-data-visualizer'
  },
  {
    'img': './assets/my-project-pictures/react-colors.PNG',
    'title': 'React Colors - Palette Creator',
    'description': 'Creat custom color palettes for your next project! Palettes are saved in local storage for future use.',
    'url': 'https://sharp-yonath-69298a.netlify.com/',
    'GitHub': 'https://github.com/git-masi/react-color-app'
  },
  {
    'img': './assets/my-project-pictures/react-dad-jokes.PNG',
    'title': 'React Dad Jokes',
    'description': 'Get dad jokes from the wonderful icanhazdadjoke.com! Vote on jokes you like and the list will sort itself.',
    'url': 'https://git-masi.github.io/react-dad-jokes/',
    'GitHub': 'https://github.com/git-masi/react-dad-jokes'
  },
  {
    'img': './assets/my-project-pictures/hero-of-time.PNG',
    'title': 'Timeboxing - Hero of Time',
    'description': 'Want to be more focused and productive? Then let this app help you with timeboxing!',
    'url': 'https://git-masi.github.io/timebox-hero-of-time/',
    'GitHub': 'https://github.com/git-masi/timebox-hero-of-time'
  },
  {
    'img': './assets/my-project-pictures/the-pig-game.PNG',
    'title': 'The Pig Game',
    'description': 'A one-on-one game of luck. Rack up your score until you reach 100. But don\'t roll a 1!',
    'url': 'https://git-masi.github.io/pig-game/',
    'GitHub': 'https://github.com/git-masi/pig-game'
  },
  {
    'img': './assets/my-project-pictures/palindrome-fun.PNG',
    'title': 'Palindrome Fun',
    'description': 'Do you like palindromes? This short yet engaging app answers the question: "just how many palindromes are there?"',
    'url': 'https://git-masi.github.io/palindrome-fun/',
    'GitHub': 'https://github.com/git-masi/palindrome-fun'
  },
]

for (let i = 0; i < myProjects.length; i++){
  document.querySelectorAll('.flex-tile > .img')[i].style.background = `url(${myProjects[i].img}) no-repeat top center/cover`;
  tileTextHeader[i].textContent = myProjects[i].title;
  tileTextBody[i].textContent = myProjects[i].description;
  urlBtn[i].setAttribute('href', myProjects[i].url);
  gitHubBtn[i].setAttribute('href', myProjects[i].GitHub);
}