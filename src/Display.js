class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior
        this.displayValorActual = displayValorActual
        this.calculadora = new Calculadora()
        this.valorActual = ''
        this.valorAntrior = ''
    }

    agregarNumero(numero){
        this.valorActual = numero
    }
}