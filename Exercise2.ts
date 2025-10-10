// Calculate the cart items

interface CartItem {
    name:string,
    price:number,
    quantity:number
}

function calculateCartTotal(items:CartItem[]):number {
    return items.reduce((total, item)=> total + (item.price * item.quantity),0)
}

const cartitem:CartItem[] =[
    {name:"mobile",price:70000, quantity:2},
    {name:"tv",price:10000, quantity:2}

]
console.log(calculateCartTotal(cartitem))