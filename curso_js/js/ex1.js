console.log("O arquivo ex1 esta funcionando!");
var nome = "Lucas";
var anoNasc = 1987;
var anoAtual = 2019;
var idade = anoAtual - anoNasc;

console.log("Olá eu me chamo " + nome + " ,tenho " + idade + " anos e estou estudando javascript");

var iniciar = prompt("Para cadastrar a nota dos Alunos digite 1 para iniciar e 0 para parar");
var nomeAluno = prompt("Digite o nome do Aluno");
var matricula = prompt ("Digite a matricula do Aluno");
var nota1 = prompt ("Digite a nota da primeira prova");;
var nota2 = prompt ("Digite a nota da segunda prova");; 
var media;


if (iniciar == 1) {

    media = (nota1 + nota2)/2;
    console.log("O aluno " + nomeAluno + ", matricula " + matricula + ", obteve a media final " + media);

}
else {
    console.log("Fim");
}

var telefone = prompt("Digite o numero de telefone");
var teste = false;

if (telefone.length == 9){
    teste = true;
}

console.log("Resultado do teste, " + teste);

var num = 32;
var exp = 6;
var result = Math.pow(num, exp);

console.log(result);

console.log("var NOME:ilegal, var $num1:ilegal, var typeof: ilegal var nome-aluno:legal, var tentativa_2:legal, var 2a_tentativa:ilegal, var nome completo: ilegal");

    var quantidade = "25";
    var numero = 6;
    var pressao;
    var temperatura = 40;
    temperatura = null;

    console.log(quantidade += quantidade);
    console.log( (7+5) / numero + 2 ); 
    console.log(pressao);
    console.log(temperatura);
    console.log(typeof pressao);
    console.log(typeof temperatura);

    var idade = 65;

    console.log(idade != 65);
    console.log(idade >= 65); 
    console.log("65" == idade);
    console.log(65 !== idade);
    console.log(typeof (idade > 60));
    console.log(typeof (idade > 70));
    `                                                                                                                                                                                                                                                                                                                                                                                                                                                               `