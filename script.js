function clq1() {
    alert("Você clicou no Botão 1");
}

let bt2 = document.getElementById("bt2");
bt2.addEventListener("click", clq2);

function clq2() {
    alert("Você clicou no Botão 2");
}

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.getElementById("btSoma");
btSoma.addEventListener("click", function() {
    soma(Number(valor1.value), Number(valor2.value));
});
function soma(a, b) {
    resultado.textContent =  a + b;
}

let btSubtracao = document.getElementById("btSubtracao");
btSubtracao.addEventListener("click", function() {
    Subtracao(Number(valor1.value), Number(valor2.value));
});
function Subtracao(a, b) {
    resultado.textContent =  a + b;
}

let btDivisao = document.getElementById("btDivisao");
btSoma.addEventListener("click", function() {
    Divisao(Number(valor1.value), Number(valor2.value));
});
function Divisao(a, b) {
    resultado.textContent =  a + b;
}

let btMultiplicacao = document.getElementById("btMultiplicacao");
btMultiplicacao.addEventListener("click", function() {
    Multiplicacao(Number(valor1.value), Number(valor2.value));
});
function Multiplicacao(a, b) {
    resultado.textContent =  a + b;
}

