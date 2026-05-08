import { animarTexto } from './animacaoTexto.js';
import { inicializarMenu } from './menu.js';
import { inicializarSlideshow } from './slideShow.js';

const textoBranco = document.querySelector('.digitando .texto-branco');
const textoGradiente = document.querySelector('.digitando .texto-gradiente');
if (textoBranco && textoGradiente) {
    animarTexto(textoBranco, textoGradiente);
}

inicializarMenu();

inicializarSlideshow();