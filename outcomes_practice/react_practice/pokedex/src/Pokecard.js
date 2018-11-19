import React, { Component } from 'react';

// const POKE_API =
//   'https://raw.githubusercontent.com/' +
//   'PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    // let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div>
        <div className="pokecard">
          <h3 className="card-name">{this.props.name}</h3>
          <img
            className="card-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              this.props.id
            }.png`}
            alt="#"
          />
          <div className="card-type">Type: {this.props.type}</div>
        </div>
      </div>
    );
  }
}

export default Pokecard;
