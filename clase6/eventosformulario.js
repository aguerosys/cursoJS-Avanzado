const reciboFoco = (campo) => {
    campo.style.backgroundColor = "Lime"
}
const pierdoFoco = (campo) => {
    //guardarDatosForm(campo)
    guardarDatosFormJSON(campo)
    campo.style.backgroundColor = "white"
}
for (const campo of campos){
    campo.addEventListener("focus", ()=> {reciboFoco(campo)})
    campo.addEventListener("blur", ()=> {pierdoFoco(campo)})
    campo.addEventListener("keyup", (e)=> {
        if(e.key == "Enter"){
            let pos = campo.tabIndex
            let ultimoTabIndex = (pos == (campo.length -1))
            if (ultimoTabIndex){
                campos[0].focus()
            }else{
                campos[pos + 1].focus()
            }
        }
    })
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    //valido el ingreso del telefono al presional el boton
    validoIngresoDatos()
})

//const ER = / \w /

/* 
    EXPRESIONES REGULARES textos signos y numeros

    \w word - caracteres alfanumericos
    \W not word - negacion de word
    \d digitos
    \D not digits - negacion de digitos
    \s sings espacios, saltos de linea, signos de puntuacion y expresion
*/

/* 
    EXPRESIONES ESPECIALES 

    /*
    {N} un numero
    {N, M} dos o mas numero, minimo y maximos caracteres aceptables
    * entre 0 y muchas instancias de algun caracter {0,m}
    *() entre 1 y muchas instancias de algun caracter {1,m} a diferencia del 0 minimo tiene q tener 1
*/

/* 
    CARACTER DE POSICION
    
    caracter de carrèt ^ el caracter a buscar se encuentra al comienzo del string en cuestion
    $ final del string en cuestion
    boundry \b buscar algo en el final de una palabra en cuestion
*/

let reDigitosTelefono = /^[0-9]{8,15}$/ //expresion regular verificando de principio ^ a fin $ que tenga numero del 0 al 9 y que sea entre 10 minimo y 15 maximo
let reDigitosNombre = /^[a-zA-ZÁ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/

const validoIngresoDatos = () =>{
    //debugger
    valorTelefono = parseInt(telefono.value) //telefono.value
    resTelefono = reDigitosTelefono.test(valorTelefono)

    valorNombre = nombre.value
    resNombre = reDigitosNombre.test(valorNombre)
    
    //operador ternario, lo son el ? (representa la 1ra condicion del if y los : representan el else) //solo sirve si solo hay q devolver una respeusta unica
    resTelefono && resNombre ? console.log('Pasaron las validaciones') : console.error('No pasaron las validaciones')

    // if(resTelefono && resNombre){
    //     console.log('Pasaron las validaciones')
        
    // }else{
    //     console.error('No pasaron las validaciones')
    // }
}

const cargoSelect = ()=>{
    //debugger
    let contenido
    for (let i=0; i < 15; i++){
        contenido += `<option>Seleccion ${{i}}</option>`
    }
    seleccion.innerHTML = contenido
}
$('h1')




