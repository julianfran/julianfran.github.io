const mostrarNombre = document.querySelector('input')
const saludo = document.getElementById('saludo')
const header = document.querySelector('header')
const contenedorBienvenida = document.getElementById('contenedorBienvenida')
const bienvenida = document.getElementById('bienvenida')
const contenedor = document.getElementById('contenedor')
const contenedorBilletes = document.getElementById('contenedorBilletes')
const respuestaCorrecta = document.getElementById('correcto')
const respuestaIncorrecta = document.getElementById('incorrecto')

const tablero = document.getElementById('intentosYPuntaje')


//Elementos aleatorios

let dataBilletes = data.billetes

let billeteAleatorio1
let billeteAleatorio2 
let billetesAleatorios = (()=>{
  dataBilletes = data.billetes
  billeteAleatorio1 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]
  billeteAleatorio2 = dataBilletes[Math.floor(Math.random() * data.billetes.length)]
  console.log(billeteAleatorio1)
  console.log(billeteAleatorio2)

})




//Contador de puntaje
let puntaje = 0
let intentos = 0
let opcion1MasGrande
  let opcion2MasGrande
  let opcionIguales
let opciones = (()=>{
  opcion1MasGrande = billeteAleatorio1.valor > billeteAleatorio2.valor;
  opcion2MasGrande = billeteAleatorio1.valor < billeteAleatorio2.valor;
  opcionIguales = billeteAleatorio1.valor === billeteAleatorio2.valor;
})




//Respuestas
let correcto
let incorrecto
let juegoTerminado
let alertas = (()=>{
  correcto = `<div id="correcto">
  <img id="imgRespuesta" src="./assets/correcto.png" alt="respuesta correcta">
  <p id="pRespuesta">RESPUESTA CORRECTA.</p> <p id="pRespuesta">SUMASTE 3 PUNTOS</p>
</div>`


incorrecto = `<div id="incorrecto">
<img id="imgRespuesta" src="./assets/incorrecto.png" alt="respuesta incorrecta">
<p id="pRespuesta">RESPUESTA INCORRECTA.</p><p id="pRespuesta"> RESTASTE 1 PUNTO</p>
</div>`

juegoTerminado = `
<img id="imgJuegoTerminado" src="./assets/gameOver.png" alt="Juego terminado">
<div id="juegoTerminado">

  <p>SE TE ACABARON LOS INTENTOS, <strong>${jugador.toUpperCase()}</strong></p> <p>OBTUVISTE <strong>${puntaje} PUNTOS.</strong></p>
  <a role="buttom" href="./index.html" class="btn btn-light"><i
        class="bi bi-controller"></i> ¡JUGAR DE NUEVO!</button>
</div>`
})




const respuesta = ((opcion) =>{
  const tablero = document.getElementById('intentosYPuntaje')
  intentos += 1
  alertas()
  if(opcion){
    puntaje += 3
    contenedorBilletes.innerHTML = correcto
  }
  else{
    puntaje -= 1
    contenedorBilletes.innerHTML = incorrecto
  }
  if(intentos == 10){
    alertas()
    if(opcion){
      puntaje += 3
      contenedorBilletes.innerHTML = correcto
    }
    else{
      puntaje -= 1
      contenedorBilletes.innerHTML = incorrecto
    }
    setTimeout(function(){contenedorBilletes.innerHTML = juegoTerminado},4000) 
  }
  else{
    let imprimir = `  <p>PUNTAJE: ${puntaje} | INTENTOS: ${intentos}/10</p>`
    tablero.innerHTML = imprimir
    setTimeout(function(){mostrarBilletes()},4000)
  }
 

})

//

//Preguntas
let imprimirPregunta
let preguntas = (()=>{
  let listaPreguntas = [
    `<h2>¿QUÉ BILLETE O MONEDA TIENE <strong>MÁS</strong> VALOR?</h2>
    <div id="opciones">
    <div id="opcion1">
      <h3></h3>
      <img src="${billeteAleatorio1.img}" alt="">
      <button type="button" class="btn btn-success" onclick="respuesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre.toUpperCase()}</button>
  
    </div>
    <div id="opcion2">
      <h3></h3>
       <img src="${billeteAleatorio2.img}" alt="">
       <button type="button" class="btn btn-success" onclick="respuesta(opcion2MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio2.nombre.toUpperCase()}</button>
    </div>
    </div>
    <img src="./assets/igual.png" alt="signo igual">
    <button type="button" class="btn btn-success" onclick="respuesta(opcionIguales)">VALEN LO MISMO</button>
  `,
  `<h2>¿QUÉ BILLETE O MONEDA TIENE <strong>MENOS</strong> VALOR?</h2>
    <div id="opciones">
    <div id="opcion1">
      <h3></h3>
      <img src="${billeteAleatorio1.img}" alt="">
      <button type="button" class="btn btn-success" onclick="respuesta(opcion2MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio1.nombre.toUpperCase()}</button>
  
    </div>
    <div id="opcion2">
      <h3></h3>
       <img src="${billeteAleatorio2.img}" alt="">
       <button type="button" class="btn btn-success" onclick="respuesta(opcion1MasGrande)"><i class="bi bi-hand-index"></i> ${billeteAleatorio2.nombre.toUpperCase()}</button>
    </div>
    </div>
    <img src="./assets/igual.png" alt="signo igual">
    <button type="button" class="btn btn-success" onclick="respuesta(opcionIguales)">VALEN LO MISMO</button>
  ` ];
  imprimirPregunta = listaPreguntas[Math.floor(Math.random() * listaPreguntas.length)];
}) 


// Borrar elemento hijo
const borrarDiv = ((padre, hijo) => {
  padre.removeChild(hijo)
})


// Prevent Default
function stopDefAction(evt) {
  evt.preventDefault();
}


// Imprime el saludo
let imprimirNombre = (() => {
  localStorage.setItem("jugador", nombreUsuario.value)
  jugador = localStorage.getItem("jugador")
  // let imprimir = `
  //                   <div id="saludo">
  //                   <h2>${jugador}</h2>
                    
  //                   <div id="intentosYPuntaje">
  //                   </div>
  //                   </div>
  //                 `
  let imprimirHeader = `
    <h1>JUEGO DE LOS BILLETES</h1>
    <h2>JUGADOR/A: ${jugador.toUpperCase()}</h2>
    <div id="intentosYPuntaje">
    <p>PUNTAJE: ${puntaje} | INTENTOS: ${intentos}/10</p>
    </div>
    
  `
  borrarDiv(contenedor, contenedorBienvenida)
  header.style.cssText = "display:flex"
  header.innerHTML = imprimirHeader
})

let actualizarPuntaje
let mostrarBilletes = (() => {
  
    billetesAleatorios()
    opciones()
    preguntas()
  
      contenedorBilletes.innerHTML = imprimirPregunta
  

  
})

const play = (() =>{
  intentos = 0
  puntaje = 0
imprimirNombre()
mostrarBilletes()
})





