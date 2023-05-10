let items=[
    {color:"red",type:"tv",age:18},
    {color:"silver",type:"phone",age:71},
    {color:"blue",type:"phone",age:78},
    {color:"green",type:"radio",age:19},
]
let excludes=[
    {k:"color",v:"silver"},
    {k:"type",v:"tv"}
]
const itemsResult= items.reduce((acc,item)=>{
    let result= excludes.some(exclude=> item[exclude["k"]]===exclude["v"]);
    if(!result){
        acc.push(item)
    }
    return acc
},[])