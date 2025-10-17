type Color1= "primary" | "secondary" | "accent";
type Shade = "light"|  "dark"| "default";
type Colorvariables= `color-${Color1}-${Shade}`
function cssValues(color:Color1, shade:Shade): Colorvariables {
    return `color-${color}-${shade}`
}

const primaryColor= cssValues("primary","dark");
const secondaryColor = cssValues("secondary","light");

console.log(
    `:root {
    --${primaryColor}:#007bff;
    --${secondaryColor}:#ff6b6b;
    }`
)
