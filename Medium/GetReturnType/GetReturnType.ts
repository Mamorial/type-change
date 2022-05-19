type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : never


const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}
type Ak = MyReturnType<typeof fn> // 应推导出 "1 | 2"

type Bk = ReturnType<typeof fn>