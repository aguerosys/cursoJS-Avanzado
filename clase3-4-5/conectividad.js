const sinConexion = () => {
    console.error('Se perdio la conexion a internet')
    btnEnviar.setAttribute("disabled", true)
}

const conConexion = () => {
    console.warn('Se perdio la conexion a internet')
    btnEnviar.removeAttribute("disabled")
}

window.addEventListener("offline", sinConexion)

window.addEventListener("online", conConexion)