const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.disabled = true;

buttonStart.addEventListener('click', handleClick);

//Генеруємо випадковий колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Створюємо колбек функцію для зміни фону боді з інтервалом повтору в 1 секунду
const handleClick = () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
};

//Ставимо слухача на кнопку стоп
buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
});
