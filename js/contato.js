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
});
    function abrirPagina(destino) {
        switch (destino) {
            case "vitima":
                window.location.href = "cadastro-vitima.html";
                break;
            case "voluntario":
                window.location.href = "cadastro-voluntario.html";
                break;
        }
    }