// CRUD
// Crear Leer Actualizar Borrar

// alert("Hola Mundo! <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Fátima Corona')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter( {
loop: true,
delay: 75,
});
  
  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriterFrase
    .pauseFor(2500)
    .typeString("No importa que un sueño no se cumpla, porque tú eres más que solo un sueño")
    .pauseFor(300)
    .deleteAll()
