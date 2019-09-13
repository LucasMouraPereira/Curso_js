//$(function(){})
$(document).ready(function(){
    // alert("Mensagem enviada pelo Alert");
// console.log("Mensagem enviada pelo console");

// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

// console.log(conteudo_caixa); 

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// document.getElementById("caixa_amarela").innerHTML = '<h1>' + "Caixa Amarela" + '<h1>';

// var conteudo = document.getElementById("caixa_azul").innerHTML;

// document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '<h1>';


// function soma_numeros(){
//     var x = 5;
//     var y = 2;
//     var soma = x + y;

//     console.log(soma);
// }

// soma_numeros();

// function soma_ags(num1,num2){
//     var soma = num1+num2;
//     //console.log(soma);
//     return soma;
// }

// console.log("O resultado da soma " + soma_ags(10,20));

// var n1 = 100;
// var n2 = 500;

// soma_ags(n1,n2);

// function IMC (peso, altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
// var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

// document.getElementById("imc").innerHTML = IMC(meu_peso,minha_altura).toFixed(2);

// var alunos = [ "João" , "Maria", "José" ];
// var num_primos = [ 2, 3, 5, 7, 11, 13 ];

// console.log(alunos.length);
// console.log(num_primos[2]);
// console.log(num_primos[10]);

// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length);
// console.log(grupos[1]);
// console.log(grupos[1][1]);

// var cursos = [ "HTML", "Python", "PHP" ];

//     cursos.push("Javascript");

//     console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

//     cursos.unshift("Bootstrap");

//     console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

//     cursos.pop();

//     console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

//     cursos.shift();

//     console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

//     var ingredientes = [ "pão branco", "queijo", "presunto" ];

//     ingredientes[0] = "pão integral";

//     console.log(ingredientes);  // O console mostrará [ "pão integral", "queijo", "presunto" ]

//     alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
//     console.log( alunos.slice(0,3) );
//     console.log( alunos.slice(0,-2) );
//     console.log( alunos.slice(-2,) );

    // var funcionario = {
    //     'nome': 'Pedro Souza Gomes',
    //     'ano_nasc': 1972,
    //     'cpf': '111.111.111.11',
    //     'cargo': 'Analista de Sistemas'
    // };

    // console.log(funcionario.ano_nasc);
    // console.log(funcionario['nome']);

    // funcionario.cargo = "Gerente TI";
    // funcionario.cnh = "123456789";

    // console.log(funcionario);

    // var cursos = [
    //     {
    //         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
    //         'avaliacoes': 680,
    //         'alunos': 2300,
    //         'categorias': ['programacao', 'tecnologia']
    //     },

    //     {
    //         'titulo': 'Aprenda PHP e faça sites dinâmicos',
    //         'avaliacoes': 180,
    //         'alunos': 350,
    //         'categorias': ['desenvolvimento web', 'programacao']
    //     },

    //     {
    //         'titulo': 'Excel do Zero ao Avançado',
    //         'avaliacoes': 420,
    //         'alunos': 1800,
    //         'categorias': ['produtividade', 'gestão']
    //     }
        
    // ];

    // console.log(cursos[1].categorias[0]);

    // cursos[2].categorias[1] = 'Administração de Empresas';

    // console.log(cursos[2].categorias[1]);
    
    
//     var aluno = {
//         'nome': 'Lucas',
//         'Sobrenome': 'Moura',
//         'ano_nasc':1992,
//         'ano_atual':2019,
//         'nome_completo': function () {
//             n_completo = this.nome +  " " + this.Sobrenome;
//             return n_completo;
//         },
//         'idade': function(){
//             idade_aluno = this.ano_atual - this.ano_nasc;
//             return idade_aluno;
//         }
//     };

//    console.log(aluno.nome_completo());

//    console.log(aluno.idade());

// document.getElementById("click-me").onclick = function() {
//     alert("Você clicou no botão");
// };

// document.getElementById("hover-me").onmousemove= function() {
//     alert("Você passou com o cursor no botão");
// };

// document.getElementById("leave-me").onmouseout= function() {
//     alert("Você saiu com o cursor no botão");
// };

// document.onkeydown = function() {
//     alert('Você apertou a tecla: ' + event.keyCode);
// };

// function button_clicked() {
//     alert("Você clicou no botão");
// }

// var botao = document.getElementById("botao_cor");

// botao.onclick = function () {
//     // document.getElementById("botao_cor").style.height = "100px";
//     // document.getElementById("botao_cor").style["background-color"] = "purple";
//     // document.getElementById("botao_cor").style.transform = "translateX(100px)";
//     this.style.height = "100px";
//     this.style["background-color"] = "purple";
//     this.style.transform = "translateX(100px)";
// };

// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste1";

// console.log(exemplo);

// var exemplo = document.getElementsByTagName("p");

// console.log(exemplo);

// 

// var nota = 8;
// var faltas = 4;

// if(nota >= 7 && faltas <= 4){
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

// var nota = 8;
// var faltas = 4;

// if(nota < 7 || faltas <= 4){
//     console.log("Reprovado");
// } else {
//     console.log("Aprovado");
// }

// var nome = "Lucas";

// if(nome){
//     console.log("Nome: " + nome);
// } else {
//     console.log("Nome não informado");
// }

// var socio = false;
// var idade = 17;

// if (socio == true || idade >= 65){
//     console.log("Grátis")
// } else if (socio == false && idade < 18){
//     console.log("Valor do ingreço R$ 6,00");
// } else {
//     console.log("Valor do ingreço R$ 12,00");

// }

// var funcionarios = [
        
//     {
//         'nome': 'Carlos Henrique da Silva',
//         'idade': 45,
//         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
//     },

//     {
//         'nome': 'Maria Helena Pereira',
//         'idade': 32,
//         'filhos': ['João Pedro Pereira de Souza']
        
//     },

//     {
//         'nome': 'José Feliciano Maia',
//         'idade': 39,
//         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
//     }

// ];

// var list_element = document.getElementById("filhos");
// list_element.innerHTML = "";

// for (var a = 0; a < funcionarios.length; a++){
    
//     if(funcionarios[a].filhos){

//         var lista_filhos = funcionarios[a].filhos;

//     for (var b = 0; b < lista_filhos.length; b++){
//         list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de '  + funcionarios[a].nome;
//         }

//     }
// }

// window.onmousemove = function(e) {

// console.log('mouse move')

// };

// window.onmousemove = function(e) {

// if(e.pageY < 5) {
//     alert('Não perca os descontos exclusivos');
// }

// };

//  window.localStorage.setItem("nome", "João");

// console.log(localStorage['nome']);

// window.localStorage.removeItem("nome");

// console.log(localStorage['nome']);

// document.getElementById("enviar-nome").onclick = function() {

//     var nome = document.getElementById("nome-usuario").value;
//     window.localStorage.setItem("nome", nome);

//     document.getElementById("name-field").style.display = "none";

//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?"
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?"
//     document.getElementById("welcome-area").style.display = "initial";

// };

// if(localStorage.nome) {

//     document.getElementById("name-field").style.display = "none";

//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?"
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?"
//     document.getElementById("welcome-area").style.display = "initial";

// }

// document.getElementById("not-me").onclick = function () {

//     window.localStorage.removeItem("nome");
//     document.getElementById("welcome-area").style.display = "none";
//     document.getElementById("name-fielog()ld").style.display = "initial";

// }

// var data_inicial = new Date("2018-03-20");
// var data_final = new Date("2018-04-06");
// var data_entrega = (data_final - data_inicial)/86400000;
// document.getElementById("dias_entrega").innerHTML = data_entrega;

// console.log('Mensagem 1');

// window.setTimeout(function(){

//     console.log('Mensagem 2');

// },3000);

// document.getElementById("mostrar-loader").onclick = function(){

//     document.getElementById("spinner-loader").style.display = "initial";

//     window.setTimeout(function(){

//     document.getElementById("spinner-loader").style.display = "none";
//     },5000);

// }


// var count = 0;

// var inter = window.setInterval(function(){
//     console.log(count);
//     count ++;
//     if(count >= 10) {
//         window.clearInterval(inter);
//     }

// },1000)

// window.setInterval(function(){

//     var data_hora = new Date();
//     var relogio_hora = data_hora.getHours();
//     var relogio_minutos = data_hora.getMinutes();
//     var relogio_segundos = data_hora.getSeconds();

//     function format_time(time){
//         if(time >= 0 && time <= 9){
//             var formatted_time = time.toString();
//             formatted_time = "0" + formatted_time;
//         } else{
//             var formatted_time = time.toString();
//         }
//         return formatted_time;
//     }

//     var relogio = document.getElementById("relogio").innerHTML = format_time(relogio_hora) + ':' + format_time(relogio_minutos) + ':' + format_time(relogio_segundos);
// },1000);

// var categoria = '3';

// switch(categoria){
//     case '1':
//         console.log('R$ 11,22');
//         break;
//     case '2':
//         console.log('R$ 22,45');
//         break;
//     case '3':
//         console.log('R$ 16,88');
//         break;
//     case '4':
//         console.log('R$ 33,65');
//         break;
//     default:
//         console.log('catégoria não encontrada');    
// }

// var x = 0;

// while (x < 10){
//     console.log(x);
//     x++;

//     if (x == 5) {
//         break;
//     }
// }

// var lista = [1, 5, 9, 33, 56,89, 100, 122, 145]

// for(a = 0; a < lista.length; a ++) {
//     if(lista[a] == 33) {
//         console.log('valor encontrado');
//         break;
//     }

//     console.log('Tentativa: ' + a);
// }

// var num = 0;

// while (num < 20) {
//     if (num == 3){
//         num ++;
//         continue;
//     }
//     console.log(num);
//     num ++;
// }

// var num = 0;

// while (num <= 20) {
//     if (num % 2){
//         num ++;
//         continue;
//     }
//     console.log(num);
//     num ++;
// }

// var num = 0;

// while (num <= 20) {
//     num ++;
//     if (num % 2 == 0){
//         continue;
//     }
//     console.log(num);
//     num ++;
// }

// document.getElementById('mostrar_opcao').onclick = function(){

//     var campo_select = document.getElementById('options');
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;

// };

// document.getElementById('mostrar_radio').onclick = function(){

//     var radio_select = document.getElementsByName('genero');

//     var radio_selected;

//     for(var a = 0; a< radio_select.length; a++){

//         if(radio_select[a].checked) {
//             radio_selected = radio_select[a].value;
//             break
//         }

//     }

//     document.getElementById('radio_selecionado').innerHTML = radio_selected;

// };

// document.getElementById('mostrar_check').onclick = function (){

//     var check_marcado = document.getElementsByName('interesse');
//     document.getElementById('check_selecionado').innerHTML = "";

//     for(var b = 0; b < check_marcado.length; b++){
//         if(check_marcado[b].checked){
//             document.getElementById('check_selecionado').innerHTML += '<li>' + check_marcado[b].value + '</li>';
//         }
//     }
// }

// document.getElementById('mostrar_data').onclick = function() {

//     var data = document.getElementById('data_evento').value;
//     var data_fom = new Date(data);
//     document.getElementById('data_selecionada').innerHTML= data_fom;

// }

// document.getElementById('escolaridade').onchange = function () {

//     var campo_selecionado = document.getElementById('escolaridade');
//     var indice = campo_selecionado.options.selectedIndex;
//     var valor_selecionado = campo_selecionado.options[indice].innerHTML;

//     document.getElementById('escolaridade_selecionada').innerHTML = valor_selecionado;

// };

// var checado = document.getElementsByName('lanche');

// for(c = 0; c < checado.length; c++){

//     checado[c].onchange = function(){

//         document.getElementById('check_selecionado').innerHTML = "";

//         for(d = 0; d < checado.length; d++){

//             if(checado[d].checked){

//                 document.getElementById('check_selecionado').innerHTML += '<li>' + checado[d].value + '</li>';                

//             }

//         }

//     }
// };

// document.getElementById("exemplo"),innerHTML = "olá";

// $(".exemplo").ação(); // para classe
// $("#exemplo").ação().html('olá'); //para id

// $("#esconder").click(function(){
//     $(".exemplo").css("display", "none");
// });
// $("#esconder").click(function(){
//     $(".exemplo").hide();
// });

//.htm() - substitui innerHTML

// usado html para mostrar no console todo html do paragrafo

// var conteudo_html = $("#paragrafo-html").html();
// console.log(conteudo_html);

// usado text para mostrar apenas o paragrafo sem as tags html.

// var conteudo_html = $("#paragrafo-html").text();
// console.log(conteudo_html);

// var conteudo_html = $("#paragrafo-html").html();
// console.log(conteudo_html);

// $("#paragrafo-html").html("Mudar o conteudo do paragrafo");

// conteudo_html = $("#paragrafo-html").html();
// console.log(conteudo_html);

// var url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);

// $("#paragrafo-link").attr("href", "http://www.udemy.com");

// url_link = $("#paragrafo-link").attr("href");
// console.log(url_link);

// $("#mudar_imagem").click(function(){
//     $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
//     $("#mudar_imagem").hide();
// });


//     // Remover o conteúdo, mantendo o elemento:
//     $("#paragrafo-empty").empty();

//     // Remover o elemento:
//     $("#paragrafo-empty").remove();

// var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

// $.each(lista,function(indice,valor){
//     console.log('O elemento de indice [' + indice + '] tem o valor de: ' + valor);
// });

// // Aplicação do loop each em um objeto:

// var pessoa = {
//     'nome': 'João Pedro',
//     'DN': '20/01/1990',
//     'CPF': '111.111.111-11'
// };

// $.each(pessoa, function( chave, valor ) {
//     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
// });

// var interesses = $("#interesses li");

// $.each(interesses, function(indice, valor) {
//     console.log($(valor).text());
// });

// var conteudo_input = $("#campo_nome").val();

// console.log(conteudo_input);

// conteudo_input = $("#campo_nome").val("Lucas Moura");
// conteudo_input = $("#campo_nome").val();

// console.log(conteudo_input);

// var selecionado = $("#options").val();

// console.log(selecionado);

// var texto_selecionado = $ ("#options").find(":selected").text();

// console.log(texto_selecionado);

// $("#options").change(function(){
//     var novo_selecionado = $("#options").find(":selected").text();
//     console.log(novo_selecionado);
// });

// var radio = $("input[name = 'genero']:checked").val();

// console.log(radio);

// radio = $("input[name = 'genero']:checked").parent('span').text();

// console.log(radio);

// $("input[name = 'genero']:checked").change(function(){

//     var radio_select = $("input[name = 'genero']:checked").parent('span').text();
//     var radio = $("input[name = 'genero']:checked").val();

//     if(radio = 'M'){
//         console.log(radio_select);
//     } else if (radio = 'F'){
//         console.log(radio_select);

//     } else {
//         console.log(radio_select);
//     }
    
// });

// $("input[name='interesse']").change(function() {

//     var checkboxes_selecionados = $("input[name='interesse']:checked");
//     var textos = [];
    
//     $.each(checkboxes_selecionados, function( index, value ) {
        
//         textos.push($(value).parent("span").text());
    
//     });
    
//     console.log(textos);
    
// });

// $(".exemplo").css("display", "none");
// $("#adicionar_classe").click(function(){

//     $("#paragrafo-classes").addClass("styling");

// });

// $("#remover_classe").click(function(){

//     $("#paragrafo-classes").removeClass("styling");

// });


// $("#alternar_classe").click(function(){

//     $("#paragrafo-classes").toggleClass("styling");

// });

$("#nome").keyup(function(){
    var conteudo = $("#nome").val();
    if(conteudo){
        $("#confirmar").css("display","initial");
    } else {
        $("#confirmar").css("display","none");
    }
});

$("#botao-esconder").click(function(){
    $(this).hide(2000,function(){
        $("#texto-escondido").show();
    });
});

// $("#toggle-tab").click(function(){
//     $("#tab-content").toggle();
//     $("#toggle-tab").toggleClass("flip");
//     });
// });

// $("#toggle-tab").click(function(){
//     $("#tab-content").slideToggle();
//     $("#toggle-tab").toggleClass("flip");
//     });

$("#toggle-tab").click(function(){
    $("#tab-content").fadeToggle();
    $("#toggle-tab").toggleClass("flip");
    });
});
//$("elemento").animate({propriedade: valor}, velocidade, callback);

$("#animar").click(function(){

    $("#quadrado").animate({
        width: "+=20px",
    },800).animate({
        height: "+20px"
    }, 800, function(){
        $("#quadrado").css("background-color", "green");
    });

});


