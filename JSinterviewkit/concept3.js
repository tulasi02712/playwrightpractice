console.log("Iam 1st prgm");
console.log("Iam 2nd prgm");
setTimeout(function(){
    console.log("Iam 3th prgm") //asynchronous function
},2000)//wait for 20sec
console.log("Iam 4th prgm");
console.log("Iam 5th prgm");
/* Iam 1st prgm
Iam 2nd prgm
Iam 4th prgm
Iam 5th prgm
Iam 3th prgm */


