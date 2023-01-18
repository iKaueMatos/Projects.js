const frutasArray = ['banana', 'Maça', 'Uva'];

const fruta1 = 'uva';
const fruta2 = 'Uva';
const fruta3 = 'UVA';

console.log(fruta1.toLowerCase() === 'uva') // TolowerCase possibilita você identificar a palavra que esta sendo escrita
    // se ela esta em maiusculo ou minusculo indepedente do resultado você consegue executar e alterar a palavra


const valor = 23.00;
const valorString = 'R$ 23.00';

/* valor.trim(); //'R$ 23.00' Remove todo espaço que foi dado em input por exemplo
valor.trimStart(); // 'R$ 23.00  ' Remove o espaço do começo
valor.trimEnd() // ' R$ 23.00' Remove o espaço do final */

console.log(valor.toFixed()) // Arrendodanda um numero ao maximo

console.log(valorString.toString()) // identifica se e uma string e retorna para o usuario



const real = valor.toLocaleString('es-US', { style: 'currency', currency: 'BRL' }) // Converte uma moeda brasileira por exemplo em real