let li = document.querySelector('li'); // Nodelist
li = Array.from(li); //Array

const carros = {
    0: 'fiat',
    1: 'Honda',
    2: 'Ford',
    length: 4,
}

const carrosArray = Array.from(carros) // Array.from e responsavel por transformar um 
    //objeto que se parece com uma lista,transformar ela por completo em uma ARRAY

Array.of(10) //[10]
Array.of(1, 5, 6, 8, 9) // [1,5,6,8,9]