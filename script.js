let buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0','AC'];
let operations = ['/', '*', '-', '+'];
let calculations = ['='];

let calc = document.getElementById('calc');
let textArea = document.getElementById('result');
let calculation = document.getElementById('buttonCalc');


buttons.forEach(function (button) {
    let buttonElement = document.createElement('div');
    buttonElement.className = 'btn';
    buttonElement.innerHTML = button;
    buttonNum.appendChild(buttonElement);
});

operations.forEach(function (operation) {
    let operationElement = document.createElement('div');
    operationElement.className = 'operation';
    operationElement.innerHTML = operation;
    buttonOper.appendChild(operationElement);
});

calculations.forEach(function (calculation) {
    let calculationElement = document.createElement('div');
    calculationElement.className = 'calculation';
    calculationElement.innerHTML = calculation;
    buttonCalc.appendChild(calculationElement);
});


document.querySelectorAll('#wrap .btn').forEach(function (button) {

    button.addEventListener('click', onButtonClick);
});

document.querySelectorAll('#wrap .operation').forEach(function (operation) {

    operation.addEventListener('click', onButtonClick);
});

document.querySelectorAll('#wrap .calculation').forEach(function (calculation) {

    calculation.addEventListener('click', onButtonClick);
});

function onButtonClick(e) {

    if (e.target.innerHTML === 'AC') {

        textArea.innerHTML = '0';
    } else if (e.target.innerHTML === '=') {

        textArea.innerHTML = eval(textArea.innerHTML);
    } else if (textArea.innerHTML === '0') {

        textArea.innerHTML = e.target.innerHTML;
    } else {

        textArea.innerHTML += e.target.innerHTML;
    }
}
