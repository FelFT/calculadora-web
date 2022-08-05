const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document-getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const Display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () =>{
        Display.agregarNumero(boton.innerHTML)
    })
})