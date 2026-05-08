export async function animarTexto(branco, gradiente) {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function digitar(elemento, texto, velocidade = 75) {
        for (let i = 0; i < texto.length; i++) {
            elemento.innerHTML += texto[i];
            await delay(velocidade);
        }
    }

    async function apagar(elemento, qtd, velocidade = 50) {
        for (let i = 0; i < qtd; i++) {
            elemento.innerHTML = elemento.innerHTML.slice(0, -1);
            await delay(velocidade);
        }
    }

    while (true) {
        branco.innerHTML = '';
        gradiente.innerHTML = '';

        await digitar(branco, 'Daniel');
        await digitar(gradiente, 'Weber');
        await delay(700);

        await apagar(gradiente, 2);
        await delay(300);

        await digitar(gradiente, ' Developer');
        await delay(1500);

        await apagar(gradiente, gradiente.innerHTML.length, 75);
        await apagar(branco, branco.innerHTML.length, 75);
        await delay(700);
    }
}