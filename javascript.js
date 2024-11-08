function validarFormulario(event) {
    // Evitar que se envíe el formulario si hay errores
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var pais = document.getElementById("pais").value;
    var comentarios = document.getElementById("comentarios").value;
    var formValido = true;

    // Validar Nombre
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        formValido = false;
    }

    // Validar Correo
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        formValido = false;
    }

    // Validar Teléfono (al menos 10 dígitos)
    var telefonoRegex = /^\+?\d{1,3}[-\s]?\(?\d{1,4}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        formValido = false;
    }

    // Validar Comentarios
    if (comentarios === "") {
        alert("Por favor, ingresa un comentario.");
        formValido = false;
    }

    // Si el formulario es válido, mostrar un mensaje de éxito (simulado)
    if (formValido) {
        alert("Formulario enviado correctamente.");
        // Puedes agregar aquí una acción para enviar los datos, como una llamada AJAX o redirigir a otra página
    }
}