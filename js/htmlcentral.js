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
// menu del nav //
var menuContainer = document.querySelector('.menulista')
var menusLista =[
    { destinoHtml : 'a1_nosotros.html',
      menuPricipal : 'Nosotros',
      subMenu1 : 'a1_nosotros.html#Anne',
      subMenu1N : 'Anne',
      subMenu2 : 'a1_nosotros.html#Franco',
      subMenu2N : 'Franco',
      subMenu3 : 'null',
      subMenu3N : 'null',
      subMenu4 : 'null',
      subMenu4N : 'null',
      subMenu5 : 'null',
      subMenu5N : 'null',
    },
    { destinoHtml : 'a2_noticias.html',
      menuPricipal : 'Noticias',
      subMenu1 : 'a2_noticias.html#Nacionales',
      subMenu1N : 'Nacionales',
      subMenu2 : 'a2_noticias.html#Internacionales',
      subMenu2N : 'Internacionales',
      subMenu3 : 'a2_noticias.html#cambioMoneda',
      subMenu3N : 'Cambio Monedas',
    },
    { destinoHtml : 'a3_viajes.html',
      menuPricipal : 'Viajes',
      subMenu1 : 'a3_viajes.html#Lugares Imperdibles',
      subMenu1N : 'Lugares Imperdibles',
      subMenu2 : 'a3_viajes.html#Donde dormir?',
      subMenu2N : 'Donde dormir?',
      subMenu3 : 'a3_viajes.html#Donde comer?',
      subMenu3N : 'Donde comer?',
      subMenu4 : 'a3_viajes.html#Que hacer?',
      subMenu4N : 'Que hacer?',
      subMenu5 : 'a3_viajes.html#Visita Obligada',
      subMenu5N : 'Visita Obligada',
    },
    { destinoHtml : 'a4_consejos.html',
      menuPricipal : 'Consejos',
      subMenu1 : 'a4_consejos.html#Estaciones de Servicios',
      subMenu1N : 'Estaciones de Servicios',
      subMenu2 : 'a4_consejos.html#Bancos/Cajeros/Cashbank',
      subMenu2N : 'Bancos/Cajeros/Cashbank',
      subMenu3 : 'a4_consejos.html#Info util Pre-viaje',
      subMenu3N : 'Info util Pre-viaje',
      subMenu4 : 'a4_consejos.html#Estaciones climaticas',
      subMenu4N : 'Estaciones climaticas',
    },
    { destinoHtml : 'a5_rinconp.html',
      menuPricipal : 'El rincon perezoso',
      },
]

for(var i=0; i<menusLista.length; i++){
    menuContainer.innerHTML += '<li class="menu"><a href="' + menusLista[i].destinoHtml + '">' + menusLista[i].menuPricipal +
    '</a><ul class="subm"><li><a href="' + menusLista[i].subMenu1 + '">' + menusLista[i].subMenu1N +'</a></li><li><a href="' + 
    menusLista[i].subMenu2 + '">' + menusLista[i].subMenu2N + '</a></li><li><a href="'+ menusLista[i].subMenu3 + '">' + 
    menusLista[i].subMenu3N + '</a></li><li><a href="' + menusLista[i].subMenu4 + '">' + menusLista[i].subMenu4N + '</a></li><li><a href="' 
    + menusLista[i].subMenu5 + '">' + menusLista[i].subMenu5N + '</a></li></ul></li>'
}


           //* <li class="menu"><a href='a1_nosotros.html'>Nosotros</a>
           //     <ul class="subm">
            //        <li><a href='a1_nosotros.html#Anne'>Anne</a></li>
            //        <li><a href='a1_nosotros.html#Franco'>Franco</a></li>
            //    </ul>
            //</li> -->
            //<li class="menu"><a href='a2_noticias.html'>Noticias</a>
            //    <ul class="subm">
            //        <li><a href='a2_noticias.html#Nacionales'>Nacionales</a></li>
            //        <li><a href='a2_noticias.html#Internacionales'>Internacionales</a></li>
            //        <li><a href='a2_noticias.html#cambioMoneda'>Cambio Monedas</a></li>
            //    </ul>
            //*</li>
            // <li class="menu"><a href='a3_viajes.html'>Viajes</a>
            //     <ul class="subm">
            //         <li><a href='a3_viajes.html#Lugares Imperdibles'>Lugares Imperdibles</a></li>
            //         <li><a href='a3_viajes.html#Donde dormir?'>Donde dormir?</a></li>
            //         <li><a href='a3_viajes.html#Donde comer?'>Donde comer?</a></li>
            //         <li><a href='a3_viajes.html#Que hacer?'>Que hacer?</a></li>
            //         <li><a href='a3_viajes.html#Visita Obligada'>Visita Obligada</a></li>
            //     </ul>
            // </li>
            // <li class="menu"><a href='a4_consejos.html'>Consejos</a>
            //     <ul class="subm">
            //         <li><a href='a4_consejos.html#Estaciones de Servicios'>Estaciones de Servicios</a></li>
            //         <li><a href='a4_consejos.html#Bancos/Cajeros/Cashbank'>Bancos/Cajeros/Cashbank</a></li>
            //         <li><a href='a4_consejos.html#Info util Pre-viaje'>Info util Pre-viaje</a></li>
            //         <li><a href='a4_consejos.html#Estaciones climatica'>Estaciones climaticas</a></li>
            //     </ul>
            // </li>
            // <li class="menu"><a href='a5_rinconp.html'>El rincon perezoso</a></li>
            
            
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

