/* formulario */
document.getElementById("miformulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    // Validación
    if (nombre === "" || apellido === "" || email === "" || telefono === "") {
        document.getElementById("error-message").textContent = "Por favor, completa todos los campos.";
        return;
    }

    // Validar el formato del email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("error-message").textContent = "Por favor, ingresa un email válido.";
        return;
    }

    // Validar el formato del teléfono (solo números)
    var telefonoRegex = /^\d+$/;
    if (!telefonoRegex.test(telefono)) {
        document.getElementById("error-message").textContent = "Por favor, ingresa solo números en el campo de teléfono.";
        return;
    }

    // Mostrar el loader
    var loaderOverlay = document.getElementById("loader-overlay");
    loaderOverlay.style.opacity = "1";
    loaderOverlay.style.visibility = "visible";

    // Simular un retraso de 3 segundos
    setTimeout(function() {
        // Ocultar el loader
        loaderOverlay.style.opacity = "0";
        loaderOverlay.style.visibility = "hidden";

        // Si la validación pasa, puedes enviar el formulario o realizar otras acciones
        document.getElementById("error-message").textContent = "";
        alert("Formulario enviado correctamente.");
        // Aquí puedes agregar el código para enviar el formulario al servidor
        document.getElementById("miformulario").submit();
    }, 3000);
});


/* formulario */

/* animacion */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  console.log("Página cargada, aplicando clase loader-hidden");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
      console.log("Transición finalizada, removiendo loader");
  });
});
/* animacion */



