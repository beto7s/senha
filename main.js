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
botoes[1].onclick = aumentaTamanho;
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

 function geraSenha(){
    let alfabeto = "";
    if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if(checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if(checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}
console.log(alfabeto);
let senha = "";
for (let i =0; i <tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
}
campoSenha.value = senha;
classificasenha(alfabeto.length);
 }

function classificasenha (tamanhoalfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoa1)
    SVGComponentTransferFunctionElement.log(entropia);
    forcaSenha.classList.remove(fraca , media , forte);
    if (tamanhoSenha > 11){
        forcaSenha.classList.add(forte);
    }
        else if (tamanhosenha > 5 && tamanhoSenha < 12){

        }
            else if (tamanhosenha <= 5){
        forcaSenha.classList.add(fraca);
    }
        
        }
    

