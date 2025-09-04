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
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de senha</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section class="conteudo">
        <div class="conteudo-titulo">
            <img src="unlock.svg" alt="cadeado fechado">
            <h2 class="titulo-principal">Gerador de senhas</h2>
            <h3 class="titulo-secundario">Gere instantaneamente uma senha aleatória e segura</h3>
        </div>
        <div class="conteudo-senha">
            <label for="senha">Senha</label>
            <input name="senha" type="text" id="campo-senha" readonly>
        </div>
        <div class="parametro">
            <h3 class="parametro-titulo">Personalize sua senha</h3>
            <div class="parametro-coluna__senha">
                <div class="parametro-senha">
                    <h4 class="parametro-senha__titulo">Número de caracteres</h4>
                    <div class="parametro-senha-botoes">
                        <button class="parametro-senha__botao">-</button>
                        <p class="parametro-senha__texto">12</p>
                        <button class="parametro-senha__botao">+</button>
                    </div>
                </div>
                <div class="parametro-senha">
                    <h4 class="parametro-senha__titulo">Características da senha</h4>
                    <div class="parametro-senha-checkbox">
                        <input name="maiusculo" type="checkbox" class="checkbox" checked>
                        <label for="maiusculo">Letras maiúsculas</label>
                    </div>
                    <div class="parametro-senha-checkbox">
                        <input name="minusculo" type="checkbox" class="checkbox">
                        <label for="minusculo">Letras minúsculas</label>
                    </div>
                    <div class="parametro-senha-checkbox">
                        <input name="numero" type="checkbox" class="checkbox">
                        <label for="numero">Números</label>
                    </div>
                    <div class="parametro-senha-checkbox">
                        <input name="simbolo" type="checkbox" class="checkbox">
                        <label for="simbolo">Símbolos</label>
                    </div>
                </div>
                <div class="parametro-senha">
                    <h4 class="parametro-senha__titulo">Força da senha</h4>
                    <div class="barra"></div>
                    <div class="forca fraca"></div>
                    <div class="parametro-senha-textos">
                        <p>Fraca</p>
                        <p>Média</p>
                        <p>Forte</p>
                    </div>
                    <p class="entropia"></p>
                </div>
            </div>
        </div>
    </section>
    <script src="main.js"></script>
</body>

</html>
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2 ** entropia / (100e6 * 60 * 60 * 24)) + " dias para descobrir essa senha.";
}


