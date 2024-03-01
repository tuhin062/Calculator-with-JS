// Function to append a value to the display
function appendToDisplay(value) {
    var display = document.getElementsByName('display')[0];
    var currentValue = display.value;

    // Check if the last character is an operator
    var lastCharacter = currentValue.slice(-1);
    if (currentValue === '' || lastCharacter === '+' || lastCharacter === '-' || lastCharacter === '*' || lastCharacter === '/') {
        // If the display is empty or the last character is an operator, simply append the value
        display.value += value;
    } else {
        // If the last character is not an operator, append the value without any additional checks
        display.value += value;
    }
}

// Function to delete the last character from the display
function deletLastCharacter() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0,-1);
}

// Function to clear all content from the display
function deletAll(){
    var display = document.getElementsByName('display')[0];
    display.value ='';
}

// Function to evaluate the expression and display the result
function equalsTo(){
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}
