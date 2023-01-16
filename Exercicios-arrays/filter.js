// filter - Possibilita filtrarmos um dado da nossa array 


// Retorne os numeros maiopres que 10 

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]



const numerosFiltrados = numeros.filter(numerosMaiores = (valor) => {   //Função de callback,retornando numeors maiores que 10;
    return valor > 10;
});

console.log(numerosFiltrados)


// Retorne as pessoas que tem nome com 5 letras ou mais
//Retorne as pessoas cujo mais de 50 anos 
//Retorne as pessoas cujo nome termina com letra a

const pessoas =[
    {nome: 'kaue',idade: 19},
    {nome: 'luiz',idade: 23},
    {nome: 'eduardo',idade: 50},
    {nome: 'roberto',idade: 60},
    {nome: 'caique',idade: 30},
];

const pessoasFiltrados = pessoas.filter(maior = (valor) =>{
    return valor.nome.length >= 5
    
})

console.log(pessoasFiltrados)

const pessoasmaior = pessoas.filter(maioridade = (valor) =>{
    return valor.idade.length > 50
    
});

console.log(pessoasmaior)

const pessoascomLetraA = pessoas.filter(letraA = (valor) =>{
    return valor.nome.toLowercase().endsWith('o')
    
});

console.log(pessoascomLetraA)





