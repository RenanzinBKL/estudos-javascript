// Basicamente return funciona para DEVOLVER um valor, diferente de console.log que serve para MOSTRAR um valor.
// OBS: Quando o JS le o return a função acaba naquele ponto.

// Exercicio 1:
function multiplicar(a, b){
    return a * b
}

const resultado = multiplicar(8, 5)

console.log(resultado)

// Exercicio 2:
function verficarMaiorIdade(idade){
    if(idade >= 18) {
        return 'Maior De Idade.'
    } else if(idade < 0){
        return 'Idade Invalida.'
    } else {
        return 'Menor De Idade.'
    }
}

const verificar = verficarMaiorIdade(18)

console.log(verificar)

// Exercicio 3:
// Exercício 3:
function calcularPrecoFinal(preco, desconto) {
    const valorDesconto = preco * desconto / 100
    return preco - valorDesconto
}

const valor = calcularPrecoFinal(200, 20)

console.log(valor)