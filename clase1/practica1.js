const parrafo2 = `<p class="p-quote"> Aquí habrá fundamentación del lenguaje detallado anteriormente. </p>`

function saludar(){ // function convencional
    let nombre = prompt('Ingrese su nombre')
        console.log('Bievenido ' + nombre)
}

function saludo(nombre, segundoNombre){ //function con parametros
    console.log(`Bienvenido ${nombre} ${segundoNombre}`)
}

// funcion con retorno de string, para probarlo, hacer un alert(`${devuelvoSaludo()}`) en la consola del browser

function devuelvoSaludo(){
    let nombre = prompt('Ingrese su nombre')
    return `Bievenido ${nombre}`
}

//arrow functions

const saludarr  = () => {
    let nombre = prompt('Ingrese su nombre')
        console.log(`Bienvenido ${nombre}`)
}

const saludarrr  = (nombre) => {
    
    console.log(`Bienvenido ${nombre}`)
}

const devuelvoSaludoo = () =>{
    let nombre = prompt('Ingrese su nombre')
    return `Bievenido ${nombre}`
}
console.log(window)
console.log(window.frames)
console.log(window.history)
console.log(window.location)
console.log(window.screen)
console.log(window.navigator)
