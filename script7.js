
function loadCounter() {
    return localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
}


function saveCounter(value) {
    localStorage.setItem('counter', value);
}


let counterValue = loadCounter();
const counterDisplay = document.getElementById('counter');
counterDisplay.textContent = counterValue;


document.getElementById('increment').addEventListener('click', () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
    saveCounter(counterValue);
});


document.getElementById('decrement').addEventListener('click', () => {
    counterValue--;
    counterDisplay.textContent = counterValue;
    saveCounter(counterValue);
});