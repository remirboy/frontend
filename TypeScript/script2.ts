//приведение
let a: unknown = 'das'
let b: string =<string>a
console.log(b)

//объединение
type BIS = number|string|boolean
let c: BIS =1
c = 'string'
c = true
console.log(c)

//пересечение
type ALL = {string: string}&{boolean: boolean}&{number: number}
let all: ALL ={string:'some',boolean:true,number:1}
console.log(all)

//enum
const enum H{
    A=22,
    B=21
}
console.log(H.A,H.B)
