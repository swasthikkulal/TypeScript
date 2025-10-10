interface User{
    name:string,
    age:number,
    hobbies:string[]
}


function displayUser(user:User):string {
    console.log(user.name)
    return user.age + "years old"
}
let userData:User ={
    name:"swasthik",
    age:23,
    hobbies:["coding", "sleeping","coding"]
}


console.log(displayUser(userData))