/*
leccion 16 templates literales esta adición fue agreagada en EC6
*/
(function () {
    var nombre = 'fernando';
    var apellido = 'Herrera';
    var edad = 33;
    var salida1 = nombre + " " + apellido + " " + "(" + edad + ") ";
    console.log(salida1);
})();
(function () {
    var nombre = 'william';
    var apellido = 'alvarez ';
    var edad = 31;
    var salida2 = "".concat(nombre, " ").concat(apellido, " (").concat(edad, ")");
    console.log(salida2);
})();
(function () {
    var nombre = 'kim';
    var apellido = 'espitia';
    var edad = 23;
    var salida2 = "".concat(nombre, "\n ").concat(apellido, "\n (").concat(edad, ")");
    console.log(salida2);
})();
(function () {
    var nombre = 'veo';
    var apellido = 'loka';
    var edad = 23;
    var salida2 = "\n      ".concat(nombre, "\n      ").concat(apellido, "\n       (").concat(edad, ")");
    console.log(salida2);
})();
/*
 los templates permiten tambien el procesamiento por ejemplo
en la variable edad le puedo sumar 100
*/
(function () {
    var nombre = 'osa';
    var apellido = 'menor';
    var edad = 23;
    var salida2 = "\n      ".concat(nombre, "\n      ").concat(apellido, "\n       (").concat(edad + 100 + 100, ")");
    console.log(salida2);
})();
/*
 los templates permiten tambien el procesamiento por ejemplo
en la variable edad le puedo sumar 100
*/
(function () {
    var nombre = 'osa';
    var apellido = 'menor';
    var edad = 23;
    var salida2 = "\n      ".concat(nombre, "\n      ").concat(apellido, "\n       (").concat(edad + 100 + 100, ")");
    console.log(salida2);
})();
function getEdad() {
    return 100 + 200 + 300;
}
(function () {
    var nombre = 'osa';
    var apellido = 'menor';
    var edad = 23;
    var salida2 = "\n      ".concat(nombre, "\n      ").concat(apellido, "\n       (").concat(getEdad(), ")");
    console.log(salida2);
})();
