const numberBtn = document.querySelectorAll(".numbered-buttons");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector("#button-equal");
const acBtn = document.querySelector("#button-AC");
const screen = document.querySelector("#screen");

let selectedNumberOne = null;
let selectedNumberTwo = null;
let operator = null;
let result = null;
let clickedNumber = "";
let clickedNumber2 = "";
let numberOneSelected = false;

function numOnScreen(inputNum) {
    const screenNumber = document.createElement("p");
    screenNumber.textContent = inputNum;
    screen.appendChild(screenNumber);
}

function updateScreen() {
    screen.innerHTML = "";
}

function add(num1, num2) {
    result = num1 + num2;
    return result
}
function subtract(num1, num2) {
    result = num1 - num2;
    return result
}
function divide(num1, num2) {
    result = num1 / num2;
    return result
}
function multiply(num1, num2) {
    result = num1 * num2;
    return result
}
function operate(num1, num2, symbol) {
    if (symbol == 'x') {
        result = multiply(num1, num2);
        return result;
    }
    if (symbol == '+') {
        result = add(num1, num2);
        return result;
    }
    if (symbol == '-') {
        result = subtract(num1, num2);
        return result;
    }
    if (symbol == '÷' && num2 != '0') {
        result = divide(num1, num2);
        return result;
    }
    if (symbol == '÷' && num2 == '0') {
        numOnScreen("Nice try...");
    }
}

numberBtn.forEach((btn) => {
    btn.addEventListener("click", () => { 
        if (numberOneSelected == false){
            let value =  btn.textContent;
            clickedNumber = clickedNumber += value;
            updateScreen(); 
            numOnScreen(clickedNumber);
            selectedNumberOne = clickedNumber;
            console.log("this is your selectedNumberOne " + selectedNumberOne);
        }
        else {
            let value2 = btn.textContent;
            clickedNumber2 = clickedNumber2 += value2;
            updateScreen(); 
            numOnScreen(clickedNumber2);
            selectedNumberTwo = clickedNumber2;
            console.log("this is your selectedNumberTwo " + selectedNumberTwo);
        } 
    });
});

operatorBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (numberOneSelected == false) {
            updateScreen();
            numberOneSelected = true;
            operator = btn.textContent;
            console.log(operator);
        }
        else {
            updateScreen();
            operate(Number(selectedNumberOne), Number(selectedNumberTwo), operator);
            numOnScreen(result);
            operator = btn.textContent;
            selectedNumberOne = result
            clickedNumber = "";
            clickedNumber2 = "";

        }

    });
});

equalBtn.addEventListener("click", () => {
        updateScreen();
        operate(Number(selectedNumberOne), Number(selectedNumberTwo), operator);
        numOnScreen(result);
        selectedNumberOne = result
        clickedNumber = "";
        clickedNumber2 = "";
        numberOneSelected = false;
        console.log("your Number 1 now is" + selectedNumberOne);
        selectedNumberTwo = 0;
        console.log("your number 2 is now" + selectedNumberTwo);

});

acBtn.addEventListener("click", () => {
        updateScreen();
        selectedNumberOne = null;
        selectedNumberTwo = null;
        operator = null;
        result = null;
        clickedNumber = "";
        clickedNumber2 = "";
        numberOneSelected = false;
});


