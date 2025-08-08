let myDate = new Date("01-14-2022")
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toJSON());

// console.log(typeof myDate)

// console.log(myDate.toLocaleString());

// const myTimestamp = Date.now();
// console.log(myTimestamp) // mili second
// console.log(Math.floor(myDate.getTime()/1000)) //second 

const newDate = myDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate)