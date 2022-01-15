


/*
variables let y const leccion 13 
*/

(function () {

  let mensaje = 'hola';

  if (true) {

    let mensaje = 'Mundo'

  }

  console.log(mensaje);


})();



/*
 las variables let solo existen
 en el scope del primer corchete al ultimo
 fuera de ellos o dentro de otra sentencia
 se tendra en cuenta su propio scope
 imprimira 'hola

*/

(function () {

  var mensaje = 'hola';

  if (true) {

    var mensaje = 'Mundo';

  }

  console.log(mensaje);

  /*
  en este caso imprimira mundo porque estamos 
  utilizando el espacio de la variable y simplemente
  estamos remplazando su valor
  */

})();


(function () {

  const documento = 'variable constante';

  if (true) {

    const documento = 'variable constante1';

  }

  console.log(documento)

  /*
  en este caso imprimira variable constante1 porque estamos 
  utilizando el espacio de la variable y simplemente
  estamos remplazando su valor
  */

})();





