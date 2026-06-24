//remove duplicates

let arr = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(arr)];
console.log(unique);

//Set â†’ removes duplicates automatically
//... (spread operator) â†’ converts Set back to array


//remove duplicates

let num = [1, 2, 2, 3, 4, 4];
let result = [];

for (let i = 0; i < num.length; i++) {
  if (!result.includes(num[i])) {
    result.push(num[i]);   //slow approach
  }
}
console.log(result);
//or
//or
let arr = [1, 2, 3, 2, 4, 5, 1];

let seen = {};
let unique = [];

for (let num of arr) {

    if (!seen[num]) {
        seen[num] = true;
        unique.push(num);
    }
}

console.log(unique);
//store duplicates

let arr1 = [1, 2, 2, 3, 4, 4];
let seen = [];
let duplicates = [];

for (let i = 0; i < arr1.length; i++) {
  if (seen.includes(arr1[i]) && !duplicates.includes(arr1[i])) {
    duplicates.push(arr1[i]);
  } else {
    seen.push(arr1[i]);
  }
}
console.log(duplicates);//[2, 4]


//store duplicate
let arr = [1, 2, 2, 3, 4, 4];

let duplicates = arr.filter((item, index) => {
  return arr.indexOf(item) !== index;
});

console.log([...new Set(duplicates)]);//[2, 4]

