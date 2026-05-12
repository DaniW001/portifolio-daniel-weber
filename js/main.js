import { animarTexto } from './animacaoTexto.js';
import { inicializarMenu } from './menu.js';
import { inicializarCarrossel } from './carossel.js';
import "./contatoForm.js"

// Quando a página terminar de carregar faz a rolagem automática suave até a seção inicial
window.addEventListener('load', function () {
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
});

// Seleciona os elementos do efeito de digitação
const textoBranco = document.querySelector('.digitando .texto-branco');
const textoGradiente = document.querySelector('.digitando .texto-gradiente');
if (textoBranco && textoGradiente) {
    animarTexto(textoBranco, textoGradiente);
}

// Inicializa o menu navegação
inicializarMenu();
// Inicializa o carrossel de projetos
inicializarCarrossel();