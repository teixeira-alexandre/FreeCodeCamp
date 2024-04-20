const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const inputStr = textInput.value.split();checkButton.addEventListener("click", () => {
    const cleanStr = textInput.value.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split("").join("");
    const reversedStr = textInput.value.replace(/[^A-Za-z0-9]/g, '').toLowerCase().split("").reverse().join("");

    if (textInput.value === "") {
        alert("Please input a value!");
        return
    } else if (textInput.value.length === 1) {
        resultText.textContent = `${textInput.value} is a palindrome!`
    } else if (cleanStr === reversedStr) {
        resultText.textContent = `${textInput.value} is a palindrome!`;
    } else {
        resultText.textContent = `${textInput.value} is not a palindrome`
    }
});


