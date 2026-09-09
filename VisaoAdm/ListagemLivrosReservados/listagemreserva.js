const checkboxs = document.querySelectorAll('#check-reserva');
const listaReservas = document.querySelector('.lista-reservas');
const qtdReserva = document.querySelector('.quantidade-reservas');

checkboxs.forEach(checkbox => {
    checkbox.addEventListener("change", (event) => {
        const checkboxClicada = event.target;

        const itemReserva = checkboxClicada.parentElement;
        const textoStatus = itemReserva.querySelector('.status-reserva');

        if (checkboxClicada.checked) {
            textoStatus.classList.add('retirado');
            textoStatus.textContent = "Retirado";
        }
        else {
            textoStatus.classList.remove('retirado');
            textoStatus.textContent = "Aguardando retirada";
        }
    })
});

function atualizarContador() {
    const itemsReserva = [...listaReservas.children];
    const visiveis = itemsReserva.filter(item => !item.classList.contains('oculto')).length;

    qtdReserva.textContent = `Mostando ${visiveis} de ${itemsReserva.length} na lista`
}

atualizarContador()