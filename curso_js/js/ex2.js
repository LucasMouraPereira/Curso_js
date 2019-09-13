var numero1 = parseInt(document.getElementById("num_1").innerHTML);
var numero2 = parseInt(document.getElementById("num_2").innerHTML);

var result = numero1 + numero2;

document.getElementById("resultado").innerHTML = "<strong>" + result + "</strong>";

function convertgraus(c){

    f = (9*c/5)+32;
    return f;
}

var celsius = parseInt(document.getElementById("caixa_azul").innerHTML);
document.getElementById("caixa_amarela").innerHTML = convertgraus(celsius);

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

grupos.shift(grupos[0]);

console.log(grupos);

grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(grupos);

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

var novos_grupos = grupos.slice(-2,);

novos_grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(novos_grupos);

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    't_aval': function () {
        tot_aval = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        return tot_aval;
    },
    'me_aval': function () {
        m_aval = (1*this.n_aval_1_estrela) + (2*this.n_aval_2_estrelas) + (3*this.n_aval_3_estrelas) + (4*this.n_aval_4_estrelas) + (5*this.n_aval_5_estrelas) / (this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas);
        return m_aval;
    }
}

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

document.getElementById ("total_aval").innerHTML = curso.t_aval();
parseFloat(document.getElementById ("media_aval").innerHTML = curso.me_aval());

var dados = {
    'nome':'Lucas',
    'sobrenome':'Moura',
    'email':'lucasmourap@gmail.com'
}

function tabela (dados){

    var htmltable = '<div class="tableBox">' + 

    "<table>" +

        '<tr>' +
            '<th>' + "Nome Completo" + '</th>' +
            '<th>' + "Email" + '</th>' +
        '</tr>' +
        '<tr>' +
            '<td>' + dados.nome + " " + dados.sobrenome + '</td>' +
            '<td>' + dados.email + '</td>' +
        '</tr>' +
        
    '</table>' +
    
'</div>';

return htmltable;

}

document.getElementById ("tabela").innerHTML = tabela(dados);