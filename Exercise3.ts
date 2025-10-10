interface Product{
    id:number,
    name:string,
    price:number,
    category:string,
    stock?:boolean
}

const laptop:Product ={
    id:1,
    name:"asus",
    price:1000,
    category:"Electronics",
    stock:true
}

const book:Product={
    id:2,
    name:"typeScript book",
    price:200,
    category:"book",
}

console.log("Products :", laptop, book)
