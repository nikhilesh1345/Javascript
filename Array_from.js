let str = "hello";
console.log([...str])
// [ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from(str))
// [ 'h', 'e', 'l', 'l', 'o' ]


console.log(Array.from({length:5},(v,i)=>i*i))
console.log(Array.from({length:5},(v,i)=>""))
// [ 0, 1, 4, 9, 16 ]
// [ '', '', '', '', '' ]

let ary =[1,1,2];
console.log(Array.from(new Set(ary)))
console.log([... new Set(ary)])
// [ 1, 2 ]
// [ 1, 2 ]

const func = function(){
    console.log(Array.from(arguments).join(""))
}
console.log(func("g","a","t"))
// gat