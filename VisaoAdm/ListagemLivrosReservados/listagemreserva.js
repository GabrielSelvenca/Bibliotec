const checkboxs = document.querySelectorAll('#check-reserva');
const listaReservas = document.querySelector('.lista-reservas');
const itemsReserva = [...listaReservas.children];

const qtdReserva = document.querySelector('.quantidade-reservas');

const pageButtons = document.querySelectorAll('.botao-pagina');
const pageNumber = document.querySelector('.pagina-atual');

const itensPorPagina = 7;
const totalPaginas = Math.ceil(itemsReserva.length / itensPorPagina);
let paginaAtual = 1;

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

pageButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'right'){
            if (paginaAtual < totalPaginas){
                paginaAtual++;
            }
        }
        else if (button.id === 'left'){
            if (paginaAtual > 1){
                paginaAtual--;                
            }
        }

        mostrarPagina();
    })
})

function mostrarPagina() {
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;

    itemsReserva.forEach((item, index) => {
        if (index >= inicio && index < fim){
            item.classList.remove('oculto');
        } else {
            item.classList.add('oculto');
        }
    });

    pageNumber.textContent = paginaAtual;

    atualizarContador();
}

function atualizarContador() {
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const visiveis = itemsReserva.filter(item => !item.classList.contains('oculto')).length;

    const fim = Math.min(
        inicio * itensPorPagina,
        itemsReserva.length
    );

    qtdReserva.textContent = `Mostrando ${visiveis} de ${itemsReserva.length} na lista`;
}

mostrarPagina();