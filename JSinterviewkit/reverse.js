
let name = "hello world";

let result = name.split(" ")                 // ["hello", "world"]
  .map(word => word.split("")  //["h","e","l","l","o"]
  .reverse()  //["o","l","l","e","h"]
  .join(""))//"olleh"
  .join(" ");//"olleh dlrow"

console.log(result);//olleh dlrow

///////////////////////////////////////////

let str = "hello world";
let words = str.split(" ");
let result = [];

for (let word of words) {
  let reversed = word.split("").reverse().join("");
  result.push(reversed);
}

console.log(result.join(" "));
