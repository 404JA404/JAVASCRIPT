// 1. Seleccionamos los elementos usando querySelector()
const inputNombre = document.querySelector("#input-nombre");
const inputProfesion = document.querySelector("#input-profesion");
const botonCrear = document.querySelector("#btn-crear");
const contenedor = document.querySelector("#contenedor-tarjetas");

// 2. Escuchamos el clic en el botón
botonCrear.addEventListener("click", function() {
    
    // 3. Capturamos los valores que escribió el usuario (.value)
    const nombreVal = inputNombre.value;
    const profesionVal = inputProfesion.value;

    // Validación simple: no crear tarjetas vacías
    if (nombreVal === "" || profesionVal === "") {
        alert("Por favor, llena ambos campos");
        return; 
    }

    // 4. Creamos la tarjeta físicamente en memoria usando createElement()
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta"); // Le añadimos la clase CSS para el estilo

    // 5. Agregamos el texto del nombre y profesión a la tarjeta
    nuevaTarjeta.innerHTML = `<h3>${nombreVal}</h3><p>${profesionVal}</p>`;

    // 6. Metemos la tarjeta dentro del contenedor usando appendChild()
    contenedor.appendChild(nuevaTarjeta);

    // 7. Limpiamos las cajas de texto para que queden listas para otra tarjeta
    inputNombre.value = "";
    inputProfesion.value = "";
});
