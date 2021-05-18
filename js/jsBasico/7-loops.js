const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = false
const destino = "São Paulo"

console.log("\n Destinos possiveis")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0

while (contador < 3) {
    if (destino == listaDeDestinos[contador]) {
        temPassagemComprada = true
        break
    }
    contador += 1
}

if (temPassagemComprada && podeComprar) {
    console.log('Boa Viagem')
}else {
    console.log('Passagem não pode ser comprada')
}

for(let cont = 0; cont < 3; cont++) {
    if(listaDeDestinos[cont] == destino) {
        temPassagemComprada = true
        break
    }
}