/*DESAFIO

let usuario = alert ("Indique su edad en numeros");

let edad = parseInt(prompt("Ingrese su edad"));

if(edad>18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}
*/

/**JUEGO PIEDRA PAPEL O TIJERA* */

/*Le pido al usuario que ingrese un numero del 1 al 3* */
/*
alert("Para comenzar va a elegir un numero    1: Piedra        2:Papel         3:Tijera");
let rtaUsuario = prompt("Ingrese su opcion en numeros");
let rtaCompu = parseInt( Math.random()*3+1);
console.log(rtaCompu)
if(rtaCompu==1){
    alert("La compu eligió Piedra")
    if(rtaUsuario ==2){
        alert("Felicitaciones me ganaste!!")
    }
    else if(rtaUsuario ==3){
        alert("Ja! Te gané")
    }
    else{
        alert("Empatamos, jugemos otra")
    }
}
else if(rtaCompu==2){
    alert("La compu eligió Papel")
    if(rtaUsuario ==2){
        alert("Empatamos, jugemos otra")
    }
    else if(rtaUsuario ==3){
        alert("Felicitaciones me ganaste!!")
    }
    else{
        alert("Ja! Te gané")
    }
}
else{
    alert("La compu eligió Tijera")
    if(rtaUsuario ==2){
        alert("Ja! Te gané")
    }
    else if(rtaUsuario ==3){
        alert("Empatamos, jugemos otra")
    }
    else{
        alert("Felicitaciones me ganaste!!")
    }
}
*/

let persona = {
    nombre: "Juan",
    edad: 12,
    direccion: "calle falsa 1234",
}

for(let caracteristica in persona){
    console.log(persona[caracteristica]);
}