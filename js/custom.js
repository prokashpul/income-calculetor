// Expenses function create
function expensesCalculate() {
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
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalExpenses;

}
// total balance calculate function create
function totalBalance() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = parseInt(incomeInput.value);
    const balance = document.getElementById('balance');
    balance.innerText = incomeInputValue - parseInt(expensesCalculate());
}

// calculate button click event add

document.getElementById('calculate-but').addEventListener('click', function () {
    // expenses Calculate function called and total Expenses show display
    expensesCalculate()
    // totalBalance function called and total balance show display
    totalBalance()

})