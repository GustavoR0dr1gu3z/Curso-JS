// Variables, piedra, pape, tijera, funcionPrincipal

var jugador = "papel";
var cpu = "tijera";

if(jugador == "papel" && cpu == "piedra"){
    console.log("Gana Jugador!");
}else if(jugador == "papel" && cpu == "tijera"){
    console.log("Gana CPU!");
}else if(jugador == "papel" && cpu == "papel"){
    console.log("Empate!");
}else if(jugador == "piedra" && cpu == "piedra"){
    console.log("Empate!");
}else if(jugador == "piedra" && cpu == "papel"){
    console.log("Gana CPU!");
}else if(jugador == "piedra" && cpu == "tijera"){
    console.log("Gana Jugador!");
}else if(jugador == "tijera" && cpu == "piedra"){
    console.log("Gana CPU!");
}else if(jugador == "tijera" && cpu == "papel"){
    console.log("Gana Jugador!");
}else if(jugador == "tijera" && cpu == "Tijera"){
    console.log("Empate!");
}else{
    console.log("¡Dato No Válido!");
}