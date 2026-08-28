// Exercicio 1:
const frutas = ['Maçã', 'Banana', 'Uva']

frutas.push('Manga')
frutas.shift()

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

// Exercicio 2:
const jogadores = ['Renan', 'Pedro', 'Lucas']

jogadores[1] = 'João'

console.log(jogadores.length)

// Exercicio 3:
const tecnologias = ['HTML', 'CSS', 'JavaScript']
// Usando isso vai me dizer com true ou false se a tecnologia que eu pedi esta dentro da const tecnologias.
console.log(tecnologias.includes('JavaScript'))

// Exercicio 4:
const numeros = [5, 10, 15, 20, 25]
let resultado = 0
for(let n = 0; n < numeros.length; n++){
    resultado = resultado + numeros[n]
}
console.log(resultado)
