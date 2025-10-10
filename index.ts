console.log("DAY 1 OF TYPESCRIPT")

// string
let username:string = "swasthik";
console.log("username:", username);

// number
let age:number = 23;
let phone:number = 123456789;
console.log("phone:", phone, "age:", age);

// boolean
let isActive:boolean = true;
let hasSubscription:boolean= false;
console.log(isActive, hasSubscription);

// arrays
let languages:string[]= ["javascript", "python","typescript"];
let scores:number[] = [45,56,67];
console.log(languages)
console.log(scores)

// any type
let dynamicValue:any = "we can change the value";
dynamicValue = 40;
dynamicValue = true;
console.log(dynamicValue)