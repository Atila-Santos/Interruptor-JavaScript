const botaoLigar = document.getElementById('ligar');
const botaoDesligar = document.getElementById('desligar');
const lampadaApagada = document.getElementById('lampada-apagada');
const lampadaAcesa = document.getElementById('lampada-acesa');

botaoLigar.addEventListener('click',()=>{
    lampadaApagada.classList = 'desaparecer';
    lampadaAcesa.classList = 'aparecer';
    botaoLigar.classList = 'desaparecer';
    botaoDesligar.classList = 'aparecer botao';
});

botaoDesligar.addEventListener('click',()=>{
    lampadaApagada.classList = 'aparecer';
    lampadaAcesa.classList = 'desaparecer';
    botaoLigar.classList = 'aparecer botao';
    botaoDesligar.classList = 'desaparecer';
});