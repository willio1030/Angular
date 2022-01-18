


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
  en este caso imprimira variable constante porque estamos 
  utilizando el espacio de la variable y simplemente
  estamos remplazando su valor
  */

})();


function unafuncion() {

  console.log(1);
  console.log(2);
  console.log(3);
}


unafuncion();
unafuncion();
unafuncion();



/*CONCEPTO DE FUNCION

es un conjunto de instrucciones de codigo que realizan
una tarea o calculan un valor muchas veces toman un valor de
entrada como un valor o un hilo

para declarar una function: funcion(parametros){
  instruccciones
  console.log(1)



}

  LLAMAR UNA FUNCION

 nombre de la funcion + ();
*/

/*
REGRESAR VALORES EN UNA FUNCION DE QUIEN LA LLAMO
 
para esto existe la palabra return 



 */


function dosfuncion() {

  console.log(1);
  return "hola";
  /*
   de esta manera no se imprime nada recordar:llamar la
   funcion, en este punto solo se imprime 1 porque estamos
   llamando solamente la funcion dosfuncion he imprimimos 
   el console.log();

   para imprimir hola por la naturaleza del return
   debemos crear una variable que almacene el resultado
   de return
  */

}
dosfuncion();
const saludo = dosfuncion();

/*
COMO PASAR PARAMETROS EN UNA FUNCION

son valores que nosotros podemos pasar por los parentesis
y los podemos utilizar dentro de la funcion para hacer algo

*/

function suma(a: number, b: number) {

  return a + b;

}

let resultado = suma(5, 10);
console.log(resultado);

/*
PARAMETROS PARA LAS VARIABLES 

los parametros pueden tener parametros por defecto
este es el caso de number

en este caso vamos a pasar solo 5 y 15 se completara
por defecto

*/

function suma1(a: number, b: number = 15) {
  return a + b;
}
let resultado1 = suma1(5);
console.log(resultado1);

/*
PASAR UNA FUNCION ANONIMA A UNA VARIABLE

la funcion this referencian a un objeto.

*/
const tresfuncion = () => {
  console.log(1);

};
tresfuncion();






