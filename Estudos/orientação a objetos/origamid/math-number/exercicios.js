//Retorna um numero aleatorio entre 1050 e 2000

const numero = Math.floor(Math.random(1000) * 2000);

console.log(numero) // retornando numer aleatorio


//Retorne o maior numero da lista abaixo

const numeros = '4,5,20,8,9';

const arrayNumeros = numeros.split(',')

const numeroMaximo = Math.max(...arrayNumeros)

console.log(numeroMaximo)


//Crie uma funçao para limpar os precos e retornar os numeros com centavos 
//arrendodados e depois retorne a soma total

const listaPrecos = ['R$ 59,99', 'R$ 100,22', 'R$ 230', 'R$ 200']


let preco = listaPrecos;

function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace('.', '.');
    preco = +preco.toFixed(2)
    return preco
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco)
})



limparPreco(listaPrecos)