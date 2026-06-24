let words = ["madam", "hello"];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  let reversed = word.split('').reverse().join('');

  if (word === reversed) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not a palindrome");
  }
}
///////////////////////////////
let str = "madam";
let rev = "";

for(let i = str.length - 1; i >= 0; i--)
{
    rev += str[i];
}

if(rev === str)
{
    console.log(str + " is a palindrome");
}
else
{
    console.log(str + " is not a palindrome");
}
/////////////////////////////////////////

let name ="automation"
console.log(name.length)
let vowels=['a','e','i','o','u'] 
let count=0
for(let i =0;i<name.length;++i){
  if(vowels.includes(name[i])) {
    count++
  }
} 
console.log(count)

///////////////
let str = "automation";
let count = 0;

for (let char of str) {
  if ("aeiou".includes(char)) {
    count++;
  }
}

console.log(count);