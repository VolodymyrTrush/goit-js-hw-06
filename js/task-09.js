function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');

function changeColor() {
  const changeColors = getRandomHexColor();
  bodyEl.style.backgroundColor = changeColors;
  valueColor.textContent = changeColors;
};

buttonEl.addEventListener('click', changeColor);

