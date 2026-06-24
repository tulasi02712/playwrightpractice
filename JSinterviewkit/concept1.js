const person= {
name : "Tulasi",
age : 26,

greet : function() {
console.log("Hello,Iam "+ this.name)

}
}
//person.name;
person.greet();

function sayHello(){
return "Hello,Iam the world"
}
console.log(sayHello())
//anonymous function
const name = "Tulasi"
const greet=function(name){
    return "Hello,Iam " +name;
}
console.log(greet(name))
