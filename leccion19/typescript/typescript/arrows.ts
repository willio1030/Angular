
/*
leccion 18 funciones flecha
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

   const sumarN = function (a: number, b: number = 7) {
      return a + b;
   }

   const sumarF = (a: number, b: number) => a + b;


   console.log(sumarN(4,));
   console.log(sumarF(3, 3));


})();


(function () {

   const hulk = {
      nombre: 'hulk',
      smash() {

         console.log(`${this.nombre} smash!!!`)
      }
   }

   hulk.smash()


})();


(function () {

   const hulk = {
      nombre: 'hulk',
      smash() {

         setTimeout(() => {

            console.log(`${this.nombre} smash!!!`)

         }, 1000);


      }
   }

   hulk.smash()

   /*
   cuando utilizamos:
   setTimeout (funtion(){
   console.log (`${this.nombre} smash!!);
   },1000);
   apesar que this deberia apuntar al objeto cuando utilizamos
   una funcion function estamos cambiando el apuntamiento a la 
   funcion autoinvocada muestra error porque apunta a cualquier valor
   */

   /*
   cuando utilizamos:
   setTimeout (()=>{
   console.log (`${this.nombre} smash!!);
   },1000);
   la funciones de flecha no modifican el apuntamiento de la funcion
   en este caso apunta al metodo nombre
   */
   /* 
   this nos permite apuntar hacia el objeto
   */





})();




