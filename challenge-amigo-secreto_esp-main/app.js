// Creamos un array para almacenar los nombres de amigos
let amigos = [];
// console.log("Amigos iniciales:", nombres);

function agregarAmigo (){
     let nombre = document.getElementById("amigo").value;
     amigos.push (nombre);
    console.log(amigos);
    return;
}



























// // Función para agregar amigos
// function agregarAmigo() {
//     // Capturar el valor del campo de entrada
//     let amigo = document.getElementById("amigo").value;

//     // Validar si el campo no está vacío
//     if (amigo.trim() === "") {
//         // Si está vacío, mostrar un mensaje de error
//         alert("Por favor, inserte un nombre.");
//     } else {
//         // Si el valor es válido, agregarlo al array
//         nombres.push(amigo);

//         // Mostrar el array actualizado en la consola
//         console.log("Array de amigos actualizado:", nombres);

//         // Mostrar un mensaje de éxito
//         alert("¡Agregaste a " + amigo + "!");
//     }

//     // Limpiar el campo de entrada después de agregar
//     document.getElementById("amigo").value = "";

//     // Actualizar la lista visualmente en la página
//     actualizarLista();
// }

// // Función para mostrar la lista de amigos en la página
// function actualizarLista() {
//     // Obtener el contenedor de la lista (ul)
//     let listaElement = document.getElementById("listaAmigos");

//     // Limpiar la lista actual (en caso de que haya nombres anteriores)
//     listaElement.innerHTML = "";

//     // Recorrer el array de amigos y agregar cada uno como un elemento de lista (li)
//     nombres.forEach(function(amigo) {
//         let listItem = document.createElement("li");
//         listItem.textContent = amigo;
//         listaElement.appendChild(listItem);
//     });
// }

// // Mostrar la lista inicial de amigos
// actualizarLista();
