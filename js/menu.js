export function inicializarMenu() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('.navegacao');

    if (ativaMenu && navMenu) {  // Verificação para evitar erros se os elementos não existirem
        ativaMenu.addEventListener('click', () => {
            if (ativaMenu.classList.contains('fa-bars')) {
                ativaMenu.classList.remove('fa-bars');
                ativaMenu.classList.add('fa-x');
            } else {
                ativaMenu.classList.remove('fa-x');
                ativaMenu.classList.add('fa-bars');
            }

            navMenu.classList.toggle('ativado');
        });
    }
}