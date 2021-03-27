// 2 Tipos de coersion

// 1.- Implícitas: Cuando el lenguaje cambia un tipo de valor a otro tipo

var a = 4 + "7";
a 

var b = 4 * "7";
b

// 2.- Explícitas: La forma en que obligamos cuando un valor cambie de tipo

var aa = 20;
var bb = aa+"";

console.log(bb);

var c = String(aa);

var d = Number(c);