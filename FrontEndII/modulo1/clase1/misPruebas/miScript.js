
let array = [1,10,30,40,50,60]
let suma=0;

function sumarElementos(array){
    array.forEach(element=>{
        suma=suma+element;
        alert(suma);
    })
}

sumarElementos(array);
