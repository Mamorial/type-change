type MyReadonly<T> = {
   readonly [key in keyof T]: T[key]
}

interface Todo {
    title: string
    description: string
}

const todo: MyReadonly<Todo> = {
    title: 'hello',
    description: 'this is description'
}

todo.title = 'asdf'