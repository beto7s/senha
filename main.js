document.querySelector('.parametro-senha__texto');

const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');

console.log(checkbox)

botoes[0].onclick = diminuiTamanho;
function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }

    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}

gerasenha(){}
    let alfabeto = ¨;
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox{1}.checked){
    alfabeto = alfabeto + letrasMinusculas;
}