//find the intersection (common elements) of arr1 and arr2.

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5];

let result = arr1.filter(item => arr2.includes(item));

console.log(result);//[3,4]

//Use Set for Better Performance

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5];

//A Set is a collection of unique values (no duplicates).

let set2 = new Set(arr2); //creates a Set containing {3, 4, 5}

//loops through each item in arr1 n  keeps only the ones that exist in set2
let result = arr1.filter(item => set2.has(item));
console.log(result);

////////////////////////////////////

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5];

let result = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    result.push(arr1[i]);
  }
}

console.log(result);

//remove duplicates

let result = [...new Set(arr1.filter(item => arr2.includes(item)))];