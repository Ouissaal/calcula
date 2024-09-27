const display = document.getElementById('display');
let currentValue = '0';
let operator = '';
let previousValue = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const btnText = button.innerText;

        if (button.classList.contains('number')) {
            handleNumber(btnText);
        } else if (button.classList.contains('operator')) {
            handleOperator(btnText);
        } else if (btnText === 'AC') {
            clearAll();
        } else if (btnText === '+/-') {
            toggleSign();
        } else if (btnText === '%') {
            percent();
        } else if (btnText === '.') {
            addDecimal();
        }
        updateDisplay();
    });
});

function handleNumber(num) {
if (currentValue === '0') {
        currentValue = num;
    } else {
        currentValue += num;
/*  currentValue = carrentValue + num */
    }
}

function handleOperator(op) {
    if (op === '=') {
        if (operator && previousValue) {
            currentValue = calculate(previousValue, currentValue, operator);
            operator = '';
            previousValue = '';
        }
    } else {
        operator = op;
        previousValue = currentValue;
        currentValue = '0';
    }
}

function calculate(a, b, operator) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (operator === '+') return (num1 + num2).toString();
    if (operator === '-') return (num1 - num2).toString();
    if (operator === '×') return (num1 * num2).toString();
    if (operator === '÷') return (num1 / num2).toString();
}

function clearAll() {
    currentValue = '0';
    operator = '';
    previousValue = '';
}

function toggleSign() {
    currentValue = (parseFloat(currentValue) * -1).toString();
}

function percent() {
    currentValue = (parseFloat(currentValue) / 100).toString();
}

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}

function updateDisplay() {
    display.innerText = currentValue;
}