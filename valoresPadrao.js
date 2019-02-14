function soma(a = 3, b = 6){
    return a + b
}

const soma1 = (a = 5, b = 10) => a + b

console.log(soma(1))
console.log(soma())

console.log(soma1(11))
console.log(soma1())