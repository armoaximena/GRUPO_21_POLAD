// const fs = require("fs");


// function importarComentarios(){
//     const data = fs.readFileSync("../comentariosBD.json", "utf-8");     //leemos el archivo Json
//     const comentarios = JSON.parse(data);                               //Convertimos el JSON a un array
//     //console.log(comentarios);                            
//     return comentarios;                                                //retorna el array de comentarios
// }

// //exportartamos la funcion para que pueda ser usada en otros archivos
// module.exports = {
//     importarComentarios
// };

// importarComentarios();
// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(express.static('public'));

// const archivoJson = 'comentariosBD.json';

// // Ruta para obtener los datos JSON
// app.get('/datos', (req, res) => {
//     fs.readFile(path.join(__dirname, archivoJson), 'utf8', (err, data) => {
//         if (err) {
//             res.status(500).send('Error al leer el archivo JSON.');
//             return;
//         }
//         res.send(data);
//     });
// });

// // Ruta para agregar datos al archivo JSON
// app.post('/datos', (req, res) => {
//     fs.readFile(path.join(__dirname, archivoJson), 'utf8', (err, data) => {
//         if (err) {
//             res.status(500).send('Error al leer el archivo JSON.');
//             return;
//         }
//         const datos = JSON.parse(data);
//         const nuevoComentario = req.body;
//         datos.push(nuevoComentario);

//         fs.writeFile(path.join(__dirname, archivoJson), JSON.stringify(datos, null, 2), (err) => {
//             if (err) {
//                 res.status(500).send('Error al escribir el archivo JSON.');
//                 return;
//             }
//             res.status(200).send('Datos agregados correctamente.');
//         });
//     });
// });

// app.listen(port, () => {
//     console.log(`Servidor escuchando en http://localhost:${port}`);
// });
//arriba




// let comentarioJson =`[
//                       {"email": "armoaximena@gmail.com",
//                       "coment": "Hola que tal, quiero saber si la categoria 3 aumenta el próximo mes?"},
//                       {"email": "ingenias@gmail.com",
//                         "coment": "Todos los servicios se cubren uniformados?"}
//                       ]`;




//Constructor del objeto
// function Comentario(email,coment) {
//     this.email = email;
//     this.coment = coment;
// }

// function insertarComentario(comentarioJson,comentarioObj){
//     let email = prompt("Ingrese su email");
//     console.log("el mail del log " + email);
//     let coment = prompt("Ingrese su comentario");
//     console.log("comentario del log " + coment.innerHTML);
//     if (coment.length > 101) {
//         return alert("Su comentario no puede superar los 100 caracteres");
//     } 
//     else {
//         const comentario1 = new Comentario(email,coment); //creamos el objeto con los datos ingresados
//         let comentarioConvertidoJson = JSON.stringify(comentario1); //lo convertimos a JSON
//         localStorage.setItem('comentario', comentarioConvertidoJson); //lo almacenamos en localStorage
//         comentarioObj.push(comentario1); //agregamos el comentario nuevo al array de objetos
//         comentarioJson = JSON.stringify(comentarioObj); //actualizo la base de datos (Json) con el nuevo comentario  
//         return comentarioJson;
//     }
// };


// let comentarioObj = JSON.parse(comentarioJson);
// let arrayJson = insertarComentario(comentarioJson,comentarioObj);
// let arrayObj = JSON.parse(arrayJson);
// console.log("La base de datos contiene los siguientes elementos:")
// for (let i=0 ; i < arrayObj.length ; i++){
//     console.log("El usuario: " + arrayObj[i].email +  " ,comentó: " + arrayObj[i].coment);
// }

// const { importarComentarios } = require("./comentarios.js");

// fetch("datos.json")
//     .then (response => response.json())
//     .then (data => {
//         console.log(data);
//     })
//     .catch(error => console.error("Error al cargar el archivo JSON:",error));


// document.getElementById("comentariosForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const comentarios = importarComentarios();

//     const coment = document.getElementById("comentarioID").value;
//     const email = document.getElementById("emailID").value;

//     const nuevoComentario = {
//         email: email,
//         coment: coment
//     };
    
//     comentarios.push(nuevoComentario);

//     localStorage.setItem("comentarios", JSON.stringify(comentarios));

//     let comenLis = JSON.parse(localStorage.getItem("comentarios"));

//     for (let i=0 ; i < comenLis.length ; i++){
//         console.log("El usuario: " + comenLis[i].email +  " ,comentó: " + comenLis[i].coment);
//     }

// });


// document.addEventListener("DOMContentLoaded", function() {
//     const enviarBtn = document.getElementById("enviarID");
//     const email = document.getElementById("emailID");
//     const coment = document.getElementById("comentarioID");
//     const contenido = document.getElementById("contenidoID");

//     // Función para cargar los datos desde el localStorage y mostrarlos
//     function cargarDatos() {
//         fetch('/datos')
//             .then(response => response.json())
//             .then(data => {
//                 contenido.innerHTML = "<h2>Lista de Comentarios</h2><ul>";
//                 data.forEach(comentario => {
//                     contenido.innerHTML += `<li>ID:Email: ${comentario.email}, Comentario: ${comentario.coment}</li>`;
//                 });
//                 contenido.innerHTML += '</ul>';
//                 console.log(data);
//             })
//             .catch(error => console.error('Error al cargar los datos:', error));
//     }

//     // Cargar datos al iniciar la página
//     cargarDatos();

//     enviarBtn.addEventListener('click', function() {
//         const email = emailInput.value;
//         const coment = comentInput.value;

