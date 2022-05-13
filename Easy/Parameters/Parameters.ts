type MyParameters<T extends (...args: any) => any> = T extends (...args: infer R) => any ? R : never

type c = Parameters<any>