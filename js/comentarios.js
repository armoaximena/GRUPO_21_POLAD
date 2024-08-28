// document.addEventListener('DOMContentLoaded', function() {
//     //Primero me traigo lo que tengo en la base de datos json
//     fetch("../js/comentariosBD.json", {
//         method: 'GET',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//         }),   
//     })

let data2 = "../js/comentariosBD.json";
let jsonDB = []



document.addEventListener('DOMContentLoaded', function() {
    //Primero me traigo lo que tengo en la base de datos json

    // Obtener el botón de envío por su ID
    const btnEnviarComentario = document.getElementById('enviarID');


    fetch("../js/comentariosBD.json")
    .then(response => response.json())
    .then(data => {
        // Obtiene y parsea los datos de localStorage o un arreglo vacío si no hay datos
        let localStorageContein = JSON.parse(localStorage.getItem('comentarios')) || [];

        // Función para verificar si un array contiene todos los elementos de otro array
        const containsAll = (container, items) => {
            return items.every(item => 
                container.some(containedItem => 
                    JSON.stringify(containedItem) === JSON.stringify(item)
                )
            );
        };

        // Verifica si los datos de localStorage contienen todos los elementos de data
        if (!containsAll(localStorageContein, data)) {
            // Si no contiene todos los datos, actualiza localStorage
            localStorage.setItem('comentarios', JSON.stringify(data));
            console.log("Datos actualizados en localStorage.");
        } else {
            console.log("Todos los datos ya están presentes en localStorage.");
        }
    })
    .catch(error => console.error("Error al cargar el JSON:", error));


    // Array de comentarios inicializado con datos del localStorage
    arrayDeComentarios = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Función para insertar un comentario
    function insertarComentario(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        let email = document.getElementById('emailID').value;
        let coment = document.getElementById('comentarioID').value;

        if (coment.length > 100) {
            return alert("Su comentario no puede superar los 100 caracteres");
        } else {
            const comentario1 = { email, coment }; // creamos el objeto con los datos ingresados
            console.log(comentario1);
            arrayDeComentarios.push(comentario1); // añadimos el comentario al array

            // Convertimos el array actualizado a JSON y lo almacenamos en localStorage
            localStorage.setItem('comentarios', JSON.stringify(arrayDeComentarios));

            // Limpiar el formulario después de enviar el comentario
            document.getElementById('comentariosFormID').reset();
            
            // Mostrar los comentarios almacenados
            mostrarComentarios();

            //Muestro la base de datos por consola
            console.log(arrayDeComentarios);
            

            return arrayDeComentarios;
        }

    }

    // Función para mostrar los comentarios almacenados
    
    function mostrarComentarios() {
        
        let comentarioContenedorDiv = document.createElement("div")
        let comentariosDiv = document.getElementById('listaComentarios');

        comentariosDiv.innerHTML = '';


        console.log("La base de datos contiene los siguientes elementos:");
        

        arrayDeComentarios.forEach((comentario) => {
            let email = document.createElement("p")
            let comentarioP = document.createElement("p")

            email.innerHTML = "EMAIL: " + comentario.email
            comentarioP.innerHTML = "Comentario: " + comentario.coment


            comentarioContenedorDiv.appendChild(email)
            comentarioContenedorDiv.appendChild(comentarioP)
        });
        comentariosDiv.appendChild(comentarioContenedorDiv)
        comentarioContenedorDiv.classList = "comentario-control"


        
    }

    // Agregar un evento al botón de envío para ejecutar la función insertarComentario
    btnEnviarComentario.addEventListener('click', insertarComentario);

    // Mostrar los comentarios al cargar la página
    mostrarComentarios()
});
