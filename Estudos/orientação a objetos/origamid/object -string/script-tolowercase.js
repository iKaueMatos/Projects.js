const frutasArray = ['banana', 'Maça', 'Uva'];

const fruta1 = 'uva';
const fruta2 = 'Uva';
const fruta3 = 'UVA';

console.log(fruta1.toLowerCase() === 'uva') // TolowerCase possibilita você identificar a palavra que esta sendo escrita
    // se ela esta em maiusculo ou minusculo indepedente do resultado você consegue executar e alterar a palavra


const valor = 'R$ 23.00';

valor.trim(); //'R$ 23.00' Remove todo espaço que foi dado em input por exemplo
valor.trimStart(); // 'R$ 23.00  ' Remove o espaço do começo
valor.trimEnd() // ' R$ 23.00' Remove o espaço do final