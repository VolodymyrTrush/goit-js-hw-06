const btnDecrease = document.querySelector('[data-action="decrement"]');
const btnIncrease = document.querySelector('[data-action="increment"]');
const tabloValue = document.querySelector('#value');
let counterValue = 0;

const dataValue = () => {
    tabloValue.textContent = counterValue;
};

btnDecrease.addEventListener('click', () => {
    counterValue -= 1;
    dataValue();
});
btnIncrease.addEventListener('click', () =>  {
    counterValue += 1;
    dataValue();
});