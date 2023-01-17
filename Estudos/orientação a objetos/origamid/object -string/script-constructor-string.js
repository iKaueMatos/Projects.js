const comida = 'Pizza';
const agua = new String('agua')

comida.length
console.log(agua.length)

comida[0]


//str.includes(search,position)

//Procura pela string exata dentro de outra string.A procuta e case sensitive.


const fruta = 'banana';
const lista_frutas = Array('melancia,banana,laranja');


if (lista_frutas == fruta.includes(lista_frutas)) {
    console.log('IGUAL')
} else {
    console.log('diferente')
}


//StartsWith - se começa com determinada palavra 
//Endwith - se termina com determinada palavra