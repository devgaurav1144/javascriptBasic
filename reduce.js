// reduce() takes all items of the array and reduces them into one single value (like sum, product, etc.)

// It has two parts:

// accum → accumulator (total so far)

// curr → current item in array

// You also gave an initial value of 3

//  initial value must be required because first time accumulator value intialized with initial value.

const numlist = [1,2,3];

const result = numlist.reduce((accum,curr)=>{
    console.log(`Accum Value :${accum} , current Value : ${curr}`);
    return accum+curr
});

console.log(result);