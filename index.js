// JavaScript source code
var dob = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-birthdate");
var displayMessage = document.querySelector("#output-message");

function calculateSum(num) {
    var sum = 0;
    for (i = 0; i < num.length; i++) {  
        sum = sum + Number(num.charAt(i));        
    }
    return sum;
}

function showMessage(msg) {
    displayMessage.innerText = msg;
}

checkButton.addEventListener("click", function checkBirthDateLucky() {    
    var dateOfBirth = dob.value;
    dateOfBirth = dateOfBirth.replaceAll("-", "");
    var dob_sum = calculateSum(dateOfBirth);
    var luckynum = luckyNumber.value;
    if (dateOfBirth && luckynum) {
        if (luckynum > 0) {
            if (dob_sum % luckynum === 0) {
                showMessage("Wohoo! Your Birthday Date is Lucky! 🥳");
            }
            else {
                showMessage("Oops! Your BirthDate is not Lucky! 😕");
            }
        }
        else {
            showMessage("Please enter positive lucky number");
        }
    }
    else {
        showMessage("Please enter both the fields");
    }
});