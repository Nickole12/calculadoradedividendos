
var QtdPessoas;
var QtdCarne;

function Carne_Para_Churrasco() {
QtdPessoas = window.prompt('Quantidade de adultos convidados?')

QtdCarne = QtdPessoas* 0.4;
QtdCarne = QtdCarne.toFixed(1);
document.writeln(QtdCarne)


}

Carne_Para_Churrasco()