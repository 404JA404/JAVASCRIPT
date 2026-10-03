
const botonEnviar = document.getElementById("enviar");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");

botonEnviar.addEventListener("click", function(event) {
    
    event.preventDefault(); 
    
    console.log("Botón presionado");
    console.log("Nombre ingresado:", inputNombre.value);
    console.log("Apellido ingresado:", inputApellido.value);
});
