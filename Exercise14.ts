
class DataStore<T>{
    private data: T[] =[];

    addItem(item:T):void{
       this.data.push(item);
    }

    getById(index:number):T | undefined{
        return this.data[index];
    }

    getAll():T[]{
        return [...this.data];
    }
}

const stringData = new DataStore<string>
stringData.addItem("hello");
stringData.addItem("world");

const numberData = new DataStore<number>
numberData.addItem(12);
numberData.addItem(10);

console.log("string data", stringData.getAll())
console.log("number data", numberData.getAll())
console.log("get by id", stringData.getById(1))