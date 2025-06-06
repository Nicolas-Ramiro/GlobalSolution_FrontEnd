document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-voluntario");
    const datasContainer = document.getElementById("datas-junho");

    const diasDeJunho = 30;
    const inicioMes = 0;

    let dataInicio = null;
    let dataFim = null;

    for (let i = 0; i < inicioMes; i++) {
        const vazio = document.createElement("div");
        datasContainer.appendChild(vazio);
    }

    for (let dia = 1; dia <= diasDeJunho; dia++) {
        const divDia = document.createElement("div");
        divDia.textContent = dia;
        divDia.dataset.dia = dia;

        divDia.addEventListener("click", function () {
            const diaSelecionado = parseInt(this.dataset.dia);

            if (!dataInicio || (dataInicio && dataFim)) {
                dataInicio = diaSelecionado;
                dataFim = null;
                limparSelecao();
                this.classList.add("selecionado");
            } else if (!dataFim) {
                dataFim = diaSelecionado;

                if (dataFim < dataInicio) {
                    [dataInicio, dataFim] = [dataFim, dataInicio];
                }

                marcarIntervalo(dataInicio, dataFim);
            }
        });

        datasContainer.appendChild(divDia);
    }

    function limparSelecao() {
        document.querySelectorAll(".datas div").forEach(d => d.classList.remove("selecionado"));
    }

    function marcarIntervalo(inicio, fim) {
        document.querySelectorAll(".datas div").forEach(d => {
            const dia = parseInt(d.dataset.dia);
            if (dia >= inicio && dia <= fim) {
                d.classList.add("selecionado");
            }
        });
    }

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = form.nome.value;
            const email = form.email.value;
            const telefone = form.telefone.value;
            const idade = form.idade.value;
            const local = form.local.value;
            const categoria = form.categoria.value;
            const periodo = form.periodo.value;

            console.log("Nome:", nome);
            console.log("Email:", email);
            console.log("Telefone:", telefone);
            console.log("Idade:", idade);
            console.log("Local:", local);
            console.log("Categoria:", categoria);
            console.log("Período:", periodo);

            if (dataInicio && dataFim) {
                console.log(`Datas selecionadas: 01/${dataInicio.toString().padStart(2, '0')}/2025 até 01/${dataFim.toString().padStart(2, '0')}/2025`);
            } else if (dataInicio) {
                console.log(`Data selecionada: 01/${dataInicio.toString().padStart(2, '0')}/2025`);
            } else {
                console.log("Nenhuma data selecionada.");
            }
        });
    }
});
