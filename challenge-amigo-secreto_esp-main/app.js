// Creamos un array para almacenar los nombres de amigos
let compis = [];

// Función para agregar un amigo
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Cambié "nombres" por "nombre"
    
    // Verificamos si el campo está vacío
    if (nombre == "") {
        alert("Por favor, inserte un nombre");
    } else {
        // Agregamos el nuevo nombre al array
        compis.push(nombre);
        
        // Limpiamos el campo de texto
        document.getElementById("amigo").value = "";
        
        // Mostrar la lista actualizada de amigos en la consola o en el HTML
        console.log("Lista de amigos:", compis); // Esto es para ver la lista en la consola

        mostrarLista();
    }
}

function mostrarLista () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let listaHTML = "";
    for(let i=0; i< compis.length; i++){
        listaHTML += `<li>${compis[i]}</li>`;
    }
    lista.innerHTML = listaHTML;
}

function sortearAmigo (){
    if ( compis.length === 0){
        alert("Tu lista está vacia");
    } 
    else {
        let numeroGenerado = Math.floor(Math.random()*compis.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Tu amigo sorteado es ${compis[numeroGenerado]}`;
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
    }   
}

function Reiniciar() {
    // Vaciar el array de amigos
    compis = [];

    // Actualizar la interfaz
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "<li>La lista ha sido reiniciada</li>"; // Mostrar mensaje en lugar de la lista

    // Si también deseas actualizar otro elemento, por ejemplo, el resultado del sorteo:
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "No hay amigos sorteados.";
}











