let arr=["arr","arr2"]



let p61 = {
    firstName: 'Anna',
    lastName: 'Namaste javascript',
    printFullName:function(){
                console.log("greeting" + ' ' + this.firstName + ' ' + this.lastName);
            }
  };
  let obj2 ={
    firstName:"its me from"
  }
//   never call
// obj2 inheriting from p61
obj2.__proto__ = p61
console.log(obj2.printFullName())
//   attached object to your object
// arr._proto_.length = Array.prototype
// arr._proto_._proto_ = Object.prototype
// arr._proto_._proto_._proto = null
Function.prototype.mybind=function(){
    console.log("sdffggh")
}
function fun(){

}
// now function can access mybind methode
fun.mybind()