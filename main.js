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
const urlBtn = document.querySelectorAll('.text--btn__link');
const gitHubBtn = document.querySelectorAll('.text--btn__github');
const tile3 = document.querySelector('.tile3');
const tile5 = document.querySelector('.tile5');
const tile7 = document.querySelector('.tile7');

for (let i = 0; i < tileIMGs.length; i++){
  document.querySelectorAll('.flex-tile > .img')[i].style.background = `url(\'https://source.unsplash.com/600x450/?japan,${nounArr[i]}\') no-repeat center center/cover`;
  tileTextHeader[i].textContent = 'Picture';
  tileTextBody[i].textContent = 'More projects are on the way! For now, please enjoy this random picture from unsplash. Feel free to reload the page to get a new one.'
};

const myProjects = [
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
  {
    'img': './assets/my-project-pictures/patatap-clone.png',
    'title': 'Patatap Clone',
    'description': 'Simple clone of patatap.com using paper.js and howler.js. Uniquely blends ideas from both Colt Steele and Wes Bos.',
    'url': 'https://gitmasi.com/patatap-clone/index.html',
    'GitHub': 'https://github.com/git-masi/patatap-clone'
  },
  {
    'img': './assets/my-project-pictures/task-list.PNG',
    'title': 'Local Storage Todo',
    'description': 'A todo list with data persistence via local storage. Inspired by Brad Traversy but with some notable changes to the JS code.',
    'url': 'https://git-masi.github.io/task-list/',
    'GitHub': 'https://github.com/git-masi/task-list'
  },
  {
    'img': './assets/my-project-pictures/loan-calculator.PNG',
    'title': 'Loan Calculator',
    'description': 'Calculate monthly payments, total amount paid, and total interest paid on an amortized loan.',
    'url': 'https://git-masi.github.io/loan-calculator/',
    'GitHub': 'https://github.com/git-masi/loan-calculator'
  }
]

for (let i = 0; i < myProjects.length; i++){
  document.querySelectorAll('.flex-tile > .img')[i].style.background = `url(${myProjects[i].img}) no-repeat center center/cover`;
  tileTextHeader[i].textContent = myProjects[i].title;
  tileTextBody[i].textContent = myProjects[i].description;
  urlBtn[i].setAttribute('href', myProjects[i].url);
  gitHubBtn[i].setAttribute('href', myProjects[i].GitHub);

  // set background position for 4th project img to better display contents
  if(i === 3) {document.querySelectorAll('.flex-tile > .img')[i].style.backgroundPosition = 'left center'};
};

tile7.children[0].style.background = `url(${myProjects[1].img}) no-repeat center center/cover`;
tile7.children[1].children[0].children[0].textContent = myProjects[1].title;
tile7.children[1].children[0].children[1].textContent = myProjects[1].description;
tile7.children[1].children[0].children[2].setAttribute('href', myProjects[1].url);
tile7.children[1].children[0].children[3].setAttribute('href', myProjects[1].GitHub);

// this does not fire on resize, only when the page first loads (or is refreshed)
if(tile3.getBoundingClientRect().right == 0){
  tile5.children[0].style.background = `url(${myProjects[2].img}) no-repeat center center/cover`;
  tile5.children[1].children[0].children[0].textContent = myProjects[2].title;
  tile5.children[1].children[0].children[1].textContent = myProjects[2].description;
  tile5.children[1].children[0].children[2].setAttribute('href', myProjects[2].url);
  tile5.children[1].children[0].children[3].setAttribute('href', myProjects[2].GitHub);
}