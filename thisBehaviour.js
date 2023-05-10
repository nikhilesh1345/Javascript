const profile ={
    name:"techsih",
    getName:()=>{
        console.log(this.name)
    }
}
console.log(profile.getName())
// undefined

const profile1 ={
    name:"techsih",
    getName:function(){
        console.log(this.name)
    }
}
console.log(profile1.getName())
// techsih

this.table ="window table";
const cleanTable = function(){
  console.log(`cleaning ${this.table}`)
}
cleanTable()
// cleaning undefined

this.garage ={
  table:"garage table",
  cleanTable(){
    console.log(`cleaning ${this.table}`)
  }
};

this.johnRoom ={
  table:"johnRoom table",
  cleanTable(){
    console.log(`cleaning ${this.table}`)
  }
};
this.garage.cleanTable()
// garage table

// johnRoom.cleanTable()
// johnRoom is not defined