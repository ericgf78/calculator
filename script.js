const screen = document.querySelector("#screen");
const button0 = document.querySelector("#button0");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const buttonAC = document.querySelector("#buttonAC");
let numberSelectedOne = "";
let numberSelectedTwo = "";


button0.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `0`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "0";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button1.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `1`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "1";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button2.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `2`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "2";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button3.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `3`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "3";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button4.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `4`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "4";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button5.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `5`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "5";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button6.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `6`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "6";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button7.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `7`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "7";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button8.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `8`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "8";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

button9.addEventListener("click", () => {
    numberSelectedOne = numberSelectedOne + `9`;
    const numberDisplay = document.createElement("p");
    numberDisplay.textContent = "9";
    screen.appendChild(numberDisplay);
    console.log(numberSelectedOne);
})

buttonAC.addEventListener("click", () => {
    numberSelectedOne = 0;
    screen.innerHTML = "";
})

