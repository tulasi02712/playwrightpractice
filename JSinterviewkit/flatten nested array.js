
let arr = [1, [2, [3, 4]], 5];

let result = arr.flat(Infinity);
//flat() → flattens array
//Infinity → flattens all levels

console.log(result);//[1,2,3,4,5]

