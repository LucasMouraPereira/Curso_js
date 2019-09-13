document.getElementById("converter").onclick = function () {
    var c = document.getElementById("temp_celsius").value;
    f = (9*c/5)+32;
    document.getElementById("temp_fahr").innerHTML = f;
} 

var inicio =1930;
for(var a = inicio; a<=2018; a+=4){
     document.getElementById("anos_copa").innerHTML += '<li>' + a + '</li>';
}

document.getElementById("calcular").onclick = function () {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var soma = nota1 + nota2;
    var media = parseFloat(soma/2.0);
    var n_faltas = parseFloat(document.getElementById("n_faltas").value);
    var presenca = (20 - n_faltas) / 20;

    if(presenca >=0.7 && media >= 6.5){
        document.getElementById("result").innerHTML = "Aluno aprovado!";
    } else if (presenca < 0.7 && media < 6.5){
        document.getElementById("result").innerHTML = "Aluno reprovado por falta e por nota!";
    } else if (media < 6.5){
        document.getElementById("result").innerHTML = "Aluno reprovado por notas!";
    } else {
        document.getElementById("result").innerHTML = "Aluno reprovado por falta!";
    }
        
}

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

var total_vendas = 0;
document.getElementById("vendas_cursos").innerHTML = "";

for (var b = 0; b < vendas_cursos.length; b++){
    
    if(vendas_cursos[b].reembolso == null){
        total_vendas += vendas_cursos[b].valor;

        var linhahtml = "";
        linhahtml += '<tr>';
        
        linhahtml += '<td>' + vendas_cursos[b].aluno + '</td>';
        linhahtml += '<td>' + vendas_cursos[b].data + '</td>';
        linhahtml += '<td>' + vendas_cursos[b].valor + '</td>';

        linhahtml += '</tr>';

        document.getElementById("vendas_cursos").innerHTML += linhahtml;   
    }
}

document.getElementById("total_vendas").innerHTML = total_vendas;