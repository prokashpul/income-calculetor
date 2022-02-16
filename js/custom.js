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
        errorHandel("Expenses", " Negative number and 0 is not allow ");
    }
    // return function
    return totalExpenses;


}
// total balance calculate function create
function totalBalance() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = parseInt(incomeInput.value);
    let totalBalance = 0;
    if (incomeInputValue > 0) {
        if (incomeInputValue >= expensesCalculate()) {
            totalBalance = incomeInputValue - parseInt(expensesCalculate());
        } else {
            errorHandel(expensesCalculate(), ` Is bigger than ${incomeInputValue} `);
        }

    } else {
        errorHandel("Income", " Negative number and 0 is not allow ");
    }

    return totalBalance;
}
// error handling function create
function errorHandel(name, massage) {
    document.getElementById('error').innerHTML = `<div class="toast show align-items-center my-3 mx-auto bg-danger text-light" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
    ${name} input: 
    Wrang Data ! ${massage} ! please enter 0 up any number;
   </div>
    <button type="button" id='close' class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div> `;
    document.getElementById('close').addEventListener('click', function () {
        document.getElementById('error').innerHTML = "";
    })
}

// calculate button click event add

document.getElementById('calculate-but').addEventListener('click', function () {
    // total Expenses show display
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = expensesCalculate();
    // balance function
    const balance = document.getElementById('balance');
    balance.innerText = totalBalance();

});

// saving button add event handler
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveInputValue = parseInt(saveInput.value);
    const savingBalance = document.getElementById('saving-balance');

    // saving balance
    savingBalance.innerText = Math.round(parseInt(totalBalance()) * saveInputValue / 100);
    const totalSave = parseInt(savingBalance.innerText);
    // Remaining Balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = Math.round(parseInt(totalBalance()) - totalSave);
});