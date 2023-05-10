let user ={}
let member = new Object()
// console.log(user,member)
// {} {}
member.ramu ="food"
member.raju = "cake"
member["year"]=1997
member["we are team ?"] ="yes we are dude"
console.log(member)
// {
//     ramu: 'food',
//     raju: 'cake',
//     year: 1997,
//     'we are team ?': 'yes we are dude'
//   }
console.log(member.raju)
// cake
console.log(member["raju"])
// cake

function showProps(obj,objName){
    let result="";
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            result+=objName + "." + i + "=" + obj[i]+"\n"
        }
    }
    return result
}
console.log(showProps(member,"member"))
// member.ramu=food
// member.raju=cake
// member.year=1997
// member.we are team ?=yes we are dude

const myHonda ={color:"red",wheel:4,engine:{cylinders:4,size:2.2}}

// create constructor fuction 
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}
let myCar = new Car("Chevy","aliv",1993)
// console.log(myCar)
console.log(myCar.hi = "chai")
console.log(myCar)
// Car { make: 'Chevy', model: 'aliv', year: 1993, hi: 'chai' }

const Animals ={
    type:"Invertebrates",
    displayType : function(){
        console.log(this.type)
    }
}

const animal = Object.create(Animals)
animal.displayType()
// Invertebrates
var ourStorage ={
    "desk":{
        "drawer":"stapler"
    },
    "cabinet":{
        "top drawer":{
            "folder1":"a file",
            "folder2":"secrets"
        },
        "bottom drawer":"soda"
    }
}
console.log(ourStorage.cabinet["top drawer"].folder2)
