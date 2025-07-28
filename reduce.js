const numlist = [1,2,3];

const result = numlist.reduce((accum,curr)=>{
    console.log(`Accum Value :${accum} , current Value : ${curr}`);
return accum+curr
},3);

console.log(result);