//         if (email && coment) {
//             // Crear el nuevo objeto
//             //const nuevoId = Date.now(); // Usar timestamp como ID único
//             const nuevoComentario = {
//                 email: email,
//                 coment: coment
//             };

//              // Enviar el nuevo objeto al servidor
//              fetch('/datos', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(nuevoComentario)
//             })
//             .then(response => {
//                 if (response.ok) {
//                     // Limpiar los inputs
//                     emailInput.value = '';
//                     comentInput.value = '';
//                     // Actualizar la vista
//                     cargarDatos();
//                 } else {
//                     console.error('Error al agregar los datos.');
//                 }
//             })
//             .catch(error => console.error('Error al enviar los datos:', error));
//         } else {
//             alert('Por favor, ingrese un mail válido y un comentario.');
//         }
//     });
// });


// // Define la ruta del archivo JSON
// const jsonUrl = './comentariosBD.json';

// // Función para cargar y mostrar la base de datos inicial
// function comentariosIniciales() {                                           
//     fetch(jsonUrl)
//         .then(response => response.json())
//         .then(comentariosData => {
//             console.log('Base de datos inicial:');
//             for (let i=0 ; i < comentariosData.length ; i++){
//                 console.log("El usuario: " + comentariosData[i].email +  " ,comentó: " + coment[i].coment);
//                 }
                     
//         })
//         .catch(error => console.error('Error al cargar la base de datos inicial:', error));
// }

// // Función para actualizar la "base de datos" 
// function actualizarBaseDeDatos(comentario) {
//     fetch(jsonUrl)
//         .then(response => response.json())
//         .then(comentariosData => {
//             // Añadir nuevo comentario
//             comentariosData.push(comentario);

//             // Guardamos esta nueva lista en Local Storage también
//             localStorage.setItem('comentarios', JSON.stringify(comentariosData));

//             //console.log('comentarios actualizados:', comentariosData);
//             for (let i=0 ; i < comentariosData.length ; i++){
//                 console.log("El usuario: " + comentariosData[i].email +  " ,comentó: " + coment[i].coment);
//                 }
                
//         })
//         .catch(error => console.error('Error al actualizar los comentarios:', error));
// }


// // Añadir comentario al formulario
// document.getElementById('comentariosForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Crear objeto comentario desde los valores del formulario
//     const comentario = {
//         email: document.getElementById('emailID').value,
//         coment: document.getElementById('comentarioID').value,
//     };

//     // Guardar el comentario en Local Storage
//     localStorage.setItem('comentarioNew', JSON.stringify(comentario));

//     // Llamar a una función para actualizar la "base de datos" 
//     actualizarBaseDeDatos(comentario);
// });


// // Llamar a la función al cargar la página
// window.onload = comentariosIniciales;


let comentarioJson =`[
                      {"email": "armoaximena@gmail.com",
                      "coment": "Hola que tal, quiero saber si la categoria 3 aumenta el próximo mes?"},
                      {"email": "ingenias@gmail.com",
                        "coment": "Todos los servicios se cubren uniformados?"}
                      ]`;

//Constructor del objeto
function Comentario(email,coment) {
    this.email = email;
    this.coment = coment;
}

function insertarComentario(comentarioJson,comentarioObj){
    let email = prompt("Ingrese su email");
    let coment = prompt("Ingrese su comentario");
    if (coment.length > 101) {
        return alert("Su comentario no puede superar los 100 caracteres");
    } 
    else {
        const comentario1 = new Comentario(email,coment); //creamos el objeto con los datos ingresados
        //let comentarioConvertidoJson = JSON.stringify(comentario1); //lo convertimos a JSON
        //localStorage.setItem('comentario', comentarioConvertidoJson); //lo almacenamos en localStorage
        comentarioObj.push(comentario1); //agregamos el comentario nuevo al array de objetos
        comentarioJson = JSON.stringify(comentarioObj); //actualizo la base de datos (Json) con el nuevo comentario  
        //console.log()
        localStorage.setItem('comentario', comentarioJson); //lo almacenamos en localStorage
        return comentarioJson;
    }
};


let comentarioObj = JSON.parse(comentarioJson);
let arrayJson = insertarComentario(comentarioJson,comentarioObj);
let arrayObj = JSON.parse(arrayJson);
console.log("La base de datos contiene los siguientes elementos:")
for (let i=0 ; i < arrayObj.length ; i++){
    console.log("El usuario: " + arrayObj[i].email +  " ,comentó: " + arrayObj[i].coment);
}

// const { importarComentarios } = require("./comentarios.js");

// fetch("datos.json")
//     .then (response => response.json())
//     .then (data => {
//         console.log(data);
//     })
//     .catch(error => console.error("Error al cargar el archivo JSON:",error));


// document.getElementById("comentariosForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const comentarios = importarComentarios();

//     const coment = document.getElementById("comentarioID").value;
//     const email = document.getElementById("emailID").value;

//     const nuevoComentario = {
//         email: email,
//         coment: coment
//     };
    
//     comentarios.push(nuevoComentario);

//     localStorage.setItem("comentarios", JSON.stringify(comentarios));

//     let comenLis = JSON.parse(localStorage.getItem("comentarios"));

//     for (let i=0 ; i < comenLis.length ; i++){
//         console.log("El usuario: " + comenLis[i].email +  " ,comentó: " + comenLis[i].coment);
//     }

// });

// let cometarios = insertarcomentario();
// console.log("La base de datos contiene los siguientes elementos: ")




