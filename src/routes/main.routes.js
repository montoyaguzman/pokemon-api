const routerPokemon = require('./pokemons/index');
// const routerTrainers = require('../routes/traners/index');
// cities
// gyms

const routerApi = (app) => {
    app.use('/pokemon', routerPokemon);
    // app.use('/trainers', routerTrainers);
}

module.exports = routerApi;