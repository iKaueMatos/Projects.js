
const relogio_function = () =>{

    const agora = new Date();
    const horario = corrigir_horario(agora.getHours()) + ':' + corrigir_horario(agora.getMinutes()) + ':' + corrigir_horario(agora.getSeconds());
    const relogio = document.querySelector(".display");
    relogio.textContent = horario


    function corrigir_horario(numero){
        if (numero < 10){
            numero = '0' + numero;
        }
        return numero;
    }
  
   

}

relogio_function();
setInterval(relogio_function,1000)






