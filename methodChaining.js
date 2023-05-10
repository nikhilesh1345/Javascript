let x={
    a(){
        return this;
    },
    b(){
        return this;
    },
}
console.log(x.a().b().a().a());
// { a: [Function: a], b: [Function: b] }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var obj = function(){
    this.i=0;
    this.add = function(i){
        this.i+=i;
    };
    this.substract = function(i){
        this.i-=i;
    };
    this.print = function(){
        console.log(this.i)
    };
}
var t = new obj()
t.add(3);
t.substract(2);
t.print()
1

var obj2 = function(){
    var i=0;
    var add = function(j){
           i+=j
           return this;
    };
    var substract = function(j){
           i-=j
           return this;
    };
    var print = function(){
        console.log(i)
    };
    return {add:add,substract:substract,print:print};
}
var y = new obj2();
y.add(3).substract(2).print()
// 1