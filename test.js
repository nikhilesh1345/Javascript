var products=[{id:1,productName:'Tv',price:5000},{id:2,productName:'Tv1',price:3000},
{id:3,productName:'Tv2',price:5000}]
products.splice(1,2)                                 //(startIndex,noOfElementsToRemove)
console.log(products)
products.splice(2,0,{id:3,productName:'Tv2',price:5000})   //(startIndex,noOfElementsToRemove,ElementToInsert)
console.log(products)
products.splice(3,1,{id:400,productName:"samsung phone",price:670})//Replacing element
console.log(products)

var prices=[700,40,80]
prices.push(500)
console.log(prices)
console.log(prices.pop())

console.log(products.every((p)=>{return p.price>=1000}))  //every return true if all elements are matching

console.log(products.filter((p)=>{return p.price>=3000})) //filter returns all matching elements

console.log(products.find((p)=>{return p.price>=2000}))   //find return first matching element

console.log(products.findIndex((p)=>{return p.price>=2000}))//findIndex return index of first matching element

//console.log(products.forEach((p)=>{p.increaseQuantity()})) //forEach executes the function for Each element of array

let product1=[firstProduct={id:1,productName:'Tv',price:5000}] //includes
console.log(product1.includes(firstProduct))

var updatedProducts =products.map((p)=>{return p.price*1000 }) //map
console.log(updatedProducts)

var updatedProducts1=products.flatMap((p)=>{
var p2={...p,price:p.price+p.price*10/1000};return [p,p2];});   //flatMap
console.log(updatedProducts1)

var a =[10,[20,30],40,50] 
var b =a.flat()                                                  //flat
console.log(b)

const c=b.slice(1,2)                       //slice(startIndex,endIndex)
console.log(c)

var arr=[10,20,30,40,50]
var sortedArr=arr.sort(function(a,b){return a-b})      //sort
console.log(sortedArr)
