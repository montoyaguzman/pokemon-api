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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.pokemones.push(newPokemon);
                resolve(); 
            }, 1000);
        });
    }

    queryAll(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.pokemones); // try
                // reject catch
            }, 1000);
        });
    }

    getById(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundedPokemon = this.pokemones.filter(pokemon => pokemon.id === parseInt(id) )[0];
                resolve(foundedPokemon);
            }, 1000);
        });
    }

    editComplete(id, pokemon){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.pokemones.findIndex(pokemon => pokemon.id === parseInt(id));
                this.pokemones[index] = pokemon;
                resolve();
            }, 1000);
        });
    }

    deletePokemon(){

    }

}

module.exports = PokemonServices;