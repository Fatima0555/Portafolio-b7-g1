// CRUD
// Crear Leer Actualizar Borrar

alert("Bienvenido");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Fátima Corona')
  .pauseFor(300)
  .deleteAll(5)
  .typeString('Desarrolladora Fronted JR')
  .pauseFor(1000)
  .start();