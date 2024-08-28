
//<img src="${user.avatar}" alt="" />

const nombreList = document.querySelector("#userList");
const proxyUrl = 'http://localhost:8080/';
const apiUrl = 'https://www.cultura.gob.ar/api/v2.0/institutos/?format=json';

fetch(proxyUrl + apiUrl)
.then((response) => response.json())
.then((data) => {
    const users = data.results 
        for (const user of users) {
            nombreList.insertAdjacentHTML(
                "beforeend",
                `
                <div class="texto-n">
                    <p>${user.nombre || 'No disponible'}</p>
                    <p>${user.direccion || 'No disponible'}</p>
                    <p>${user.telefono || 'No disponible'}</p>
                    <p>${user.email || 'No disponible'}</p>
                    <p>${user.depende_de || 'No disponible'}</p>
                    <hr />
                </div>
                `
            )
        }
})
.catch(error => {
    console.log('Error al obtener los datos:', error);
  });
