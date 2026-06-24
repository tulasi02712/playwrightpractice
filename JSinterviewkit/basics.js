let num = [10, 5, 20, 8];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < num.length; i++) {
  if (num[i] > first) {
    second = first;
    first = num[i];
  } else if (num[i] > second && num[i] !== first) {
    second = num[i];
  }
}

console.log(second); //10

////////////////
let number = [10, 5, 20, 8];

number.sort((a, b) => b - a);

console.log(number[1]);