const btnEliminar = document.querySelector('#btnEliminar')

const contactos = []

const camposDeFormulario = {
    nombre: '',
    telefono: '',
    email: ''
}



const guardarDatosFormJSON = ()=>{
    //debugger
    camposDeFormulario.nombre = nombre.value.trim()
    camposDeFormulario.telefono = telefono.value.trim()
    camposDeFormulario.email = email.value.trim()

    const contacto = JSON.stringify(camposDeFormulario)

    contactos.push(camposDeFormulario)
}

const recuperoDatosJSON = () => {
    if (localStorage.getItem('camposDeFormulario') != null){
        datosFormulario = JSON.parse(localStorage.getItem('camposDeFormulario'))
        nombre.value = datosFormulario.nombre
        telefono.value = datosFormulario.telefono
        email.value = datosFormulario.email
    }
}

// const guardarDatosForm = (campo) => {
//     if (campo.value.trim() != ""){
//         localStorage.setItem(campo.id, campo.value.trim())
//     }
   
// }

/* const recuperarDatosLS = () => {
    // nombre.value = localStorage.getItem('nombre')
    // telefono.value = localStorage.getItem('telefono')
    // email.value = localStorage.getItem('email')
    const res = confirm('¿Desea recuperar los datos almacenados??')

    if (res){
        for (campo of campos){
            const respuesta=localStorage.getItem(campo.id)
            if(respuesta != null){
                campo.value = respuesta
            }
        }
    }
    
} */

const eliminarDatosLS = () => {
    for (campo of campos){
        const resp = localStorage.getItem(campo.id)
        if (resp != null){
            localStorage.removeItem(campo.id)
            campo.value = ""
        }
    }
}

//load se dispaara cuando se cargarn los elementos html sin esperar la carga de img y otros elementos multimedia

//DOMContentLoaded espera que se cargue todo y luego se dispara

//document.addEventListener("DOMContentLoaded", recuperarDatosLS())
//document.addEventListener("DOMContentLoaded", recuperoDatosJSON)


btnEliminar.addEventListener("click", eliminarDatosLS)


//cargar datos en tabla

const listaTabla = document.querySelector('#lista')


datosFormulario = JSON.parse(localStorage.getItem('camposDeFormulario'))

datos = Object.values(datosFormulario)

for (let i=0; i < datos.length; i++){
    listaTabla.innerHTML = `<td> ${datos[0]} </td> <td> ${datos[1]} </td> <td> ${datos[2]} </td>`
}



