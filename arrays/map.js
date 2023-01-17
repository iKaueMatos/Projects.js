// Map possibilita percorremos uma lista com valores ja definidos e dobrarmos a mesma  e retorna um novo conteudo (valor)


//Dobrando os valores de uma array com Map
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];  

const numerosemDobro = numeros.map((valor,indice,array)=>{
    return valor * 2 //Map empre vai ter o mesmo tamanho do array original
})

console.log(numerosemDobro)
console.log()

//Para cada elemento: 
//Retorne apenas uma string com o nome da pessoa 
//remova apenas a chave 'nome' do objeto
//Adicione uma chave id em cada objeto




// 1-Retorne apenas uma string com o nome da pessoa 
const pessoas =[
    {nome: 'kaue',idade: 19},
    {nome: 'luiz',idade: 23},
    {nome: 'eduardo',idade: 50},
    {nome: 'roberto',idade: 60},
    {nome: 'caique',idade: 30},
];

const nomes = pessoas.map((obj) => {
    return obj.nome;
})

console.log(nomes)

// 2-remova apenas a chave 'nome' do objeto  


const idade = pessoas.map(obj => obj.idade)

console.log(`retornando apenas a idade:`,idade)


//3- Adicione uma chave id em cada objeto

const id = pessoas.map((obj,indice) =>{
    const newObj = {...obj}; //copia da lista original
    newObj.id = indice + 1;
    return newObj;

})

console.log(id)

