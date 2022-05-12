import {Equal} from "@type-challenges/utils";

type Includes<T extends any[], U> = T extends [infer A, ...infer B] ? Equal<U, A> extends true ? true : Includes<B, U> : false
// type Includes<T extends any[], U> = U extends T[number] ? true : false
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana', string], 'Dio'> // expected to be `false`


type isEqual<A, B> = (<T>() => T extends A ? true : false) extends (<T>() => T extends B ? true: false) ? true : false

type test = isEqual<'a', 1212>