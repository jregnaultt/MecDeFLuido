var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Estatica de Fluidos")
  .pauseFor(1000)
  .deleteAll()
  .typeString("+")
  .pauseFor(450)
  .deleteAll()
  .typeString("Dinamica de fluidos")
  .pauseFor(1000)
  .deleteAll()
  .typeString("=")
  .pauseFor(450)
  .deleteAll()
  .typeString("Mecanica de Fluidos")
  .pauseFor(1000)
  .start();
