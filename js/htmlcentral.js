var productContainer = document.querySelector('.redesTop')

var redesSociales=[
{ logoImagen : 'imagenes/Yout.jpg',
  alterno :'youtube',
  marcaImagen: 'Youtube',
},           
{ logoImagen : 'imagenes/Face.png',
  alterno :'Facebook',
  marcaImagen: 'Facebook', 
},
{ logoImagen : 'imagenes/Inst.jpg',
  alterno :'insta',
  marcaImagen: 'Instagram',
},
{ logoImagen : 'imagenes/Wats.jpg',
  alterno :'wassp',
  marcaImagen: 'Wassap',
},
]

for(var i=0; i<redesSociales.length; i++){
    productContainer.innerHTML += '<img src="' + redesSociales[i].logoImagen + '"alt="' + redesSociales[i].alterno +
    '"width="30" height="30"><a>' + redesSociales[i].marcaImagen + '</a>'
}

// cartel de las cookies abajo // 
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
