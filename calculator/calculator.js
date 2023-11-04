let displayValue = '';
let previousValue = '';
let operator = '';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    previousValue = displayValue;
    displayValue = eval(displayValue).toString();
    updateDisplay();
}

clearDisplay();
