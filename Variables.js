//variables store data for later use

//create a variable
let myVariable = "value";
let myNewVariable = "13";
let myBool = true;

//accessing variable values
console.log(myVariable);
console.log(myNewVariable+5);
console.log(myBool && true);

//update value stored in a variable
myNewVariable = 10;
console.log(myNewVariable);

//increase by 1
myNewVariable = myNewVariable+1;
console.log(myNewVariable);

// Decrease by 1
myNewVariable = myNewVariable - 1;
console.log(myNewVariable);

// Multiply by 3
myNewVariable = myNewVariable * 3;
console.log(myNewVariable);

// Divide by 3
myNewVariable = myNewVariable / 3;
console.log(myNewVariable);

// Divide and return the remainder
myNewVariable = myNewVariable % 2; // 10/2 = 5 with 0 remainder
console.log(myNewVariable);

// Shortcuts!
let x = 100;
x = x+1; //add 1
x++; //add 1

x = x - 1; //subtract 1
x--; //subtract 1

x = x + 5; //add 5
x+= 5; //add 5

x = x - 2; //subtract 2
x -= 2; //subtract 2

x = x * 10; //times 10
x *= 10; //times 10

x = x / 10; //divide by 10
x /= 10; //divide by 10

// Keywords
const pi = 3.14;
const userName = "myUser123";
// constants cannot change values
var old = 123;
// var is the old way to create variables. Don't use it.