let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome(greeting,home,village) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName +home+village);
  }
  sayWelcome.call(p1, 'Welcome'); // Welcome John Smith
  sayWelcome.call(p2, 'Welcome'); // Welcome Ann Brown


//   apply 
let p4 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p5 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  sayWelcome.apply(p4, ['Welcome']); // Welcome John Smith
  sayWelcome.apply(p5, ['Welcome']); // Welcome Ann Brown

//   bind

let p68= {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p6 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome() {
    console.log('Welcome ' + this.firstName + ' ' + this.lastName);
  }
//   same as call but indirectly 
  let sayWelcomeJohn = sayWelcome.bind(p68);
  let sayWelcomeAnn = sayWelcome.bind(p6);
  sayWelcomeJohn(); // Welcome John Smith
  sayWelcomeAnn(); // Welcome Ann Brown

//   polly fill


let p61 = {
    firstName: 'Anna',
    lastName: 'Namaste'
  };
  function sayWelcome1(home,home1) {
    console.log('Welcome ' + this.firstName + ' ' + this.lastName+" "+home +" "+home1);
  }
let printMyName = sayWelcome1.bind(p61,"macha")
printMyName("lunch")
Function.prototype.mybind=function(...arg){
 let obj =this,
 params = arg.slice(1)
 return function(...agr2){
    obj.apply(arg[0],[...params,...agr2])
 }
}
let printFullName2 = sayWelcome1.mybind(p61,"chicha");
printFullName2("breakfast")

 