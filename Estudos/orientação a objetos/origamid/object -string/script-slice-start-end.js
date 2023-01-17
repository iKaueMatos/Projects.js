const trasacao1 = 'Deposito de cliente';
const trasacao2 = 'Deposito de fornecedor'
const trasacao3 = 'Taxa de camisas';

console.log(trasacao3.slice(0, 3))

//Retorno
// com indice começando do 0,1,2,3
// saida = dep


//Podemos fazer dessa maneira também 


//Declarando o metodo dessa forma estamos pegando a palavra de traz para frente
console.log(trasacao1.slice(-5))


//Indexof = Responsavel por retorna o index(indice) da palavra a posição que uma determinada letra esta 
console.log(trasacao1.indexOf('A'))


//Caso queremos pega o ultimo index(indice da nossa palavra podemos utilizar o) lastIndexOf

console.log(trasacao2.lastIndexOf('na'))