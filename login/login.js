const campoSenha = document.getElementById("senha");
const btnOlho = document.querySelector("#mostrar-senha")

const olhoAberto = document.querySelector("#olho-aberto");
const olhoFechado = document.querySelector("#olho-fechado");

btnOlho.addEventListener("click", () => {
    if (campoSenha.type === "password"){
        olhoAberto.classList.add('olho-off')
        olhoFechado.classList.remove('olho-off')
        campoSenha.type = 'text'
    }
    else{
        olhoAberto.classList.remove('olho-off')
        olhoFechado.classList.add('olho-off')
        campoSenha.type = 'password'
    }
})