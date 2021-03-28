var jugador = "papel";
var cpu = "tijera";


switch(true){

    case (jugador === cpu):
        console.log("Empate!");
        break;

    case (jugador == "papel" && cpu == "piedra"):
        console.log("Gana Jugador!");
        break;

    case (jugador == "papel" && cpu == "tijera"):
        console.log("Gana CPU!");
        break;

    case (jugador == "piedra" && cpu == "papel"):
        console.log("Gana CPU!");
        break;

    case (jugador == "piedra" && cpu == "tijera"):
        console.log("Gana Jugador!");
        break;

    case (jugador == "tijera" && cpu == "piedra"):
        console.log("Gana CPU!");
        break;

    case (jugador == "tijera" && cpu == "papel"):
        console.log("Gana Jugador!");
        break;

    default:
        console.log("¡Dato No Válido!");
}