let str= "aabbc"

let count={}

for(let i=0;i < str.length;++i){
    let char= str[i]
if(count[char]){
    count[char]++
}else{
    count[char]=1
}}
console.log(count)//{ a: 2, b: 2, c: 1 }


/////////////////////////////

/* let str1 = "aabbc";
let result = {};

for (let char of str1) {
  result[char] = (result[char] || 0) + 1;
}
console.log(result);
 */

//////////////////////////////////////

//first non-repeating character
let string = "aabbc";
let count1 = {};

// Step 1: Count characters
for (let char of string) {
  count1[char] = (count1[char] || 0) + 1;
}

// Step 2: Find first non-repeating
for (let char of string) {
  if (count1[char] === 1) {
    console.log(char);
    break;
  }
}