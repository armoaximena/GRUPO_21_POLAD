// const nombreList = document.querySelector("#nombreList");

// fetch("http://reqres.in/api/users")
// .then((response) => response.json())
// .then((data) => {
//     const users = data.data;
//     console.log(users);
// })
// .catch((error) => {
//     console.log(error)
// });

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://www.cultura.gob.ar/api/v2.0/institutos/?format=api';

fetch(proxyUrl + apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
