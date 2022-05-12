type MyExclude<T, U> = {
    [key in keyof T]: T[key] extends U ? never : T[key]
}

type MyExclude2<T, U> = T extends U ? never : T