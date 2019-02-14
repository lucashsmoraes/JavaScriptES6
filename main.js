
const arr = [1,2,3,4,5,6]

const newArr = arr.map(item =>  item * 2)

console.log(newArr)

const sum = arr.reduce((total, next) => total + next)

console.log(sum)

const filter = arr.filter(item => item % 2 === 0)

console.log(filter)

const find = arr.find(item => item === 4)

console.log(find)

console.log("------------------------------------------------")
console.log("Testando Webpack")

import { soma } from './funcoes'
console.log(soma(1,2))