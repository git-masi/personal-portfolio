import './css/main.css';

// Set current year in footer
document.querySelector(
  '.current-year'
).textContent = new Date().getUTCFullYear();

const projects = [
  {
    heading: 'running man messenger',
    img: 'https://source.unsplash.com/800x450/?japan,sign',
    text:
      'Running Man Messenger is a real-time chat application paying homage to AIM. Join rooms, chat with other users, have fun!',
    builtWith: ['React', 'Nodejs', 'Express', 'Socket.io'],
    liveUrl: 'https://git-masi.github.io/running-man-messenger-frontend/',
    gitHubUrl: 'https://git-masi.github.io/running-man-messenger-frontend/',
  },
];

const projectSection = document.querySelector('#projectSection');

projects.forEach((project) => {
  const projectCard = document.createElement('ARTICLE');
  const cardHeading = document.createElement('H4');
  const cardImg = document.createElement('IMG');
  const cardText = document.createElement('DIV');
  const desc = document.createElement('P');
  const builtText = document.createElement('P');
  const techStach = document.createElement('UL');
  const cardLinks = document.createElement('DIV');
  const liveLink = document.createElement('A');
  const gitHubLink = document.createElement('A');

  projectCard.classList.add('project-card');
  cardHeading.classList.add('project-card__heading');
  cardImg.classList.add('lazy');
  cardImg.classList.add('project-card__img');
  cardText.classList.add('project-card__text');
  cardLinks.classList.add('project-card__links');

  cardHeading.textContent = project.heading;
  cardImg.dataset.src = project.img;
  cardImg.setAttribute('alt', project.heading);
  desc.textContent = project.text;
  builtText.textContent = 'Built with:';
  project.builtWith.forEach((item) => {
    const li = document.createElement('LI');
    li.textContent = item;
    techStach.appendChild(li);
  });

  liveLink.textContent = 'See It Live';
  liveLink.classList.add('project-card__link');
  liveLink.setAttribute('href', project.liveUrl);
  liveLink.setAttribute('target', '_blank');
  liveLink.setAttribute('rel', 'noopener noreferrer');

  gitHubLink.textContent = 'GitHub';
  gitHubLink.classList.add('project-card__link');
  gitHubLink.setAttribute('href', project.gitHubUrl);
  gitHubLink.setAttribute('target', '_blank');
  gitHubLink.setAttribute('rel', 'noopener noreferrer');

  cardLinks.appendChild(liveLink);
  cardLinks.appendChild(gitHubLink);
  cardText.appendChild(desc);
  cardText.appendChild(builtText);
  cardText.appendChild(techStach);
  cardText.appendChild(cardLinks);
  projectCard.appendChild(cardHeading);
  projectCard.appendChild(cardImg);
  projectCard.appendChild(cardText);
  projectSection.appendChild(projectCard);
});

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
