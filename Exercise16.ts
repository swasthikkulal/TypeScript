
type isString<T>= T extends string ? true : false;
type test1 = isString<"hello">
type test2 = isString<42>


type ArrayElement<T>= T extends (infer U)[] ? U :never

type nonNullable<T>= T extends null | undefined ? never : T