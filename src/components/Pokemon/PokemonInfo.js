import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('change pokemon');
      this.setState({ loading: true });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Нет покемона с именем ${nextName}`));
        })
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && <div>loading...</div>}
        {!pokemonName && <div>Input name pokename</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="240"
            />
          </div>
        )}
      </div>
    );
  }
}
