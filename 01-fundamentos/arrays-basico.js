// É uma estrutura que permite armazenar vários valores em um única coleção.
const nomes = ['Renan', 'Ryggz', 'Rebeca']

// Os indices do Array começam pelo 0, então Renan = 0, Ryggz = 1...
console.log(nomes[1])

// Alterar valores, caso eu queira trocar o nome de alguem, só usar:
nomes[1] = 'Toscano'
// Assim alterando o indice 1 de Ryggz para Toscano no Array.
console.log(nomes[1])

// Para adicionar um indice se usa o push
nomes.push('Nogueira')
// Agora o indice 3 sera Nogueira.
console.log(nomes[3])

// Para retirar o ultimo indice se usa:
nomes.pop()
// Agora o indice Nogueira deixou de existir e vira undefined.
console.log(nomes[3])
