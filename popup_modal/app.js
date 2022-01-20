const abrir = document.getElementById('open');
const cerrar = document.getElementById('close');
const container = document.getElementById('container');

abrir.addEventListener('click', () => {
    container.classList.add('active');
})
cerrar.addEventListener('click', () => {
    container.classList.remove('active');
})