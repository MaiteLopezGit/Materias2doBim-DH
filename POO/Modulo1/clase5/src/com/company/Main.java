package com.company;

public class Main {

    public static void main(String[] args) {
	UsuarioJuego jugador = new UsuarioJuego("Maite","1234Mai");
        System.out.println("Nombre del usuario "+jugador.getNombre()+ " Clave del usuario "+jugador.getClave());
        System.out.println("Cambiar clave ");
        jugador.setClave("125Mai");
        System.out.println("Su nueva clave es: "+jugador.getClave());
        System.out.println("Usted gano 1 punto: ");
        jugador.aumentarPuntaje();
        System.out.println("Usted gano un bonus de 200 puntos y paso de nivel");
        jugador.bonus(200);
        jugador.subirNivel();
        System.out.println("Usted tiene: "+jugador.getPunatje()+ " y esta en el nivel:  "+jugador.getNivel());
    }
}
