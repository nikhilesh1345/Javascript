// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let name = person.name;
// let country = person.country;
// let job = person.job;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer"

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let person1 = {name1: "Sarah", country1: "Nigeria", job1: "Developer"};

// let {name1, country1, job1} = person1;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let {name2, country2, job2} = {name2: "Sarah", country2: "Nigeria", job2: "Developer"};

// console.log(name2);//"Sarah"
// console.log(country2);//"Nigeria"
// console.log(job2);//Developer"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"}; 
// let name, country, job;

// {name, country, job} = person;

// console.log(name);// Error : "Unexpected token ="

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
// let name, country, job;

// ({name, country, job} = person);

// console.log(name);//"Sarah"
// console.log(job);//"Developer"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const personOne={
    name:"ram",
    age:24,
    address:{
        city:"somewhere",
        state:"one of them"
    }
}
const personTwo={
    name:"sita",
    age:23,
    address:{
        city:"somewhere2",
        state:"one of them2"
    },
    favouriteFood:"cupCake"
}
// const{name , age}= personTwo
// console.log(name)
// console.log(age)

// changename 
// const {name:firstName,age}=personTwo
// console.log(firstName)
// setting key val 
// const{name,age,favouriteFood="rice"}=personTwo
// console.log(favouriteFood)

//  using spread operatort 
// const {name:firstName,...rest}=personTwo
// console.log(firstName)
// console.log(rest)

//  if you want access unknow
// const {name:firstName,address:{street}}=personOne
// console.log(street)

// if you want access which is there
// const{address:{city}}=personOne
// console.log(city)

//  if you want to merge two object in one 
const personThree=[{...personTwo}]
console.log(personThree[0].name)

let prop = "name";

let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};

console.log(foo);//"Sarah"

//Q10
// var foo = {n: 1};
// var bar = foo;
// console.log(foo === bar) //true
// foo.x = foo = {n: 2};

// console.log(foo) //ans: {n: 2}
// console.log(bar) //ans: {n: 1, x: {n: 2}}
// console.log(foo === bar) //false


// Because the object variable only contains the pointer of memory location of that object, when we declare var bar = foo, both foo and bar point to the same object.

// In the next logic, foo = {n:2} is running first where foo is assigned to a different object. Hence, foo has a pointer to a different object. At the same time, foo.x = foo is running, foo here still contains the old pointer. so the logic is similar with


