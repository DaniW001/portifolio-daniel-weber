const form = document.getElementById("contatoForm");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const formMensagem = document.getElementById("formMensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        nomeValor === "" ||
        emailValor === "" ||
        mensagemValor === ""
    ) {
        mostrarMensagem(
            "Preencha todos os campos obrigatórios.",
            "erro"
        );
        return;
    }

    if (!emailValido.test(emailValor)) {
        mostrarMensagem(
            "Digite um e-mail válido.",
            "erro"
        );
        return;
    }

    mostrarMensagem(
        "Mensagem enviada com sucesso!",
        "sucesso"
    );

    form.reset();
});

function mostrarMensagem(texto, tipo) {
    formMensagem.textContent = texto;
    formMensagem.className = tipo;
}