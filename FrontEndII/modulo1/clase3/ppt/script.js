
function eligeUsuario() {
  let eleccionUsuario;
  while (eleccionUsuario > 3 || eleccionUsuario < 1 || !eleccionUsuario) {
    eleccionUsuario = parseInt(window.prompt('Piedra(1), papel(2) o tijera(3)?'));
  }
  return eleccionUsuario;
}

function eligePc() {
  return parseInt(Math.random() * 3 + 1);
}

function calcularQuienGano(eleccionUsuario, eleccionPC) {
  console.log(eleccionUsuario);
  console.log(eleccionPC);
  switch (eleccionPC) {
    case 1:
      if (eleccionUsuario == 1) {
        // empate
        return 'nadie';
      } else if (eleccionUsuario == 2) {
        // gana usuario
        return 'usuario';
      } else {
        // pierde usuario
        return 'PC';
      }

    case 2:
      if (eleccionUsuario == 2) {
        // empate
        return 'nadie';
      } else if (eleccionUsuario == 3) {
        // gana usuario
        return 'usuario';
      } else {
        // pierde usuario
        return 'PC';
      }

    case 3:
      if (eleccionUsuario == 3) {
        // empate
        return 'nadie';
      } else if (eleccionUsuario == 1) {
        // gana usuario
       return 'usuario';
      } else {
        // pierde usuario
        return 'PC';
      }

  }
}

function mostrarQuienGano(nombreGanador) {
  alert(nombreGanador + 'ha ganado!');
}

function jugar() {
  const eleccionUsuario = eligeUsuario();
  const eleccionPC = eligePc();
  const ganador = calcularQuienGano(eleccionUsuario, eleccionPC);
  mostrarQuienGano(ganador);
}

const quieresJugar = confirm('Quieres jugar?')

if (quieresJugar) {
  jugar();
}

