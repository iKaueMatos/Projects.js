// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacao = [{
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

const taxaTotal = 0;
const recebimentoTotal = 0;

transacao.forEach((item) => {
    const numeroLimpo = item.valor.replace('R$', '')
    if (item.descricao.includes('Taxa') === 'taxa') {
        taxaTotal += numeroLimpo

    } else {
        recebimentoTotal = recebimentoTotal + numeroLimpo

    }
})

console.log(recebimentoTotal)
console.log(taxaTotal)






// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];