// Factory function (função fabrica)

function criaPessoa(nome,sobrenome,a,p){
    return{
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter - Define ou atualiza o seu valor

        set nomeCompleto(valor){
            valor = valor.split(' ') 
            this.nome = valor.shift(); //Assim como o pronome “ele” é usado para se referir ao 
            //antecedente (substantivo a que um pronome se refere), a palavra-chave this é similarmente usada 
            //para se referir a um objeto a que a função (onde this é usado) está vinculada. Esta palavra-chave não se refere apenas ao objeto, mas também contém o valor do objeto.
            this.sobrenome = valor.join(' ')
           
        },

        fala:function(assunto= 'falando sobre mortadela'){
            return `${this.nome} esta falando ${assunto}`;
        },
        altura:a,
        peso: p,
        //Getter - Obter somente o valor - ou retorna-lo 
        get imc(){
            const indice = this.peso / (this.altura ** 2); 
            return indice.toFixed(2); // basicamente o tofixed possibilita que arrendodamos um numero a partir de certa quantidade de casas decimais..
            // ou converta um string em numero
        }
    };
}

//Normal somente getter
const p1 = criaPessoa('Kauê','Matos',1.80,80);
const p2 = criaPessoa('Pedro','Não sei',1.90,90);
const p3 = criaPessoa('NÃO SEI','kkk',1.20,100);

console.log(p3.imc)



// getter -- setter
/* p1.nomeCompleto = 'Kauê de matos oliveira // Setter';
console.log(p1.nome);
console.log(p1.sobrenome)
console.log(p1.fala) */


