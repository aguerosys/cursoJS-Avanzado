// let titulo = 'Nuevo titulo'
// let parrafo = 'Esto es un nuevo parrafo'
// document.querySelector('h1').innerText = titulo //con queryselector se selecciona algun elemento del DOM

// //innertext me permite acceder y configurar el texto del elemento en cuestion

// document.querySelector('p').innerText =  parrafo

// //document.querySelectorAll('h1')[0].innerText = 'hola' //selecciona todos los tags h1 y los trae en un array ordenados para poder acceder a uno que se requiera

// document.getElementById('titulo').innerHTML = 'parrafo cambiado por getelementbyid' 

// const titulo2 = document.querySelector('h1.red-text').innerHTML = 'Hola' //hace referencia al tag h1 con clase red-text
//debugger

// const titulo3 = document.querySelector('#id1') //hace referencia al ID del tag html en cuestion

/* 

    querySelector
    Para seleccionar un input type, usamos (':input')
    Para seleccionar un tag HTML, usamos ('h1')
    Para seleccionar una clase css, usamos ('.red-text')
    Para seleccionar un tag y una clase css, usamos ('h1.red-text')
*/

//titulo.classList //sirve para ver la cantidad de clases css q tiene ese objeto

const titulo3 = document.getElementById('titulo') //hace referencia al ID del tag html en cuestion

//titulo3.classList.add('black')
// titulo3.classList.remove('black')
titulo3.classList.toggle('yellow') //verifica que si NO tiene la clase la agrega

//setAttribute sirve para agregar un atributo determinado a cierto elemento HTML
//sus casos de uso pueden ser para las tablas dinamicas 

titulo3.setAttribute('id', 'titulo3')