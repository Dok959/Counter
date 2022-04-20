const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');
let counter = document.getElementsByTagName('span')[0];

btnDecrease.addEventListener('click', function () {
    counter.textContent = Number(counter.textContent) - 1;
});

btnReset.addEventListener('click', function () {
    counter.textContent = 0;
});

btnIncrease.addEventListener('click', function () {
    counter.textContent = Number(counter.textContent) + 1;
});
