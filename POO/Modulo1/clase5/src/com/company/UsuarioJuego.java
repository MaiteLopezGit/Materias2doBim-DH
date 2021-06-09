package com.company;

public class UsuarioJuego {

    //Atributos
    private String nombre;
    private String clave;
    private double puntaje;
    private int nivel;

    //Metodos

    public String getNombre(){
        return nombre;
    }
    public String getClave(){
        return clave;
    }
    public double getPunatje(){
        return puntaje;
    }
    public int getNivel(){
        return nivel;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public void setClave(String clave){
        this.clave=clave;
    }
    public void setPuntaje(double puntaje){
        this.puntaje = puntaje;
    }
    public void setNivel( int nivel){
        this.nivel = nivel;
    }

    //Constructor
    public UsuarioJuego(String nombre, String clave){
        this.nombre = nombre;
        this.clave = clave;
        puntaje = 0.0;
        nivel = 0;
    }

    public void aumentarPuntaje(){
        this.puntaje ++;
    }

    public void subirNivel(){
        this.nivel ++;
    }

    public void bonus(int valor){
      this.puntaje += valor;
    }
}
