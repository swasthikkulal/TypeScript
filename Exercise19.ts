type Color = "red" | "blue" | "green";
type Size = "small" | "medium" | "large";

type ButtonStyle = `${Color}-${Size}`;

const Button1: ButtonStyle = "red-small";
const Button2:ButtonStyle="blue-large";
console.log(Button1);
console.log(Button2);