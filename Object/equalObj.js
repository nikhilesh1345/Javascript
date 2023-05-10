const x={
    occupation:"Bounty Hunter",
    genetics:"superb"
 }
 const y={
     occupation:"Bounty Hunter",
    genetics:"superb"
 }
 function isEquivalent(a,b){
     const xProp=Object.getOwnPropertyNames(a)
     const yProp=Object.getOwnPropertyNames(b)
     // console.log(xx,yy)
     // [ 'occupation', 'genetics' ] [ 'occupation', 'genetics' ]
     if(xProp.length!==yProp.length){
         return false;
     }
     for(let i=0;i<xProp.length;i++){
         const propName=xProp[i]
         if(x[propName]!==y[propName]){
             return false
         }
     }
     return true
 }
 console.log(isEquivalent(x,y))