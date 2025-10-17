type isValidResult<T>= 
T extends string?{isValue:boolean, message:string}:
T extends number?{isValue:boolean, value:number}:
{isValue:boolean}

function isValidStringCheck(data:string): isValidResult<string> {
    const isValue = data.length>0;
    return{
        isValue,
        message: isValue?"valid String":"invalid string"
    }
}

function isValidNumberCheck(data:number): isValidResult<number> {
    const isValue = data>0;
    return{
        isValue,
        value:data
    }
}
console.log(isValidStringCheck("hello"))
console.log(isValidNumberCheck(20));