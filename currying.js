// function calculateVolume(length, breadth, height) {
//     return length * breadth * height;
// }
// console.log(calculateVolume(4, 5, 6));
// curring through bind
function multiply(a){
    let y=2
    console.log(a*y)
}
// first priority 
let multiply3 = multiply.bind(this,3)
// second priority
// ignore 5
multiply3(5)

// curring through closures
function multiply4(a){
    return function(y){
    console.log(a*y)
    }
}
let multiply6 = multiply4(2)(3)
// multiply6(3) //6