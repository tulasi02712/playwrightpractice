//'var' is function scoped/globally scoped -it can be re-declared and updated
var x=1;
if(true)
{
    var x=2
    console.log(x)//2
}
console.log(x)//2

//'let' is a block scoped and can be updated but can't be re-declare
let x=1;
if(true)
{
    let x=2
    let y=3
    console.log(x) //SyntaxError: Identifier 'x' has already been declared
}
console.log(x) 
console.log(y) //y is not defined

