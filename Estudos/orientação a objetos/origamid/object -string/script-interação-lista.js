const transacao2 = 'Deposito de fornecedor';
const trasacao3 = 'Taxa de camisetas';

const preco = 'R$99,00';

const listaPrecos = ["R$99", "R$199", "R$1200"];

listaPrecos.forEach((item) => {
    console.log(item.padStart(20, '-')) // padStart ou padEnd  - E como se fosse o padding do nosso CSS 
        //onde possibilita colocarmos um espaçamento interno no nosso elemento
})

const frase = 'Ta';

frase.repeat(5); // repete a frase 5 vezes


//Str.replace (regexp|Substr,newstr\Function)

let listaItens = 'Camisas bones calças bermudas vestidos saias';
listaItens = listaItens, replace(/[]+/g, ',')

let preco2 = 'R$ 1200,43';
preco2 = preco2.replace(',') // Replace possibilita alterarmos frases,argumentos ja dados em uma variavel a primeira forma de fazermos isso
    // E pelo primeiro argumento onde possibilita selecionar a frase que queremos alterar e no segundo possibilita alterarmos a mesma (para a respectiva frase(nova))




const arraylista = listaItens.split('') // basicamente o metodo split retorna uma lista da nossa variavel onde contem strings