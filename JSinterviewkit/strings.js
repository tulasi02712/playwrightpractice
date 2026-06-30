
//longest word
let str = "JavaScript is an amazing language";
let words = str.split(" ");
let longestWord = words[0];

for (let i = 1; i < words.length; i++) {

    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}
console.log(longestWord);//JavaScript

