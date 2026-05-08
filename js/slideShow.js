export function inicializarSlideshow() {
    const divExperiencia = document.querySelectorAll('.experiencia-conteudo div');
    const liExperiencia = document.querySelectorAll('.experiencia-conteudo ul li');

    const divEducacao = document.querySelectorAll('.educacao-conteudo div');
    const liEducacao = document.querySelectorAll('.educacao-conteudo ul li');

    // Ativa o primeiro item por padrão
    if (divExperiencia.length > 0) divExperiencia[0].classList.add('ativo');
    if (divEducacao.length > 0) divEducacao[0].classList.add('ativo');
    if (liExperiencia.length > 0) liExperiencia[0].classList.add('ativo');
    if (liEducacao.length > 0) liEducacao[0].classList.add('ativo');

    // Função para slideshow de experiência
    function slideShow(index) {
        divExperiencia.forEach((div) => div.classList.remove('ativo'));
        liExperiencia.forEach((botao) => botao.classList.remove('ativo'));
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    // Função para slideshow de educação
    function slideShow2(index) {
        divEducacao.forEach((div) => div.classList.remove('ativo'));
        liEducacao.forEach((botao) => botao.classList.remove('ativo'));
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    }

    // Adiciona eventos de clique
    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => slideShow(index));
    });
    liEducacao.forEach((event, index) => {
        event.addEventListener('click', () => slideShow2(index));
    });
}