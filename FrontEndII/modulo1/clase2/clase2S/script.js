/*
//alert("Funciona")

let eleccionUsuario = 0;

while (eleccionUsuario != 1 && eleccionUsuario != 2 && eleccionUsuario != 3) {
  eleccionUsuario = parseInt(
    window.prompt("Elija ¿Piedra(1) Papel(2) o Tijera(3)?")
  );
  if (eleccionUsuario != 1 && eleccionUsuario != 2 && eleccionUsuario != 3) {
    alert("Ingresa un numero valido");
  }
}
const eleccionPC = parseInt(Math.random() * 3 + 1);

const nombre = ["piedra", "papel", "tijera"];

alert("Eleccion Usuario: " + nombre[eleccionUsuario - 1]);
alert("Eleccion PC: " + nombre[eleccionPC - 1]);

// 1 pierde --> 2
// 2 pierde --> 3
// 3 pierde --> 1

switch (eleccionPC) {
  case 1:
    if (eleccionUsuario == 1) {
      //empate
      alert("Empate");
    } else if (eleccionUsuario == 2) {
      //gana usuario
      alert("Ganaste");
    } else if (eleccionUsuario == 3) {
      //gana PC
      alert("Has perdido");
    }
    break;
  case 2:
    if (eleccionUsuario == 1) {
      //Gana PC
      alert("Perdiste");
    } else if (eleccionUsuario == 2) {
      //Empate
      alert("Empate");
    } else if (eleccionUsuario == 3) {
      //gana Usuario
      alert("Ganaste");
    }
    break;
  case 3:
    if (eleccionUsuario == 1) {
      //Gana Usuario
      alert("Ganaste");
    } else if (eleccionUsuario == 2) {
      //Gana PC
      alert("Perdiste");
    } else if (eleccionUsuario == 3) {
      //Empate
      alert("Empate");
    }
    break;
}
*/

//Clase3 S

let nombres=["piedra", "papel", "tijera"];

function eligeUsuario(){
  let usuario;  
    while(!usuario||usuario>3||usuario<1 ){
        usuario=parseInt(prompt("Error. Ingrese 1 si elige piedra, 2 si elige papel, 3 si elige tijera"));
    }
    return usuario;
}

function eligePC(){

  return parseInt(Math.random()*3+1);

}
function calcularQuienGano(usuario,computadora){

  if(usuario===computadora){
    alert("La opcion elegida por ambos fue: "+eleccionUsuario+". Es empate")
}else if((usuario===1 && computadora===2)||(usuario===2 && computadora===3)||(usuario===3 && computadora===1)){
    alert("La opcion elegida por el usuario fue: "+ eleccionUsuario+ " y la opcion elegida por la computadora fue: "+ eleccionComputadora+ ". Gano la computadora")
}else if((usuario===1 && computadora===3)||(usuario===2 && computadora===1)||(usuario===3 && computadora===2)){
    alert("La opcion elegida por el usuario fue: "+ eleccionUsuario+ " y la opcion elegida por la computadora fue: "+ eleccionComputadora+ ". Gano el usuario")
}
};
const eleccionUsuario = eligeUsuario();
const eleccionPC = eligePC();
calcularQuienGano(eleccionUsuario,eleccionPC);
/*

//Mariel

let nombres=["piedra", "papel", "tijera"];

function elecUsuario(){
  
    while(isNaN(usuario)||usuario>3||usuario<1 ){
        usuario=parseInt(prompt("Error. Ingrese 1 si elige piedra, 2 si elige papel, 3 si elige tijera"));
    }
    return usuario;
}

function elecComputadora(){
    let computadora= parseInt(Math.random()*3+1);
    return computadora
}
let usuario=elecUsuario();
let computadora= elecComputadora();
let eleccionUsuario= nombres[usuario-1];
let eleccionComputadora= nombres[computadora-1];

function calcularQuienGana(){
    console.log(usuario);

    if(usuario===computadora){
        alert("La opcion elegida por ambos fue: "+eleccionUsuario+". Es empate")
    }else if((usuario===1 && computadora===2)||(usuario===2 && computadora===3)||(usuario===3 && computadora===1)){
        alert("La opcion elegida por el usuario fue: "+ eleccionUsuario+ " y la opcion elegida por la computadora fue: "+ eleccionComputadora+ ". Gano la computadora")
    }else if((usuario===1 && computadora===3)||(usuario===2 && computadora===1)||(usuario===3 && computadora===2)){
        alert("La opcion elegida por el usuario fue: "+ eleccionUsuario+ " y la opcion elegida por la computadora fue: "+ eleccionComputadora+ ". Gano el usuario")
    }
}

calcularQuienGana();
*/
