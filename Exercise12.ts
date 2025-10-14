
function getParameter<T>(first:T, second: T):[T,T] {
    return [first, second];
}


console.log(getParameter("swasthik", "virat"))
console.log(getParameter(20,30))
console.log(getParameter(true, false))