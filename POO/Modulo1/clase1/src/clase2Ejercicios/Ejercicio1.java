package clase2Ejercicios;

import java.util.Scanner;

public class Ejercicio1 {

    /*Ejercicio 1
    Hacer una función que dado un número indica si es un número primo o no. Un número
    primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo,
            ya que 25 es divisible por 1, 5 y 25. 17 sí es primo porque solo se puede dividir por 1 y por
    17.*/
    static boolean esDivisible(int nro, int divisor){
        boolean rta=true;

        if(nro%divisor == 0){
            rta=false;
        }
        return rta;
    }
    static String nroPrimo(int nro) {
        boolean respuesta = true;
        String esPrimo;
        for (int i = 2; i < nro/2; i++) {
            respuesta = esDivisible(nro,i);
        }

        if(respuesta){
            esPrimo = "El numero es primo";
        }
        else{
            esPrimo = "El numero NO es primo";
        }

        return esPrimo;
    }

    public static void main(String[] arg) {

        int numero;

        Scanner scanner=new Scanner(System.in);

        System.out.println("Ingrese un numero");
        numero = scanner.nextInt();

        System.out.println(nroPrimo(numero));
    }
}
