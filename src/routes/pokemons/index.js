const express = require('express');
const { get, getById, create, editComplete, editPartial, deletePokemon } = require('../../controllers/pokemons/index')
const pokemonRouter = express.Router();

pokemonRouter.get('/', get);

pokemonRouter.get('/:id/', getById);

pokemonRouter.post('/', create);

pokemonRouter.patch('/:id', editPartial);

pokemonRouter.put('/:id', editComplete);

pokemonRouter.delete('/:id', deletePokemon);

module.exports = pokemonRouter;

