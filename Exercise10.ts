// generics

function identity<T>(value:T):T {
    return value;
}

const stringType = identity("hello");
const numberType = identity(123);
const booleanType = identity(true)
console.log("result", stringType, numberType, booleanType)