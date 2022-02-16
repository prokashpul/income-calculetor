// Expenses function create
function totalCalculate() {
    const foodInput = document.getElementById('food-input');
    const foodInputValue = parseInt(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = parseInt(rentInput.value);
    const clotheInput = document.getElementById('clothe-input');
    const clotheInputValue = parseInt(clotheInput.value);
    let totalExpenses = 0;
    if (foodInputValue >= 0 && rentInputValue >= 0 & clotheInputValue >= 0) {
        totalExpenses = foodInputValue + rentInputValue + clotheInputValue;
    } else {
        document.getElementById('error').innerHTML = `Some thing error`
    }
    return totalExpenses;

}

// calculate button click event add

document.getElementById('calculate-but').addEventListener('click', function () {
    // total Expenses show display
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCalculate();

})