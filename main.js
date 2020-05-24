import './css/main.css';

// Set current year in footer
document.querySelector(
  '.current-year'
).textContent = new Date().getUTCFullYear();

/**
 *
 * Generally you'd want to use clientHeight or something other than screen height
 * but in this case it provides a simple upper bound for animating the hero section
 *
 */
const screenHeight = window.screen.height;

const heroHeading = document.querySelector('.hero__heading');
const heroSubheading = document.querySelector('.hero__subheading');
const bgImgInnerEls = document.querySelectorAll('.img-bg__inner');
let shadowEls = document.querySelectorAll('.shadow');

let lastScrollY = 0;
let ticking = false;

// Only listen for scroll events
window.addEventListener('load', function () {
  window.addEventListener('scroll', onScroll, false);
});

function update() {
  ticking = false;

  if (lastScrollY < screenHeight) {
    heroHeading.style.opacity = '1';
    heroHeading.style.animation = 'none';
    heroHeading.style.transform = `translate(-${lastScrollY * 1.35}px, -${
      lastScrollY * 1.28
    }px) rotate(-${lastScrollY / 4}deg)`;
    heroSubheading.style.opacity = '1';
    heroSubheading.style.animation = 'none';
    heroSubheading.style.transform = `translate(${lastScrollY * 1.3}px, -${
      lastScrollY * 1.1
    }px) rotate(${lastScrollY / 4}deg)`;
  }

  shadowEls.forEach((el, i) => {
    const clientRect = el.getBoundingClientRect();
    if (clientRect.top >= 0) return;
    if (el.parentElement.classList.contains('img-bg--hero')) {
      el.style.background = `linear-gradient(to bottom, transparent, rgba(0, 0, 0, ${
        0 + 0.001 * lastScrollY
      }))`;
    } else {
      el.style.background = `linear-gradient(to bottom, transparent, rgba(0, 0, 0, ${
        0 + 0.003 * clientRect.top * -1
      }))`;
    }
  });
}

function onScroll() {
  lastScrollY = window.scrollY;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}

const images = document.querySelectorAll('.lazy');

if (!('IntersectionObserver' in window)) {
  images.forEach((image) => loadImage(image));
} else {
  const lazyImagesOptions = {
    rootMargin: '50px 0px',
    threshold: 0.01,
  };

  const lazyImagesObserver = new IntersectionObserver(
    (entries, lazyImagesObserver) => {
      entries.forEach((image) => {
        if (!image.isIntersecting) return;
        lazyImagesObserver.unobserve(image.target);
        loadImage(image.target);
      });
    },
    lazyImagesOptions
  );

  images.forEach((image) => lazyImagesObserver.observe(image));

  const shadowObserver = new IntersectionObserver((entries) => {
    entries.forEach((shadow) => {
      if (shadow.isIntersecting) {
        shadow.target.classList.add('shadow');
        shadowEls = document.querySelectorAll('.shadow');
      } else {
        shadow.target.classList.remove('shadow');
        shadowEls = document.querySelectorAll('.shadow');
      }
    });
  }, lazyImagesOptions);

  bgImgInnerEls.forEach((el) => shadowObserver.observe(el));
}

function loadImage(image) {
  image.setAttribute('src', image.dataset.src);
}

// function throttle(func, limit) {
//   let inThrottle = false;
//   return function () {
//     const args = arguments;
//     const context = this;
//     if (!inThrottle) {
//       func.apply(context, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// navbar fade effect
// const navDOM = document.getElementsByClassName('navbar')[0];
// window.addEventListener('scroll', () => {
//   if (
//     window.scrollY > 150 &&
//     document.body.clientWidth > 550 &&
//     document.body.clientHeight > 550
//   ) {
//     navDOM.style.opacity = 0.6;
//   } else {
//     navDOM.style.opacity = 1;
//   }
// });

