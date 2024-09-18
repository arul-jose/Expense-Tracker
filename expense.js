let expenses = [];
let totalAmount = 0;
const sectionInput = document.getElementById("section-input");
const selectDate = document.getElementById("select-date");
const selectTime = document.getElementById("select-time");
const selectCategory = document.getElementById("select-category");
const selectAmount = document.getElementById("total-amount");
const addBtn = document.getElementById("add");
const expenseList = document.getElementById("expense-list");

addBtn.addEventListener("click", function () {
    //  alert("Hello World!");
    const date = document.getElementById("date-input").value;
    const time = document.getElementById("time-input").value;
    const category = document.getElementById("select-category-items").value;
    // const amount = document.getElementById("amount-input").value;
    const amount = parseFloat(document.getElementById("total-amount").value);

    const expense = {
        id: Date.now(),
        date,
        time,
        category,
        amount,
    };
    // console.log(expenses);
    expenses.push(expense);
    displayExpenses(expenses);
    updateTotalAmount();
    //---------------------------------------------------------
    expenseList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const id = parseInt(e.target.dataset.id);
            expenses = expenses.filter(expense => expense.id !== id);
            displayExpenses(expenses);
            
        }

        if (e.target.classList.contains("edit-btn")) {
            const id = parseInt(e.target.dataset.id);
            const expense = expenses.find(expense => expense.id === id);

            document.getElementById("date-input").value = expense.date;
            document.getElementById("time-input").value = expense.time;
            document.getElementById("select-category-items").value = expense.category;
            document.getElementById("total-amount").value = expense.amount;

            expenses = expenses.filter(expense => expense.id !== id);
            displayExpenses(expenses);
            
        }
    });
    //---------------------------------------------------------
    function displayExpenses(expenses) {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const eachRow = document.createElement("tr");
            eachRow.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.time}</td>
            <td>${expense.category}</td>
            <td>${expense.amount}</td>
            <td>
            <button class="edit-btn" data-id="${expense.id}">Edit</button>
            <button class="Delete-btn" data-id="${expense.id}">Delete</button>
            </td>
            `;
            expenseList.appendChild(eachRow);
        });

    }

    function updateTotalAmount() {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        selectAmount.textContent = total.toFixed(2);
    }
});


