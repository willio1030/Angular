"use strict";
/*
Demostración Typescript
*/
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    /* clase literal*/
    const wolverine = {
        nombre: 'Logan'
    };
    /* retorno  */
    saludar(wolverine.nombre);
})();
