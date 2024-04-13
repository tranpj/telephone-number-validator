const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

//Number pad elements
const num0Btn = document.getElementById("0-btn");
const num1Btn = document.getElementById("1-btn");
const num2Btn = document.getElementById("2-btn");
const num3Btn = document.getElementById("3-btn");
const num4Btn = document.getElementById("4-btn");
const num5Btn = document.getElementById("5-btn");
const num6Btn = document.getElementById("6-btn");
const num7Btn = document.getElementById("7-btn");
const num8Btn = document.getElementById("8-btn");
const num9Btn = document.getElementById("9-btn");

//Number pad logic
const numBtnClick = (btn) => {
    userInput.value += btn.srcElement.value;
}

//add event listeners to number pad buttons
num0Btn.addEventListener("click", numBtnClick);
num1Btn.addEventListener("click", numBtnClick);
num2Btn.addEventListener("click", numBtnClick);
num3Btn.addEventListener("click", numBtnClick);
num4Btn.addEventListener("click", numBtnClick);
num5Btn.addEventListener("click", numBtnClick);
num6Btn.addEventListener("click", numBtnClick);
num7Btn.addEventListener("click", numBtnClick);
num8Btn.addEventListener("click", numBtnClick);
num9Btn.addEventListener("click", numBtnClick);

const validPhoneNumberFormats =
    [
        /^(?:1?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4})$/,
        /^(?:1?[\s-]?\([\s-]?\d{3}[\s-]?\)[\s-]?\d{3}[\s-]?\d{4})$/
    ]

const checkPhoneNumber = (num) => {
    if (validPhoneNumberFormats.some((regex) => regex.test(num))) {
        return true;
    }
    else {
        return false;
    }
}

const updateResultsDiv = (result) => {
    resultsDiv.style.display = "flex";
    resultsDiv.innerHTML += `<p>${result}</p>`
}

const checkBtnClick = () => {
    if (userInput.value) {
        if (checkPhoneNumber(userInput.value)) {
            updateResultsDiv(`Valid US number: ${userInput.value}`);
        }
        else {
            updateResultsDiv(`Invalid US number: ${userInput.value}`);
        }

    }
    else {
        alert("Please provide a phone number");
    }

    userInput.value = "";
}

const keyPress = (key) => {
    if (key.key == "Enter") {
        checkBtnClick();
    }
}

const clearBtnClick = () => {
    userInput.value = "";
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = "none";
}

checkBtn.addEventListener("click", checkBtnClick);
userInput.addEventListener("keypress", keyPress);
clearBtn.addEventListener("click", clearBtnClick);