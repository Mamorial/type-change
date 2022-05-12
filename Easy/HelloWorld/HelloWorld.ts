import {Equal, Expect} from "@type-challenges/utils";

type HelloWorld = string

const str:HelloWorld = 'this is string'

type test = Expect<Equal<HelloWorld, string>>
