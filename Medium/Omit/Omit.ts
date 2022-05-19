type MyExclude<T, U> = T extends U ? never : T
type MyOmit<T, K extends keyof T> = {
    [key in MyExclude<keyof T, K>]: T[key]
}


interface Todo {
    title: string
    description: string
    completed: boolean
}
type TodoPreview = MyOmit<Todo, 'description' | 'title'>
const todo: TodoPreview = {
    completed: false,
}