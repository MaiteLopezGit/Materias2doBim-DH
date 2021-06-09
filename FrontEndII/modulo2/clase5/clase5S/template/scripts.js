const h1 = document.querySelector('h1');

console.log('hello world');

//h1.style = "color = red, font-size = 5em " Supuestamente es igual que la linea 6 y 7 pero no hace nada :(
h1.style.color = 'red';
h1.style.fontSize = '5em';

const li = document.querySelector(' ul li:nth-child(4)');

console.log(li);


const resultado = confirm('desea cambiar la clase?');

if(resultado){
    
    li.classList.toggle('importante');
}

const resultado2 = confirm('desea cambiar la clase');

if(resultado2){
    li.classList.toggle('importante');
}