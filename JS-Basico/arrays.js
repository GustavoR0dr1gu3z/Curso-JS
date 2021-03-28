// Generar Array
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);

// Imprime el tamaño
console.log(frutas.length);

// Acceder a un elemento
console.log(frutas[0]);
console.log(frutas[2]);

// Métodos

// Mutar (agregar/quitar) elementos
var masFrutas = frutas.push("Uva"); // Elementos al final de l array

// Eliminar el ultimo elemento
var ultimo = frutas.pop("Uva");

// unshift agregar nuevo valor al inicio
var nuevaLongitud = frutas.unshift("Uva");

// shif eliminar elemento que está en inicio
var borrarFruta = frutas.shift("Uva");

// IndexOF Saber la posicion del elemento
var posición = frutas.indexOf("Cereza");