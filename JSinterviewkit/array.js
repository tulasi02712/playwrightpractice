
var expenses = [25.50, 17.25, 80, 33.99, 51.75]; 
var totalExpenses = 0;
var highestExpense = expenses[0];
var lowestExpense = expenses[0];
 
// Calculate total expenses
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}
 
// Find highest and lowest expenses
for (let i = 0; i < expenses.length; i++) {
    if (expenses[i] > highestExpense) {
        highestExpense = expenses[i];
    }
    if (expenses[i] < lowestExpense) {
        lowestExpense = expenses[i];
    }
}
console.log("Total Expenses:", totalExpenses);
console.log("Highest Expense:", highestExpense);
console.log("Lowest Expense:", lowestExpense);
//////////////////////////////////////////////

let expenses=[35,23,67,89,40,11,55]
//console.log(expenses.length)
let temp=0
let totalExpenses= expenses.reduce((temp,value)=>temp+value,0)
console.log(totalExpenses)

let highest=expenses[0]
let lowest=expenses[0]
for(let i=0;i<expenses.length;i++)
{
    if(highest<expenses[i])
    {
        highest=expenses[i]
    }
    
    if(expenses[i]<lowest)
    {
        lowest=expenses[i]
        
    }
    
}
console.log(highest)
console.log(lowest)
///////////////////////////////////////////////////////

let studentNames=['Tulasi','Chandu','Krishnaiah','Venky']
 studentNames.unshift('Akula')//adding new student at beginning
 console.log(studentNames)
 studentNames.pop()//remove last
 console.log(studentNames)
 console.log(studentNames.sort())




