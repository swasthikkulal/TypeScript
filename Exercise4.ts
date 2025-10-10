interface Student{
    id:number,
    username:string,
    email:string,
    isVerified?:boolean,
    lastLogin?:Date
}

function welcomeUser(user:Student): string {
    const varificationStatus = user.isVerified? "✓ Verified" : "⚠ Not verified";
    const loginInfo =  user.lastLogin? user.lastLogin :"No login info"
    return `Welcome back ${user.username} ! ${varificationStatus} ! ${loginInfo}`
}

const student1:Student ={
    id:1,
    username:"swasthik",
    email:"swasthik@gmail.com",
    isVerified:true,
}

const student2:Student={
    id:2,
    username:"virat",
    email:"virat@gmail.com",
    lastLogin:new Date()
}

console.log(welcomeUser(student1))
console.log(welcomeUser(student2))