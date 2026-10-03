const entradaTarea =
document.querySelector("#entradaTarea");

const botonAgregar =
document.querySelector("#btnAgregar");
const listaTareas =
document.querySelector("#listaTareas");
botonAgregar.addEventListener("click", function () {
const texto = entradaTarea.value.trim();
if (texto === "") {
return;
}
const nuevaTarea = document.createElement("li");
nuevaTarea.textContent = texto;
nuevaTarea.classList.add("tarea");
listaTareas.appendChild(nuevaTarea);
entradaTarea.value = "";
entradaTarea.focus();
});

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Párrafo creado con JavaScript";
document.body.appendChild(nuevoParrafo);

