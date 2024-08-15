// CRUD
// Crear Leer Actualizar Borrar

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Fátima Corona.')
  .pauseFor(300)
  .deleteAll(5)
  .typeString('Futura ingeniera.')
  .pauseFor(1000)
  .start();