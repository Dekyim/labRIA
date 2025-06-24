fetch('https://max-fernandez-utec.github.io/2025/laburapp/laburos')
  .then(respuesta => respuesta.json())
  .then(function(usuarios) {
    console.log('Fetched:', usuarios);

    for (const usuario of usuarios) {
      localStorage.setItem(usuario.id, usuario.name);
    }
});

Object.entries(window.localStorage).forEach(([key, val]) => {
  let boton = document.createElement('button');
  boton.innerText = val;
  document.getElementById('curriculums').appendChild(boton);
});
