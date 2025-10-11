function processValue(value: string |number | boolean) {
    if (typeof value === "string") {
        console.log(value.toUpperCase())
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2))
    } else {
        console.log(value?"Yes":"No")
    }
}
processValue("abc")
processValue(1.023)
processValue(true)

