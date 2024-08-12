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
        let comentarioConvertidoJson = JSON.stringify(comentario1); //lo convertimos a JSON
        localStorage.setItem('comentario', comentarioConvertidoJson); //lo almacenamos en localStorage
        comentarioObj.push(comentario1); //agregamos el comentario nuevo al array de objetos
        comentarioJson = JSON.stringify(comentarioObj); //actualizo la base de datos (Json) con el nuevo comentario  
        return comentarioJson;
    }
}

let comentarioObj = JSON.parse(comentarioJson);
let arrayJson = insertarComentario(comentarioJson,comentarioObj);
let arrayObj = JSON.parse(arrayJson);
console.log("La base de datos contiene los siguientes elementos:")
for (let i=0 ; i < arrayObj.length ; i++){
    console.log("El usuario: " + arrayObj[i].email +  " ,comentó: " + arrayObj[i].coment);
}


