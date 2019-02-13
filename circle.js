const displayArea = document.getElementById('display-area');
let divList = [];
let createTime = 1000;

function pickText() {
  let textArr = ["Javascript", "HTML5", "CSS3", "Sass", "Node", "Express", "MongoDB", "Drupal", "Boostrap 4", "git", "cPanel"]
  let text = textArr[Math.floor(Math.random() * textArr.length)];
  return text;
}

function pickColor() {
  let colors = ["var(--clr-primary)", "var(--clr-primary-dark)", "var(--clr-primary-dark2)", "var(--clr-primary-light)", "var(--clr-primary-light2)"];
  let color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

function pickSize() {
  let size = Math.floor(Math.random()*8) + 2;
  return size.toString() + 'rem';
}

function pickSpeed() {
  let speed = Math.floor(Math.random()*3000) + 4000;
  return speed.toString() + 'ms';
}

function pickLocation() {
  let left = Math.floor(Math.random()*81) + 1;
  return left.toString() + '%';
}

let createCircle = () => {
  const DIV = document.createElement("DIV");
  const DIVs = DIV.style
  DIV.classList.add('circle')
  DIVs.background = pickColor();
  let circleSize = pickSize();
  DIVs.width = circleSize;
  DIVs.height = circleSize;
  DIVs.animationDuration = pickSpeed();
  DIVs.left = pickLocation();
  divList.push(DIV)
  for (i = divList.length - 1; i < divList.length; i++) {
    displayArea.appendChild(divList[i]);
  }
};

let createText = () => {
  const DIV = document.createElement("DIV");
  const DIVs = DIV.style;
  DIV.classList.add('cascade-text');
  DIVs.animationDuration = pickSpeed();
  DIVs.left = pickLocation();
  displayArea.appendChild(DIV);
  DIV.textContent = pickText();
}

setInterval( ()=> {
  createText();
}, createTime);

// set how often to make circles

setInterval(()=>{
  createCircle();
}, createTime);

setTimeout(()=>{
  setInterval(function(){
    let displayBottom = document.querySelector('#display-area').getBoundingClientRect().bottom;
    let circleTop = document.querySelector('#display-area .circle').getBoundingClientRect().top;
    let casecadeTop = document.querySelector('#display-area .cascade-text').getBoundingClientRect().top;
    let differenceCircle = displayBottom - circleTop;
    let differenceCascade = displayBottom - casecadeTop;

    if (differenceCircle < 0){
      displayArea.removeChild(document.querySelector('#display-area .circle'));
    }
    if (differenceCascade < 0){
      displayArea.removeChild(document.querySelector('#display-area .cascade-text'));
    }
  }, 50)
}, createTime + 1);