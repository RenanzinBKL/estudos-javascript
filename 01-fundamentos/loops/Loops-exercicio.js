//Exercicio 1:
for(let i = 10; i > -1; i--){
    console.log(i)
}

// // Exercicio 2:
for(let i = 0; i < 21; i += 2){
    console.log(i)
}

// // Exercicio 3:
const linguagens = ['JavaScript', 'Python', 'Java', 'C#', 'PHP']

for(let l = 0; l < linguagens.length; l++){
    console.log('Linguagem: ' + linguagens[l])
}

// Exercicio 4:
const numeros = [4, 17, 8, 25, 3, 12]

for(let n = 0; n < numeros.length; n++){
    if(numeros[n] > 10) {
        console.log(numeros[n])
    }
}

// Exercicio 5:
const valores = [10, 20, 30, 40]

let resultado = 0
for(let v = 0; v < valores.length; v++){
    resultado = resultado + valores[v]
    console.log(resultado)
}