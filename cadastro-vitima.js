document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-vitima");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = form.nome.value;
            const email = form.email.value;
            const telefone = form.telefone.value;
            const idade = form.idade.value;
            const local = form.local.value;
            const ajuda = form.ajuda.value;
            const saude = form.saude.value;
            const abrigo = form.abrigo.value;
            const status = form.status.value;

            console.log("Nome:", nome);
            console.log("Email:", email);
            console.log("Telefone:", telefone);
            console.log("Idade:", idade);
            console.log("Local:", local);
            console.log("Tipo de ajuda:", ajuda);
            console.log("Estado de saúde:", saude);
            console.log("Abrigo designado:", abrigo);
            console.log("Status do resgate:", status);
        });
    }
});
