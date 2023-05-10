const nums =[1,2,3,4,5];
console.log(nums.sort(()=>Math.random()-0.5))
// [ 3, 1, 2, 4, 5 ]

const vals =[1,0,null,undefined,"",false];
const hasEmptyVals = vals.every(Boolean)
console.log(hasEmptyVals)

const someEmptyVals2 = vals.some(Boolean)
console.log(someEmptyVals2)

const nonEmptyVals2 = vals.filter(Boolean)
console.log(nonEmptyVals2)

// false
// true
// [ 1 ]

const hasSameElements =(a,b)=>{
    return a.length === b.length && a.every((v,i)=>v===b[i])
}
console.log(hasSameElements([1,2],[1,2]))
console.log(hasSameElements([1,2],[1,3]))
// true
// false