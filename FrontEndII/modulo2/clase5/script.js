function escribirHTML(titulo, texto) {
    const body = document.querySelector('body');
    const miTemplate = `<h1>${titulo}</h1> <p>${texto}</p>`;
    body.innerHTML += miTemplate;
   }
   escribirHTML("Hola", "Esto es un ejemplo de template string en html.");
