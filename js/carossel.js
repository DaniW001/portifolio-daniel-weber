export function inicializarCarrossel() {
    const wrapper = document.querySelector('.carrossel-track-wrapper');
    const track = document.querySelector('.carrossel-track');

    if (!track || !wrapper) return;

    const cardsOriginais = Array.from(track.children);

    // Duplica os cards
    cardsOriginais.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    const velocidade = 0.2;
    let posicao = 0;
    let pausado = false;

    // Calcula UMA vez após os clones serem inseridos no DOM
    let setWidth = 0;
    requestAnimationFrame(() => {
        setWidth = cardsOriginais.reduce((total, card) => {
            const estilo = getComputedStyle(card);
            const marginRight = parseFloat(estilo.marginRight) || 0;
            return total + card.offsetWidth + marginRight;
        }, 0);

        // Só começa a animar depois de ter a largura correta
        requestAnimationFrame(animar);
    });

    function animar() {
        if (!pausado) {
            posicao -= velocidade;

            if (posicao <= -setWidth) {
                // Ajusta para manter o ritmo exato, sem saltar para 0
                posicao += setWidth;
            }

            track.style.transform = `translateX(${posicao}px)`;
        }

        requestAnimationFrame(animar);
    }

    wrapper.addEventListener('mouseenter', () => { pausado = true; });
    wrapper.addEventListener('mouseleave', () => { pausado = false; });
}