// navDOM.addEventListener('mouseenter', () => {
//   navDOM.style.opacity = 1;
// });

// navDOM.addEventListener('mouseleave', () => {
//   if (
//     window.scrollY > 160 &&
//     document.body.clientWidth > 550 &&
//     document.body.clientHeight > 550
//   ) {
//     navDOM.style.opacity = 0.6;
//   }
// });

// //hamburger interaction

// const burgerCheckbox = document.querySelector('.toggler');
// const headerDOM = document.getElementsByTagName('header')[0];
// burgerCheckbox.addEventListener('click', () => {
//   if (burgerCheckbox.checked) {
//     headerDOM.classList.add('display');
//   } else {
//     headerDOM.classList.remove('display');
//   }
// });

// // project section

// const tileTextHeader = document.querySelectorAll('.text--header');
// const tileTextBody = document.querySelectorAll('.text--body');
// const urlBtn = document.querySelectorAll('.text--btn__link');
// const gitHubBtn = document.querySelectorAll('.text--btn__github');

// const myProjects = [
//   {
//     img: './assets/my-project-pictures/bitcoin-data-visualizer.PNG',
//     title: 'Bitcoin Data Visualizer',
//     description:
//       'See historical bitcoin price data graphically displayed and use investment tools to calculate return on investment.',
//     url: 'https://git-masi.github.io/bitcoin-data-visualizer/#/',
//     GitHub: 'https://github.com/git-masi/bitcoin-data-visualizer',
//   },
//   {
//     img: './assets/my-project-pictures/react-colors.PNG',
//     title: 'React Colors - Palette Creator',
//     description:
//       'Creat custom color palettes for your next project! Palettes are saved in local storage for future use.',
//     url: 'https://sharp-yonath-69298a.netlify.com/',
//     GitHub: 'https://github.com/git-masi/react-color-app',
//   },
//   {
//     img: './assets/my-project-pictures/react-dad-jokes.PNG',
//     title: 'React Dad Jokes',
//     description:
//       'Get dad jokes from the wonderful icanhazdadjoke.com! Vote on jokes you like and the list will sort itself.',
//     url: 'https://git-masi.github.io/react-dad-jokes/',
//     GitHub: 'https://github.com/git-masi/react-dad-jokes',
//   },
//   {
//     img: './assets/my-project-pictures/hero-of-time.PNG',
//     title: 'Timeboxing - Hero of Time',
//     description:
//       'Want to be more focused and productive? Then let this app help you with timeboxing!',
//     url: 'https://git-masi.github.io/timebox-hero-of-time/',
//     GitHub: 'https://github.com/git-masi/timebox-hero-of-time',
//   },
//   {
//     img: './assets/my-project-pictures/the-pig-game.PNG',
//     title: 'The Pig Game',
//     description:
//       "A one-on-one game of luck. Rack up your score until you reach 100. But don't roll a 1!",
//     url: 'https://git-masi.github.io/pig-game/',
//     GitHub: 'https://github.com/git-masi/pig-game',
//   },
//   {
//     img: './assets/my-project-pictures/palindrome-fun.PNG',
//     title: 'Palindrome Fun',
//     description:
//       'Do you like palindromes? This short yet engaging app answers the question: "just how many palindromes are there?"',
//     url: 'https://git-masi.github.io/palindrome-fun/',
//     GitHub: 'https://github.com/git-masi/palindrome-fun',
//   },
// ];

// for (let i = 0; i < myProjects.length; i++) {
//   document.querySelectorAll('.flex-tile > .img')[
//     i
//   ].style.background = `url(${myProjects[i].img}) no-repeat top center/cover`;
//   tileTextHeader[i].textContent = myProjects[i].title;
//   tileTextBody[i].textContent = myProjects[i].description;
//   urlBtn[i].setAttribute('href', myProjects[i].url);
//   gitHubBtn[i].setAttribute('href', myProjects[i].GitHub);
// }
