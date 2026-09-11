const nav = document.querySelector('.navegacao');
const menu = document.querySelector('#menu');

menu.addEventListener('click', () => { nav.classList.toggle('ocultar-nav'); });