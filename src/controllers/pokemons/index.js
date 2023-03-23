const PokemonService = require('../../services/pokemons/index');
const pokemonService = new PokemonService();

const get = async (req, res) => {
    try {
      // console.log(pokemonService.queryAll())
      const pokemons = await pokemonService.queryAll();
      res.status(200).json(pokemons);
    } catch(error) {
      res.status(404).json( { message: 'no hay pokemons' } );
    }
}

const getById = (req, res) => {

}

const create = (req, res) => {
  try {
    const newPokemon = req.body;
    pokemonService.createPokemon(newPokemon);
    res.status(201).send();
  } catch(error) {
    res.status(500).json( { message: 'error fatal' } )
  }
  
}

const editPartial = (req, res) => {

}

const editComplete = (req, res) => {

}

const deletePokemon = (req, res) => {

}

module.exports = {
    get,
    getById,
    create,
    editPartial,
    editComplete,
    deletePokemon,
}