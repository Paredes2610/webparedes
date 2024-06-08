/* formulario */
const formulario = document.getElementById('miformulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = formulario.querySelector('[placeholder="Nombre"]').value;
  const apellido = formulario.querySelector('[placeholder="Apellido"]').value;
  const telefono = formulario.querySelector('[placeholder="Teléfono"]').value;
  const email = formulario.querySelector('[type="email"]').value;

  const regexTelefono = /^\d+$/;

  if (!nombre || !apellido || !email || !telefono) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (!regexTelefono.test(telefono)) {
    alert('Por favor, ingresa solo números en el campo de teléfono.');
    return;
  }

});
/* formulario */



