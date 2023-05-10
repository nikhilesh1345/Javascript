this.table = "hello"
console.log(this.table)  
// hello
this.garage ={
  table:"garage table"
}
console.log(this.garage.table)
// garage table

let johnRoom ={
  table:"john table"
}
// console.log(this.johnRoom.table)
// error

console.log(johnRoom.table)
// john table

this.table ="window table";
const cleanTable = function(){
  console.log(`cleaning ${this.table}`)
}
cleanTable()
// cleaning undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

this.table1 ="window table";
const cleanTable1 = function(soap){
  console.log(`cleaning ${this.table1} using ${soap}`)
}
cleanTable1.call(this,"soap")
// cleaning window table using soap

// cleaning undefined

this.garage1 ={
  table:"garage table",
};

this.johnRoom1 ={
  table:"johnRoom table",
};
let johnRoom2 ={
    table:"johnRoom2 table",
  };
cleanTable1.call(this.garage1,"lunch")
cleanTable1.call(this.johnRoom1,"lunch")
cleanTable1.call(johnRoom2,"lunch")
// cleaning garage table using lunch
// cleaning johnRoom table using lunch
// cleaning johnRoom2 table using lunch