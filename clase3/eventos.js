const botonProgreso = document.querySelector('#botonProgreso')
const botonFormulario = document.querySelector('#botonFormulario')
const barraProgreso = document.querySelector('#progreso')
const botonColorDeFondo = document.querySelector('#botonColorDeFondo')

botonProgreso.onclick = () =>{

    mostrarOcultarProgressBar()
}
botonFormulario.onclick = () =>{
    irAFormulario()
}

botonColorDeFondo.onclick = () => {
    aplicoColor()
} 

