let a = 1;
let b = 0;

const inputValue = document.getElementById('inputValue');
const calculateBtn = document.getElementById('calculateBtn');
const outputDiv = document.getElementById('output');

function appendToOutput(text) {
    outputDiv.innerHTML = text;
}

function calculateRatio() {
    const x = parseInt(inputValue.value);
    
    if (isNaN(x) || x < 1) {
        appendToOutput("Invalid input. Please enter a positive integer.");
        return;
    }
    
    a = 1;
    b = 0;
    
    for (let i = 0; i < x; i++) {
        [a, b] = [a + b, a];
    }
    
    let y = a + b;
    
    const quotient = y / a;
    
    appendToOutput(`Input: ${x}<br>Result: ${quotient.toFixed(35)}`);
}

// Add click event listener to the button
calculateBtn.addEventListener('click', calculateRatio);

// Allow Enter key to trigger calculation
inputValue.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        calculateRatio();
    }
});
