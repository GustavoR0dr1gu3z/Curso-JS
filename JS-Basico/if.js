if( true ){
    console.log("Holaaaa");
} else {
    console.log("Adios");
}

if( false ){
    console.log("Holaaaa");
} else {
    console.log("Adios");
}


var edad = 18;

if( edad === 18 ){
    console.log("Puedes votar, primera votación!");
} else if(edad >= 19){
    console.log("Si puedes votar, eres viejo");
}else{
    console.log("No puedes votar");
}

// Operador termario, como if-else
condition ? true : false;

// Ejemplo
var numero = 1;

var resultado = numero === 1 ? "Es numero 1" : "No soy 1";

console.log(resultado);