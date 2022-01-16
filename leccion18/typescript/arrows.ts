
/*
leccion 17 funciones flecha
*/

/* estamos creando un variable que se llama mi funcion
 y sera igual a una funcion normalita donde retorna 
 un string asignado a la letra a  */


(function () {

   const mifuncion = function (a: string) {
      return a.toUpperCase();
   }

})();

/* la funciones de flecha tienen una caracteristica
   importante: si solo tengo una linea de codigo y esta
   es la que se quiere retornar podemos ahorranos
   la asignación donde se coloca el return */

/*UTILIZACON DE FUNCION FLECHA */
(function () {

   const miFuncionF = (a: string) => a.toUpperCase();
   const miFuncionF1 = (b: string) => b.toUpperCase();
   console.log(miFuncionF('normal'));
   console.log(miFuncionF1('flecha'));

})();

(function () {

   const sumaN = function (c: Number = 5, d: number = 5) {

      return;
   }
   console.log(sumaN(4, 5));
   console.log(sumaN(4, 5));

})();



function sumarF(f: number, g: number) {
   return f + g;
}
const sumarg = (h: number, i: number) => { h + i }




