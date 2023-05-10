let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  function unique(arr) {
    /* your code */
  }
  
  let strings1 = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O
  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  
  alert( unique(strings1) ); // Hare, Krishna, :-O

  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  alert( getAverageAge(arr) ); // 28
  let arr2 = [1, 2, 3];

shuffle(arr2);
// arr = [3, 2, 1]

shuffle(arr2);
// arr = [2, 1, 3]

shuffle(arr2);
// arr = [3, 1, 2]
// ...
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john1 = { name: "John", age: 25 };
  let pete1 = { name: "Pete", age: 30 };
  let mary1 = { name: "Mary", age: 28 };
  
  let arr1 = [ pete, john, mary ];
  
  sortByAge(arr);
  
  // now sorted is: [john, mary, pete]
  alert(arr1[0].name); // John
  alert(arr1[1].name); // Mary
  alert(arr1[2].name); // Pete

  let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john, pete, mary ];

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary