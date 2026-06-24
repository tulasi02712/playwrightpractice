let arr = [10, 5, 25, 8, 15, 6];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even Count =", evenCount);
console.log("Odd Count =", oddCount);

//