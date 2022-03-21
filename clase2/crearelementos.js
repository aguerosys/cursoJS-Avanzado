/* const doc = document.querySelector('#documento')
const rutaIMG = 'assets/js_img.png'
const rutaVIDEO = 'sources/Black Pumas - Colors (Official Live Session).mp4'

const titulo = document.createElement('h1')
    titulo.innerHTML = 'Titulo creado dinamicamente'
    titulo.classList.add('red-text')
    titulo.id = 'titulo1'
doc.appendChild(titulo) //agregas el como hijo

const imagen = document.createElement('img')
    imagen.width = '100'
    imagen.height = '100'
    imagen.src = rutaIMG
doc.appendChild(imagen)

const video = document.createElement('video')
    video.src = rutaVIDEO
    video.controls = true
doc.appendChild(video)


const audio = document.createElement('audio')
    audio.src = rutaVIDEO
    audio.controls = true
    audio.volume = 0.2 //del 0.0 al 1.0
    audio.autoplay = false
doc.appendChild(audio)
 */
const ul = document.querySelector('ul')
let html = ''

const frutas = ['anana', 'manzana', 'banana']

function cargarFrutas(){
    //debugger
    /* for (let i = 0; i < frutas.length ; i++){
        html += `<li> ${frutas[i]} </li>`
    } */

    for (fruta of frutas){
        html += `<li> ${fruta} </li>`
    }
    ul.innerHTML = html
}

/* cargarFrutas() */
