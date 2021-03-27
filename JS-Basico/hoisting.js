// Cuando las variables y funciones se procesan 
// antes de que se ejecute el código


// Mandar a llamar la variable antes de declararla
// e inicializarla
console.log(miNombre);
var miNombre = "Gustavo";


// Mandar a llamar la función antes de declararla
// e inicializarla

hola();

function hola() {
    console.log("Hola "+miNombre);
}