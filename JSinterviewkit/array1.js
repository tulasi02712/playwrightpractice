var productPrices = [45, 89, 32.50, 65.99];
 
// Apply 10% discount
var discountedPrices = productPrices.map(price => price * 0.9);
 
// Products under $50
var affordableProducts = productPrices.filter(price => price < 50);
 
// Total cost of affordable products
var totalCost = affordableProducts.reduce((sum, price) => sum + price, 0);
 
console.log(discountedPrices);
console.log(affordableProducts);
console.log(totalCost);

/////////////////////////// Rotate array
let arr = [1, 2, 3, 4, 5];
let temp = arr[arr.length - 1];

for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
}
arr[0] = temp;
console.log(arr);//[5,1,2,3,4]

//////////////Two pointer pattern

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let result = [];
let i = 0;
let j = 0;

// Compare both arrays
while (i < arr1.length && j < arr2.length) {

    if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
    } else {
        result.push(arr2[j]);
        j++;
    }
}
// Add remaining elements from arr1
while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
}
// Add remaining elements from arr2
while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
}
console.log(result);