const listaDeDestinos  = new Array (
    `Salvador`,
    `Rio de Janeiro`,
    `São Paulo`
)

listaDeDestinos.push(`Curitiba`) //adicionando um novo item a lista

console.log(listaDeDestinos)

listaDeDestinos.splice(1,1) // deletando um elemento da lista, passando como parametro a posição que vai começar a excluir e quantos elementos ela vai excluir

console.log(listaDeDestinos)
console.log(listaDeDestinos[1])