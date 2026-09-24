// Exercício 1 — isPar

function isPar(n){
    if(n % 2 == 0){
        return true
    } else{
        return false
    }
}

console.log(isPar(2))
console.log(isPar(7))
console.log(isPar(6))


// Exercício 2 — classificarNota

function classificarNota(nota){
    if(nota >= 7 && nota <=10) {
        return 'Aprovado'
    } else if(nota >= 5 && nota < 7){
        return "Recuperação"
    } else if(nota < 5 && nota >= 0){
        return 'Reprovado'
    } else {
        return "Nota invalida"
    }
}

console.log(classificarNota(8), "=> esperado Aprovado");
console.log(classificarNota(5), "=> esperado Recuperação");
console.log(classificarNota(2), "=> esperado Reprovado");


// Exercício 3 — somarArray

function somarArray(numeros){
    let total = 0

    for(let i = 0; i < numeros.length; i++) {
        total += numeros[i]
    }
    return total
}

console.log(somarArray([10, 20, 30, 40]), "=> esperado 100");
console.log(somarArray([]), "=> esperado 0");
