document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let income = document.getElementById('income').value;
    let resultDiv = document.getElementById('result');
    
    if (!isNumber(income) || income <= 0) {
        resultDiv.textContent = "Invalid input. Please enter a positive number.";
        resultDiv.style.color = "red";
        return;
    }
    
    income = parseInt(income);
    let tax = calculateTax(income);
    
    resultDiv.textContent = "Your tax is: " + tax;
    resultDiv.style.color = "black";
});

function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

function calculateTax(income) {
    let tax = 0;
    
    if (income <= 300000) {
        tax = 0;
    } else if (income <= 700000) {
        tax = (income - 300000) * 0.05;
    } else if (income <= 1000000) {
        tax = 400000 * 0.05 + (income - 700000) * 0.1;
    } else if (income <= 1200000) {
        tax = 400000 * 0.05 + 300000 * 0.1 + (income - 1000000) * 0.15;
    } else if (income <= 1500000) {
        tax = 400000 * 0.05 + 300000 * 0.1 + 200000 * 0.15 + (income - 1200000) * 0.2;
    } else {
        tax = 400000 * 0.05 + 300000 * 0.1 + 200000 * 0.15 + 300000 * 0.2 + (income - 1500000) * 0.3;
    }
    
    return tax;
}
