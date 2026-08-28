// Alguns exercicios basicos
function soma(a, b){
    console.log(a + b)
}

soma(11,9)


function apresentar(nome, idade){
    console.log(nome + ' tem ' + idade + ' anos.')
}

apresentar('Renan', 18)


function podeDirigir(idade){
    if(idade >= 18){
        console.log('Pode dirigir.')
    } else{
        console.log('Não pode dirigir.')
    }
}

podeDirigir(3)