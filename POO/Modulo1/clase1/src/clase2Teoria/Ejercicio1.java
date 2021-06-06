package clase2Teoria;

import java.util.Scanner;

public class Ejercicio1 {

    static String devolverFecha(String d, String m, String a)
    {
        return d+"/"+m+"/"+a;
    }

    public static void main(String[] arg){
        String apellido;
        String nombre;
        char inicial;
        String dia;
        String mes;
        String anio;

        Scanner scanner=new Scanner(System.in);

        System.out.println("Ingresa tu nombre: ");
        nombre = scanner.next();

        System.out.println("--- Mensaje solicitado ---");
        inicial=nombre.charAt(0);
        System.out.println("Nombre: "+nombre);
        System.out.println("Inicial de nombre: "+inicial);
        System.out.println("Ingrese su dia de nacimiento ");
        dia=scanner.next();
        System.out.println("Ingrese su mes de nacimiento ");
        mes=scanner.next();
        System.out.println("Ingrese su anio de nacimiento ");
        anio=scanner.next();


        System.out.println("Fecha de nacimiento "+devolverFecha(dia,mes,anio));
    }
}
