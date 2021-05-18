const materias = new Array (
    `Português`,
    `Matematica`,
    `Fisíca`,
    `Biologia`
)

const notas1 = new Array (
    8,
    7,
    7.5,
    8
)
const notas2 = new Array (
    8,
    7,
    7.5,
    8
)
const media = new Array ()

for (i = 0; i < materias.length; i++) {
    media.push((notas1[i] + notas2[i]) / 2)
}

for (i = 0; i < materias.length; i++) {
    console.log(`Em ${materias[i]} você obteve a média de: ${media[i]}`)
}