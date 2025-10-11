
function formatInput(input:string | number): string {
    if(typeof input === "string"){
return  input.toUpperCase()
    }else{
        return input.toFixed(2)
    }
}
console.log(formatInput("hello"))
console.log(formatInput(2.33323))