
/*
parametros opcionales obligatorios y por defecto
*/

/* 
Argumento obligatorio

el argumento obligatorio se define en los parametros
de la función en este caso debe ser de tipo string 

*/

(function () {

   function activar(quien: string, objeto: string = 'batiseñal') {

      console.log(`${quien} activó la ${objeto}`);

   }

   activar('gordon');


})();



/* Argumentos opcionales
 
 no quiero tener un valor por defecto pero no quiero
 que me marque un error si no lo utilizo

 se utiliza con un ? osea es opcionial

*/


(function () {

   function activar(
      quien: string,
      momento?: String,
      objeto: string = 'batiseñal',
   ) {



      if (momento) {
         console.log(`${quien} activó la ${objeto} en la ${momento}`);

      } else {
         console.log(`${quien} activó la ${objeto}`);

      }

   }
   /*
   como son tres parametros si yo borro batiseñal para
   la salida no pasa nada
   */
   activar('gordon', 'tarde');
   /*
   debemos notar que para cambiar el valor por defecto se 
   hace desde el parametro de salida activar 
   
   */

})();

/* Argumentos por defecto 

si necesito un valor por defecto lo asigno 
  = 'batiseñal'
*/


(function () {

   function activar(quien: string,
      objeto: string = 'batiseñal') {

      console.log(`${quien} activó la ${objeto}`);

   }

   activar('gordon', 'carro');
   /*
   debemos notar que para cambiar el valor por defecto se 
   hace de esta ma manera en la llamada del objeto
   
   */

})();
