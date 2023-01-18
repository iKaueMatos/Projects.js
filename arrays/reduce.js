//Some todos os numeros(reduce)
//Retorne um array com os pares filter
//Retorne um array com o dobro dos valores(Map)

const numeros = [1, 2, 3, 4, 5, 6, 87, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    if (valor % 2 === 0)
        console.log("O numero e par", valor);
    return acumulador;
}, 0)


console.log("Resultado total que foi efetuado o calculo", total);