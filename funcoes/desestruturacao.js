const usuario = {
    nome: 'Lucas',
    idade: 23,
    endereco: {
        cidade: 'Florianópolis',
        estado: 'Sc'
    }
}

const { nome, idade, endereco: { cidade } } = usuario

console.log(idade)
console.log(nome)
console.log(cidade)

function mostraNome({ nome }){
    console.log('mostraNome: ', nome)
}

mostraNome(usuario)