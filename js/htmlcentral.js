

var aceptar = document.querySelector('.cookie a')
var mostrarmensaje = false
var cartelcookies = document.querySelector('.cookie')

if(mostrarmensaje){
    cartelcookies.style.display='none'
}

aceptar.addEventListener('click', function(){
    cartelcookies.style.display='none'
}
)

// enviar mail//
//footer form button//
var botonEnviar = document.querySelector('footer form button')

botonEnviar.addEventListener('click', function () {
    botonEnviar.parentElement.remove()

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Muchas gracias! Pronto nos comunicamos."
 
    document.querySelector('footer').appendChild(parrafo)
})