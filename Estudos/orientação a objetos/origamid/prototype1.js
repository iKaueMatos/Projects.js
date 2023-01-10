function Pessoa(nome,idade){
 this.nome = nome;
 this.idade = idade;
 this.abracar = function(){
     // Basicamente essa instancia sera criada toda vez que criamos um objeto
    return 'Abraçou' 
 }
 this.andar = function(){
    return 'andar'
 }
}

//Basicamente quando colocamos o prototype o javasScript criara somente um vez a função no nosso documento
// e que o objeto criado (novo) tera acesso a essa função no caso esse objeto const kaue = new Pessoa('kaue',19)

Pessoa.prototype.andar = function(){
    return this.nome  + 'pessoa andou';
}

const kaue = new Pessoa('Kauê',19); // 

console.log(Pessoa.prototype);
console.log(kaue.prototype);

