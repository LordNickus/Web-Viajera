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
    { destinoHtml : 'a1_nosotros',
      menuPricipal : 'Nosotros',
      subLinks :[{
          destinoHtml : 'a1_nosotros.html#Anne',
          menuPricipal : 'Anne',
        },
        {
          destinoHtml : 'a1_nosotros.html#Franco',
          menuPricipal : 'Franco',
        }],
    },
    {   destinoHtml : 'a2_noticias',
        menuPricipal : 'Noticias',
        subLinks : [{
          destinoHtml : 'a2_noticias.html#Nacionales',
          menuPricipal : 'Nacionales',
      },
      {
         destinoHtml : 'a2_noticias.html#Internacionales',
         menuPricipal : 'Internacionales',
      },
      {  
         destinoHtml : 'a2_noticias.html#cambioMoneda',
         menuPricipal : 'Cambio Monedas',
      }],
    },
    {   destinoHtml : 'a3_viajes',
        menuPricipal : 'Viajes',
        subLinks : [{
          destinoHtml : 'a3_viajes.html#Lugares Imperdibles',
          menuPricipal : 'Lugares Imperdibles',
      },
      {
          destinoHtml : 'a3_viajes.html#Donde dormir?',
          menuPricipal : 'Donde dormir?',
      },
      {
          destinoHtml : 'a3_viajes.html#Donde comer?',
          menuPricipal : 'Donde comer?',
      },
      {
          destinoHtml : 'a3_viajes.html#Que hacer?',
          menuPricipal : 'Que hacer?',
      },
      {
          destinoHtml : 'a3_viajes.html#Visita Obligada',
          menuPricipal : 'Visita Obligada',
      }],
    },
    {   destinoHtml : 'a4_consejos',
        menuPricipal : 'Consejos',
        subLinks : [{
          destinoHtml : 'a4_consejos.html#Estaciones de Servicios',
          menuPricipal : 'Estaciones de Servicios',
      },
      {
          destinoHtml : 'a4_consejos.html#Bancos/Cajeros/Cashbank',
          menuPricipal : 'Bancos/Cajeros/Cashbank',
      },
      {
          destinoHtml : 'a4_consejos.html#Info util Pre-viaje',
          menuPricipal : 'Info util Pre-viaje',
      },
      {
          destinoHtml : 'a4_consejos.html#Estaciones climaticas',
          menuPricipal : 'Estaciones climaticas',
      }],
    },
    { destinoHtml : 'a5_rinconp',
      menuPricipal : 'El rincon perezoso',
      subLinks : [{}]
      },
]

  for(var i=0; i<menusLista.length; i++) {
    menuContainer.innerHTML += '<li class="menu"><a href="' + menusLista[i].destinoHtml + '.html">'
    + menusLista[i].menuPricipal + '</a>'
    for(var j=0; j<menusLista.length; j++) {
        menuContainer.innerHTML += '<ul class="subm"><li><a href="' 
        + menusLista[i].subLinks[j] + '">' + menusLista[i].subLinks[j] + '</a></li></ul></li>'
    
      }
  }
  

// for(var i=0; i<menusLista.length; i++) {
//     for(var j=0; j<menusLista.length; j++) {
//     menuContainer.innerHTML += '<li class="menu"><a href="' + menusLista[i].destinoHtml + '.html">'
//     + menusLista[i].menuPricipal + '</a><ul class="subm"><li><a href="' 
//     + menusLista[i].subLinks[j] + '">' + menusLista[i].subLinks[j] + '</a></li></ul></li>'
//   }
//   }

// function generateLink(menusLista) {
//   return '<li class="menu"><a href="' + menusLista[i].destinoHtml + '">'+ menusLista[i].menuPricipal + '</a>'
  // <ul class="subm"><li><a href="'  + sublinks.destinoHtml[j] + '">' + sublinks.menuPricipal[j] + '</a></li></ul></li>'

  //   for (var i = 0; i < links.length; i++) {
  //     linksContainer.innerHTML += generateLink(links[i])
  // }
  
  // function generateLink(link) {
  //     return '<a href="' + link.href + '">' + link.name + '</a>'
  // }

  
  // for(var j=0; j<subLinks.length; j++)
    // menuContainer.innerHTML += '<li class="menu"><a href="' + menusLista[i].destinoHtml + '">' + menusLista[i].menuPricipal +
    // '</a><ul class="subm"><li><a href="' + menusLista[i].subMenu1 + '">' + menusLista[i].subMenu1N +'</a></li><li><a href="' + 
    // menusLista[i].subMenu2 + '">' + menusLista[i].subMenu2N + '</a></li><li><a href="'+ menusLista[i].subMenu3 + '">' + 
    // menusLista[i].subMenu3N + '</a></li><li><a href="' + menusLista[i].subMenu4 + '">' + menusLista[i].subMenu4N + '</a></li><li><a href="' 
    // + menusLista[i].subMenu5 + '">' + menusLista[i].subMenu5N + '</a></li></ul></li>'

                                        // <li class="menu"><a href='...'>...</a>
                                        //     <ul class="subm">
                                        //         <li><a href='...'>...</a></li>
                                        //     </ul>
                                        // </li>

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

botonEnviar.addEventListener('click', function() {
    botonEnviar.parentElement.remove()

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Muchas gracias! Pronto nos comunicamos."
 
    document.querySelector('footer').appendChild(parrafo)
})

