package clase3;

import java.util.Scanner;

public class ejercicio1 {

    public static void main(String[] arg){

    }


    public static void quieresJugar(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Desear jugar: Si[1], No[2]");
        int decision = scanner.nextInt();
        if (decision == 1){
            pedirDatos();

        }else{
            System.out.println("Nos Vemos");
        }

    }

    public static int pedirDatos (){

            Scanner scanner = new Scanner(System.in);
            System.out.println("Ingrese el nombre del jugadpr");
            String nombreJugador = scanner.nextLine();

    }

    public static String eligeUsuario () {
        String eleccionUsuario="0";
        while(!(eleccionUsuario == "3" || eleccionUsuario =="2"|| eleccionUsuario.equals("1") || eleccionUsuario == '*')){
            Scanner scanner = new Scanner(System.in);
            System.out.println("Elija Piedra 1 Papael 2 o Tiejrea 3 o * para finalizar");
            eleccionUsuario = scanner.next();

                    if(!(eleccionUsuario == "3" || eleccionUsuario =="2"|| eleccionUsuario =="1" || eleccionUsuario == '*')){
                        System.out.println("Ingrese un valor correcto");
                    }
        }
        System.out.println("El usuario eligio" + eleccionUsuario);
        return  eleccionUsuario;
    }

    public static  String eligePC(){
        int eleccionPC = ((int) Math.random() *3+1);
        return Integer.toString(eleccionPC);
    }
}
