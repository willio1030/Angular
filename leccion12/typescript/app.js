"use strict";
/*
configuracion tsconfig.json este archivo nos sirve para
la configuracion de acciones que deseamos que se apliquen
en la transpilacion de typescript a javascript

*/
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    const wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();
