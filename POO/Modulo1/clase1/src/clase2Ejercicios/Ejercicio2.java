package clase2Ejercicios;

import java.util.Scanner;

public class Ejercicio2 {
/*
Ejercicio 2
        Escribir una función que reciba tres números y devuelva el máximo entre los tres números.
        Integer maximoEntreTresNumeros(Integer unNumeroA, Integer unNumeroB, Integer
        unNumeroC)
        Luego hacer un programa que permita el ingreso de 3 valores, utilice la función y muestre
        el resultado.
*/

    static Integer nroMax(Integer unNumeroA, Integer unNumeroB, Integer unNumeroC) {
        Integer maximo = unNumeroA;

        if(maximo<unNumeroB){
            maximo = unNumeroB;
        }
        if (maximo<unNumeroC){
            maximo = unNumeroC;
        }
        return maximo;
    }


    public static void main(String[] arg) {

        Integer unNumeroA;
        Integer unNumeroB;
        Integer unNumeroC;

        int maximo;

        Scanner scanner=new Scanner(System.in);

        System.out.println("Ingrese tres numeros: ");
        unNumeroA = scanner.nextInt();
        unNumeroB = scanner.nextInt();
        unNumeroC = scanner.nextInt();

        maximo = nroMax(unNumeroA,unNumeroB,unNumeroC);

        System.out.println("El numero maximo es "+maximo);

    }
}
