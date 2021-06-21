//1era Entrega Proyecto Final. Piedra, Papel, Tijera.
// Se le pide al usuario que ingrese su nombre
let ingreseNombre = prompt("¡Hola! Ingrese su nombre de usuario");
//object del usuario
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
//salida alternativa con mensaje personalizado por consola
const usuario1 = new Usuario({nombre: ingreseNombre + ", disfruta de la experiencia!"});
console.log(usuario1);

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//usuario debe insertar 1|2|3 dependiendo de su herramienta favorita para la primera partida
function eleccion(){
    let elija = prompt("Hola " + ingreseNombre + "! Elija su herramienta favorita: \n\n1. PIEDRA: Gana a Tijera.  \n\n2. PAPEL: Gana a Piedra. \n\n3. TIJERA: Gana a Papel. \n\n[ INSERTE 1 | 2 | 3 ]");
    
    if (elija === "1"){
        alert(ingreseNombre + ", has elegido la Herramienta PIEDRA, buena elección, suerte !");
    }
    else if(elija === "2"){
        alert(ingreseNombre + ", has elegido la Herramienta PAPEL, buena elección, suerte !");
    }
    else if(elija === "3"){
        alert(ingreseNombre + ", has elegido la Herramienta TIJERA, buena elección, suerte !");
    }
}
//llamo la funcion
eleccion();