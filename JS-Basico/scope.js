//  2 tipos de Scope

// 1.- Global: Todas las variables
var nombre = "Gus";


// 2.- Local
function fun(){
    var apellido = "Calzada";
    return nombre+" "+apellido; //Nombre = Global,  Apellido = Local
}

fun();