
/*
leccion 16 templates literales esta adición fue agreagada en EC6
*/

(function () {

   const nombre = 'fernando';
   const apellido = 'Herrera';
   const edad = 33;
   const salida1 = nombre + " " + apellido + " " + "(" + edad + ") ";
   console.log(salida1);

})();

(function () {
   const nombre = 'william';
   const apellido = 'alvarez ';
   const edad = 31;
   const salida2 = `${nombre} ${apellido} (${edad})`;
   console.log(salida2);

})();

(function () {
   const nombre = 'kim';
   const apellido = 'espitia';
   const edad = 23;
   const salida2 = `${nombre}\n ${apellido}\n (${edad})`;
   console.log(salida2);

})();


(function () {
   const nombre = 'veo';
   const apellido = 'loka';
   const edad = 23;
   const salida2 = `
      ${nombre}
      ${apellido}
       (${edad})`;
   console.log(salida2);

})();

/*
 los templates permiten tambien el procesamiento por ejemplo
en la variable edad le puedo sumar 100
*/

(function () {
   const nombre = 'osa';
   const apellido = 'menor';
   const edad = 23;
   const salida2 = `
      ${nombre}
      ${apellido}
       (${edad + 100 + 100})`;
   console.log(salida2);

})();


/*
 los templates permiten tambien el llamado 
 de otras funciones
*/

function getEdad() {
   return 100 + 200 + 300;
}


(function () {

   const nombre = 'osa';
   const apellido = 'menor';
   const edad = 23;
   const salida2 = `
      ${nombre}
      ${apellido}
       (${getEdad()})`;
   console.log(salida2);

})();













