const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.disabled = true;
let bodyHexColor = null;

buttonStart.addEventListener('click', onStartBtnClick);
buttonStop.addEventListener('click', onStopBtnClick);

function onStartBtnClick(e) {
  buttonStart.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');
  bodyHexColor = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick(e) {
  buttonStop.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled');
  clearInterval(bodyHexColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
