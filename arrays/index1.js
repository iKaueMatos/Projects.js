const nomes = ['Eduardos','Maria','Kauê'];

nomes[2] ='joao' // Possibilita alterar-mos a lista e escolhermos o indice desejado
// para adicionar um novo nome

console.log(' 1- Escolhendo a posição do nosso novo valor(variavel na array por meio do indice),',nomes);

const del = ['Eduardos','Maria','Kauê'];

del[2] ='joao' // Possibilita alterar-mos a lista e escolhermos o indice desejado
// para adicionar um novo nome

delete del[2];//Deleta o nome inserido no indice 2;
console.log();
console.log('2 - Deletando o novo valor inserido na nossa array',del);
console.log();
//Array literal
const literal = new Array('Kauê de matos oliveira','Desconhecido','Não sei o nome');

console.log('3 - Array literal com construtor NEW',literal)

//Array são dados por referencia 


const  referencia = new Array('Não sei qual e o seu nome','nunca nem vi')
const novo = referencia;
//Basicamente tudo que fazermos na nova variavel que esta recebendo a variavel de array,acaba refletindo
//Nela mesmo então no caso se fizermos algo na variavel antiga ira refletir na variavel nova e o que fizermos na variavel nova ira refletir na variavel antiga

//Caso quisermos evitar esse tipo de problema podemos fazer um express operetor onde possibilita mudar a variavel nova sem atingir a antiga

novo.pop();

console.log(referencia)


// Metodo 1 

// Shift - possibilita removermos os primeiros dados da nossa array e retorna-los só que ele também ira delocar 
//os dados da nossa lista então por exemplo;

//const arrayDelocada = new Array('ola mundo','delocada')
//console.log(refernecia.shift())

//Retorna:
// ['descolocando']




//Metodo 2

//Temos tambem como adicionar dados na nossa lista por meio do metodo push
//por exemplo:
//                    0          1
// const nomes = ['nao sei','kaue'];
//nomes.push('novo valor');
//console.log(nomes)

//Retornando: 
//     0         1        2 
// ['nao sei','kaue','novo valor'];



//Metodo 3 

 
//Adicionando um daodo no indice 0 para fazermos isso basta seguirmos o exemplo a seguir

//Por exmeplo; 

//const zero = new array('nao sei','nunca nem vi')
//zero.unshift('novo valor')

//console.log(zero)

//Retorno; 
//['novo valor','nao sei','nunca nem vi']


//Metodo 4

//Fatiando uma lista com slice

//const fatiamento = new array('nao sei','nunca nem vi','Novo nuca nem vi você')
//fatiameto.slice(1,3)

//console.log(fatiamento)

//Retorno; 
//['nao sei','nunca nem vi']


//Metodo 5

//Fatiando uma lista com slice

//const adicionar = new array('nao sei','nunca nem vi','Novo nuca nem vi você')
//const add = adicionar.join('-')

//console.log(add)

//Retorno; 
//nao sei-nunca nem vi-Novo nuca nem vi você


// const a1 = [1,2,3]

// const a2 = [5,4,3]

// const a3 = [6,7,8]

//const a4 = a1.concat(a2,[7,8,9],'kaue')

//Basicmente dessa forma estou concatenando toda a lista:

//Retorno;

//[1,2,3,7,8,9,'kaue']