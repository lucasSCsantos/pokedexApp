import { useState } from 'react';
import { useEffect } from 'react';
import getPokemons from '../../services/getPokemons';
import PokemonCards from './PokemonCards';
import { Container } from './styles';

function PokemonsList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      const results = await getPokemons();
      setPokemons(results);
    };

    getAllPokemons();
  }, [])

  return (
    <Container showsVerticalScrollIndicator={false}>
      {pokemons && pokemons.map(({ name }, index) => (
        <PokemonCards name={name} key={index}/>
      ))}
    </Container>
  );
};

export default PokemonsList;
