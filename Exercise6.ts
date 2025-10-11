type Id = string | number;
type status = "active" | "inactive" | "pending";
type coordination = [number, number]

let userId:Id = "abc123";
let userStatus:status = "active";
let location1:coordination = [0.123597,2.15649] 

console.log(`${userId} is ${userStatus}`)