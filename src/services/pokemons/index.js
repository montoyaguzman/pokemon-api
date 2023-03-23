class PokemonServices {

    constructor() {
        this.pokemones = [];
        // dummy o codigo en duro, simular los datos
        this.generateData();
    }

    generateData() {
        this.pokemones = [
            { id: 1, name: 'bulbasaur', type: 'grass', isActive: true },
            { id: 2, name: 'squirtle', type: 'water', isActive: true },
            { id: 3, name: 'charmander', type: 'fire', isActive: true },
        ];
    }

    createPokemon(newPokemon){
        this.pokemones.push(newPokemon);
    }

    queryAll(){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.pokemones); // try
                // reject catch
            }, 1000);
        })
        
    }

    queryById(){
        const id = req.params.id;
        console.log('req.params: ', id);
        console.log('req.params: ', typeof id);
        // aqui iria la consulta la bd con el id
        const foundedPokemon = pokemons.filter(pokemon => pokemon.id === parseInt(id) )[0];
        console.log('foundedPokemon: ', foundedPokemon);
        res.status(200).json(foundedPokemon);
    }

    editPartial(){
        const id = req.params.id;
        const newPokemon = req.body;
        console.log('newPokemon: ', newPokemon);
        const index = pokemons.findIndex(pokemon => pokemon.id === parseInt(id));
        pokemons[index] = newPokemon;
        console.log('pokemons', pokemons);
        res.status(200).send();
    }

    editComplete(){

    }

    deletePokemon(){

    }

}

module.exports = PokemonServices;