import React, { Component } from 'react';
import Pokecard from './Pokecard';

// renders series of pokemon card
class Pokedex extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: 'Charmander', type: 'fire' },
      { id: 7, name: 'Squirtle', type: 'water' },
      { id: 12, name: 'Butterfree', type: 'flying' },
      { id: 19, name: 'Rattata', type: 'normal' },
      { id: 11, name: 'Metapod', type: 'bug' }
    ]
  };
  render() {
    return (
      <div className="pokedex">
        <h1>My Awesome Pokedex</h1>
        {this.props.pokemons.map(pokemon => (
          <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
