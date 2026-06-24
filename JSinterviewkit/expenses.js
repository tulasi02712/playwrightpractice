// Create an array called expenses that contains at least 5 different expense amounts.
const expenses = [45.99, 120.0, 9.5, 60.25, 300.0];

// Calculate the total expenses by summing all the elements of the array.
const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);

// Find the highest and lowest individual expenses within the array.
let highestExpense = expenses[0];
let lowestExpense = expenses[0];

for (const expense of expenses) {
  if (expense > highestExpense) 
    highestExpense = expense;
  if (expense < lowestExpense) 
    lowestExpense = expense;
}

console.log("Expenses:", expenses);
console.log("Total expenses:", totalExpenses);
console.log("Highest expense:", highestExpense);
console.log("Lowest expense:", lowestExpense);
