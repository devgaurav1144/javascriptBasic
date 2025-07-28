const map = new Map();
map.set("In","India");
map.set("Aus","Austalia");

// console.log(map);

for (const [key,value] of map) {
    console.log(key,":->",value);
}


// Note: for..of loop not work for object


const num = [1,2,3,4,5,6,7,8,9];

let result = num.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40);

console.log(result);