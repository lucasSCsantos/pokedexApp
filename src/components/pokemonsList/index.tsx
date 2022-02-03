import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import { useEffect } from 'react';
import { PokemonProps } from '../../@types/pokemon';
import getPokemons from '../../services/getPokemons';
import PokemonCards from './PokemonCards';
import { Container } from './styles';

interface PokemonListProps {
  filter: string;
}

function PokemonsList({ filter }: PokemonListProps) {
  const [pokemons, setPokemons] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      const results = await getPokemons();
      setPokemons(results);
    };
    
    getAllPokemons();
  }, [])
  
  useEffect(() => {
    const list = pokemons.filter((pokemon: PokemonProps) => pokemon.name.includes(filter.toLowerCase()));
    setFilteredList(list);
  }, [filter, pokemons])

  if (!filteredList) {
    return <AppLoading />;
  } else {
    return (
      <Container showsVerticalScrollIndicator={false}>
        {filteredList && filteredList.map(({ name }, index) => (
          <PokemonCards name={name} key={index}/>
        ))}
      </Container>
    );
  }
};

export default PokemonsList;
