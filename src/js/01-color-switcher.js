const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

btnStart.addEventListener('click', onStartBtnTimerColor);
btnStop.addEventListener('click', onStopBtnTimerColor);

let isAcrive = false;
let timerId = null;

function onStartBtnTimerColor(e) {
  if (isAcrive) {
    return;
  }

  isAcrive = true;
  bodyColor.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnTimerColor(e) {
  isAcrive = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
