const map = new Map();
map.set("In","India");
map.set("Aus","Austalia");

// console.log(map);

for (const [key,value] of map) {
    console.log(key,":->",value);
}


// Note: for..of loop not work for object