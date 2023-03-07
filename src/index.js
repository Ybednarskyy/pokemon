import { renderMarkup } from './renderMarkup';

const pokemonList = document.querySelector('.pokemon-list');

fetch('https://pokeapi.co/api/v2/pokemon/20/')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    renderPokemonCard(pokemon);
  })
  .catch(error => console.log(error));

const renderPokemonCard = ({ name, height, weight, sprites }) => {
  const markup = `<div class = "card">
      <img class="card-image" width="auto" src='${sprites.front_default}'
      alt='${name}' />
      <h2 class = 'card-title'>Name: ${name}</h2>
      <p class = 'card-text'>Height: ${height}</p>
      <p class = 'card-text'>Weight: ${weight}</p>
    </div>`;

  pokemonList.innerHTML = markup;
};
