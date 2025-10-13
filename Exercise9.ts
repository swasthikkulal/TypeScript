type Currency = "rupees" | "usd" | "euro";
type Categories = "electronics" | "clothing" | "food";

interface Product {
    id:number,
    name:string,
price:number,
currency:Currency,
category:Categories,
instock:boolean
}

interface CartItems{
    product:Product,
    quantity:number
}

class ShoppingCart{
    private items:CartItems[]=[];

    addCart(product:Product, quantity:number=1):void{
        const existing = this.items.find(item => item.product.id === product.id )
        if(existing){
            existing.quantity += quantity;
        }else{
            this.items.push({product, quantity})
        }
        console.log(`product added ${quantity} x ${product.name}`)
    }

    removeItem(productId:number):void{
        this.items = this.items.filter(item=>item.product.id !== productId)
        console.log(`removed ${productId}`)
    }

    getTotal(){
        return this.items.reduce((total, item)=>{
         return   total + (item.product.price * item.quantity);
        },0)
    }

    displayCart():void{
        this.items.forEach(item =>{
             console.log(`- ${item.quantity}x ${item.product.name}: $${item.product.price * item.quantity}`);
        })
           console.log(`TOTAL: $${this.getTotal()}`);
    }
}

const products: Product[] = [
    {
        id: 1,
        name: "TypeScript Book",
        price: 29,
        currency: "usd",
        category: "electronics",
       instock:true
    },
    {
        id: 2, 
        name: "Wireless Mouse",
        price: 45,
        currency: "usd",
        category: "electronics",
        instock:false
    }
];

const cart = new ShoppingCart();
cart.addCart(products[0], 2);    // 2 TypeScript Books
cart.addCart(products[1], 1);    // 1 Wireless Mouse
cart.displayCart();