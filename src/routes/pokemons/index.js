const express = require('express');
const { get, getById, create, editComplete, editPartial, deletePokemon } = require('../../controllers/pokemons/index')
const pokemonRouter = express.Router();

// getAll
pokemonRouter.get('/', get);

// getById
pokemonRouter.get('/:id/', getById);

// create
pokemonRouter.post('/', create);

// editPartial
pokemonRouter.patch('/:id', editPartial);

// editComplete
pokemonRouter.put('/:id', editComplete);

// delete
pokemonRouter.delete('/:id', deletePokemon);

module.exports = pokemonRouter;

