const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const inputStr = textInput.value.split();checkButton.addEventListener("click", () => {

    if (textInput.value === "") {
        alert("Please input a value!");
    } else if (textInput.value.length === 1) {
        resultText.textContent = `${textInput.value} is a palindrome!`
    } else if (textInput.value.replace(/_\W/g, '').split("").join("") === textInput.value.replace(/_\W/g, '').split("").reverse().join("")) {
        resultText.textContent = `${textInput.value} is a palindrome!`
    } else {
        resultText.textContent = `${textInput.value} is not a palindrome`
    }
    


});
