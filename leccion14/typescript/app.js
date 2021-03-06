"use strict";
/*
 leccion 14 tipos de datos let any y de objetos
*/
(function () {
    /*
    las variables let se utilizan en typescript para generar
    un scope
    */
    let mensaje = 'hola';
    let numero = 123;
    let booleano = true;
    /*
    CLASE
    la variable hoy va a ser del tipo Date  y va a ser del tipo
    new Date y esta en mayuscula porque estoy creando un objeto
    que va a ser igual a Date o una función constructora
    */
    let hoy = new Date();
    console.log(mensaje, numero, booleano, hoy);
    /*
    la varible cualquiercosa al no ser definida con el tipo de valor
    que acepta puede aguantar cualquier cosa o ANY
    */
    let cualquiercosa;
    /*
    en muy raras ocaciones se debe especificar que tipo
    de variable debe aceptar Any en este caso con | |
    se especifica que tipo de variable se va a utilizar
    */
    function otracosa(a, b) {
        cualquiercosa = mensaje;
        cualquiercosa = numero;
        cualquiercosa = booleano;
        cualquiercosa = hoy;
    }
    otracosa(1, 8);
    console.log(mensaje, numero, booleano, hoy);
    const lacosa = otracosa(4, 5);
    /*
    Typescript hace algo bien intersante con los objetos
    al crear el objeto spiderman con nombre y edad el
    identifica cada una de sus propiedades sin necesidad
    de declarar el tipo
    */
    let spiderman = {
        nombre: 'peter',
        edad: 30
    };
    /*
    con esto crea un cierto candado que obliga a especificar
     las mismas propiedades de sus atributos
     */
    spiderman = {
        nombre: 'william',
        edad: 31
    };
    console.table(spiderman);
})();
