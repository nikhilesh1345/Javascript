// using test before declaring
console.log(t);   // undefined
var t;

// using test before declaring
var te;
console.log(te); // undefined

// program to display value
a = 5;
console.log(a);
var a; // 5

// program to display value
var b;
b = 5;
console.log(b); // 5
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// initializations are not hoisted. For example
console.log(a);
var a = 5;
// both are same both are undefined
var a;
console.log(a);
a = 5;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// program to display value
var a = 4;

function greet4() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet4(); // hello
console.log(b);
// Uncaught ReferenceError: b is not defined
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// program to display value
c = 5;
console.log(c);
let c; // error

greet1();
// hi there
function greet1() {
    console.log('Hi, there.');
}

greet2();
// Uncaught ReferenceError: greet is not defined
let greet2 = function() {
    console.log('Hi, there.');
}

