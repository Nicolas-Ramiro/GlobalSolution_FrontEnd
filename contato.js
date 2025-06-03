document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contato-container");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const nome = form.nome.value;
            const email = form.email.value;
            const mensagem = form.mensagem.value;

            console.log("Nome:", nome);
            console.log("Email:", email);
            console.log("Mensagem:", mensagem);
        });
    }

    // Navegação via DOM
    document.getElementById("vitima").addEventListener("click", function () {
        window.location.href = "cadastro-vitima.html";
    });

    document.getElementById("voluntario").addEventListener("click", function () {
        window.location.href = "cadastro-voluntario.html";
    });

    document.getElementById("doacao").addEventListener("click", function () {
        window.location.href = "cadastro-doacao.html";
    });
});
