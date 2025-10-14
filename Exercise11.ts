
function getFirstElement<T>(array:T[]): T | undefined {
    return array[0];
}

function getReverseArray<T>(array:T[]): T[] {
    return [...array].reverse();
}

const stringArray = ["mango","apple", "grapes"];
const numberArray = [1,2,3];

console.log(getFirstElement(stringArray));
console.log(getReverseArray(numberArray));