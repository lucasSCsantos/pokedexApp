import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import getPokemonDetails from '../../services/getPokemonDetails';
import { PokemonProps } from '../../@types/pokemon';

function About() {
  const [pokemon, setPokemon] = useState<PokemonProps | false>(false);
  const name = "bulbasaur"

  useEffect(() => {
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      setPokemon(details);
    }

    getPokemon(name);
  }, [name])
  
  return (
    <Container>
      <Text>About</Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default About;
