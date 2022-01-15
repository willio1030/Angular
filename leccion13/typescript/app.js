/*
variables let y const leccion 13
*/
(function () {
    var mensaje = 'hola';
    if (true) {
        var mensaje_1 = 'Mundo';
    }
    console.log(mensaje);
})();
/*
 las variables let solo existen
 en el scope del primer corchete al ultimo
 fuera de lo contrario no en este caso
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
    var documento = 'variable constante';
    if (true) {
        var documento_1 = 'variable constante1';
    }
    console.log(documento);
    /*
    en este caso imprimira mundo porque estamos
    utilizando el espacio de la variable y simplemente
    estamos remplazando su valor
    */
})();
