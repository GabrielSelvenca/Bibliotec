const checkboxs = document.querySelectorAll('#check-reserva');
// const listaReservas = document.getElementsByClassName('lista-reservas');
// const qtdReserva = document.getElementsByClassName('quantidade-reservas');

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
