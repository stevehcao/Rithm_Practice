class Pokedex extends React.Component {
  // this.props.pokemon because you already have default props from below
  // or place static default pros inside

  render() {
    const { pokemon } = this.props;
    // where you want to render the card
    console.log('pokemon=', pokemon);
    return pokemon.map(pokeObj => (
      <Pokecard name={pokeObj.name} type={pokeObj.type} image={pokeObj.image} />
    ));
    // <li key={pokeObj.id}>{pokeObj.name}</li>);
  }
}

Pokedex.defaultProps = {
  pokemon: [
    {
      id: 1,
      name: 'Charmander',
      type: 'fire',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    {
      id: 2,
      name: 'Squirtle',
      type: 'water',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    },
    {
      id: 3,
      name: 'Butterfree',
      type: 'flying',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'
    },
    {
      id: 4,
      name: 'Rattata',
      type: 'normal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
    },
    {
      id: 5,
      name: 'Metapod',
      type: 'bug',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
    }
  ]
};

class Pokecard extends React.Component {
  render() {
    // where you want to render EACH card
    const { name, type, image } = this.props;
    // must return on same line
    return (
      <div className="pokecard">
        <img src={image} alt="#" />
        <div className="container">
          <h4>
            <b>Name: {name} </b>
          </h4>
          <p>Type: {type}</p>
        </div>
      </div>
    );
  }
}
