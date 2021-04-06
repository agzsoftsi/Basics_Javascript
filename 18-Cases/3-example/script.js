/**
  * Case consumir API con Fetch
  */
// eslint-disable-next-line no-unused-vars
const buscarData = document.getElementById('mostrar-btn').addEventListener('click', () => {
// declarar la URL
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemon = (document.getElementById('pokename').value).toLowerCase();
  const namePoke = document.getElementById('name-poke');
  const picturePoke = document.getElementById('picture-poke');

  // Hacemos un COnsumo Fetch
  fetch(url + pokemon)
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      mostrarData(data.name, data.sprites.front_default);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
      return err;
    });

  function mostrarData(name, picture) {
    namePoke.innerText = name;
    picturePoke.innerHTML = `<img src='${picture}');>`;
  }
});