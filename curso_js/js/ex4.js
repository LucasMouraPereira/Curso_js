document.getElementById('estados').onchange = function(){

    window.localStorage.setItem("estado", document.getElementById('estados').value);

};

if(localStorage.estado){

    document.getElementById('estados').value = localStorage.estado;
};

function add_left_zero(num){
    if(num < 10){
        return "0" + num.toString();
    } else {
        return num.toString();
    }
}

function formatar(time){

    var dia = add_left_zero(new Date(time).getDate());
    var mes = add_left_zero(new Date(time).getMonth()+ 1);
    var ano = add_left_zero(new Date(time).getFullYear());

    return dia + '-' + mes + '-' + ano; 

}

document.getElementById('confirmar_pedido').onclick = function() {

    var selecao = document.getElementById("envios").value;

    if(selecao == 'escolha'){
        alert("Selecione uma opção");
    } else {
        if (selecao == 'normal'){
            var data_entrega = 18;
        } else {
            var data_entrega = 12;
    }

    var data_hoje = new Date().getTime();
    var data_entrega = data_hoje + (data_entrega * 86400000);

    document.getElementById('data_pedido').innerHTML = formatar(data_hoje);
    document.getElementById('data_entrega').innerHTML = formatar(data_entrega);

    }
}

 
//     var data_hoje = new Date();
//     var dia_hoje = data_hoje.getDate();
//     var mes_hoje = data_hoje.getMonth() +1;
//     var ano_hoje = data_hoje.getFullYear();


// document.getElementById('confirmar_pedido').onclick = function() {

//     window.localStorage.setItem("Forma_envio", document.getElementById("envios").value);

    
//     if(localStorage.Forma_envio == 'escolha'){

//         alert("Selecione uma opção");

//     } else{
//         if(localStorage.Forma_envio == 'normal'){

//         document.getElementById('data_pedido').innerHTML = dia_hoje + ' - ' +  mes_hoje + ' - ' + ano_hoje;
//         var entrega = dia_hoje + 18 + ' - ' + mes_hoje + ' - ' + ano_hoje;
//         document.getElementById('data_entrega').innerHTML = entrega;
    
//         } else{
    
//         document.getElementById('data_pedido').innerHTML = dia_hoje + ' - ' +  mes_hoje + ' - ' + ano_hoje;
//         entrega = dia_hoje + 12 + ' - ' +  mes_hoje + ' - ' + ano_hoje;;
//         document.getElementById('data_entrega').innerHTML = entrega;
//     }

// }


// window.setInterval(function(){
    
//     document.getElementById('comecar_parar').onclick = function(){

//     var inicio = new Date();
//     var horaInicio = inicio.getHours();
//     var minutoInicio = inicio.getMinutes();
//     var segundoInicio = inicio.getSeconds();
//     var milisegundosInicio = inicio.getMilliseconds();

//     var atual = new Date();
//     var horaAtual = atual.getHours();
//     var minutoAtual = atual.getMinutes();
//     var segundoAtual = atual.getSeconds();
//     var milisegundosAtual = atual.getMilliseconds();
    
//     var horaCron = horaInicio - horaAtual;
//     var minutoCron = minutoInicio - minutoAtual;
//     var segundoCron = segundoInicio - segundoAtual;
//     var milisegundosCro = milisegundosInicio - milisegundosAtual;
    

//     function format_time(time){
//         if(time >= 0 && time <= 9){
//             var formatted_time = time.toString();
//             formatted_time = "0" + formatted_time;
//         } else{
//             var formatted_time = time.toString();
//         }
//         return formatted_time;
//     }
    
       
//     document.getElementById("cronometro").innerHTML = format_time(horaCron) + ':' + format_time(minutoCron) + ':' + format_time(segundoCron) + ' ' + format_time(milisegundosCro);
//     }

// },1);

var iniciado = false, hora_inicio, hora_atual, tempo_passado, init_cronometro, horas, minutos, segundos, milisegundos;

document.getElementById("comecar_parar").onclick = function(){

    if (!iniciado){

        iniciado = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";
        if(!hora_inicio){

            hora_inicio = new Date().getTime();

        } else{

            hora_inicio = new Date().getTime() - tempo_passado;

        }

        init_cronometro = window.setInterval(function(){

            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;

            horas = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (horas * 3600000);

            minutos = Math.floor(resto / 60000);
            resto -= (minutos * 60000);

            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000);

            milisegundos = resto;


            document.getElementById('cronometro').innerHTML = add_left_zero(horas) + ':' + add_left_zero(minutos) + ':' + add_left_zero(segundos) + ' ' + add_left_zero(milisegundos);

        }, 10);

    } else{

        window.clearInterval(init_cronometro)
        iniciado = false;
        document.getElementById("comecar_parar").innerHTML = "Começar";

    }

}

document.getElementById("zerar").onclick = function(){
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00:00:00 000";

}

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

function valorapagar(veiculo){

    switch(veiculo.categoria){
        case '1':
            return 11.22;
            break;
        case '2':
            return 22.45;
        break;
        case '3':
            return 16.88;
        break;
        case '4':
            return 33.65;
        break;
        default:
            console.log('Veiculo de placa' + veiculo.placa + 'não fez o pagamento por erro de categoria (' + veiculo.categoria + ')');
            return 0;
    }

}

var total = 0;

for(a = 0; a < carros.length; a++){
    total += valorapagar(carros[a]);
}

document.getElementById('faturamento_total').innerHTML = total.toFixed(2);


