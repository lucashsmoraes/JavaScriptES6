// REST

const usuario = {
    nome: 'Lucas',
    idade: 31,
    empresa: 'home'
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

const array = [1,2,3,4]

const [ a, b, ...c] = array
console.log(a)
console.log(b)
console.log(c)

function soma(a, b, ...params) {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1,2,3,4,5))


// SPREAD

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

const usuario1 = {
    nome: "lucas",
    idade: 30,
    empresa: 'home'
}
const usuario2 = { ...usuario1, nome: "Henrique" }
console.log(usuario2)