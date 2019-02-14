"use strict";

var usuario = {
  nome: 'Lucas',
  idade: 23,
  endereco: {
    cidade: 'Florianópolis',
    estado: 'Sc'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(idade);
console.log(nome);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log('mostraNome: ', nome);
}

mostraNome(usuario);
