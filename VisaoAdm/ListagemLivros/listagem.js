const listaLivros = document.querySelector('.lista-livros');
const itensLivros = [...listaLivros.children];

const qtdLivros = document.querySelector('.quantidade-livros');

const pageButtons = document.querySelectorAll('.botao-pagina');
const pageNumber = document.querySelector('.pagina-atual');

const itensPorPagina = 7;
const totalPaginas = Math.ceil(itensLivros.length / itensPorPagina);
let paginaAtual = 1;

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

    itensLivros.forEach((item, index) => {
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
    const visiveis = itensLivros.filter(item => !item.classList.contains('oculto')).length;

    const fim = Math.min(
        inicio * itensPorPagina,
        itensLivros.length
    );

    qtdLivros.textContent = `Mostrando ${visiveis} de ${itensLivros.length} livros`;
}

mostrarPagina();