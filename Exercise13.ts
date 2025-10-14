
interface identifiable{
    id: string | number;
}

function getById<T extends identifiable>(items: T[], id: string | number): T | undefined {
    return items.find(item=> item.id === id);
}

const user = [
    {id:1, name:"swasthik"},
    {id:2, name:"virat"}
]

const product = [
    {id:"p1", name:"trimmer"},
    {id:"p2", name:"tv"}
]

console.log(getById(user,2))
console.log(getById(product, "p1"));