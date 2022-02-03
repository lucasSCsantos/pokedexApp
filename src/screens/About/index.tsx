import { Text } from 'react-native';
import { Container, InfoContainer } from './styles';
import { useEffect, useState } from 'react';
import getPokemonDetails from '../../services/getPokemonDetails';
import { Color, PokemonProps } from '../../@types/pokemon';
import { Description } from '../../components/typography';
import PokedexData from './PokedexData';

function About() {
  const [pokemon, setPokemon] = useState<PokemonProps | false>(false);
  const name = "bulbasaur"

  useEffect(() => {
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      setPokemon(details);
    }

    getPokemon(name);
    console.log(pokemon)
  }, [name])
  
  return (
    <>
      {
        pokemon && (
          <Container color={pokemon && pokemon.types[0].type.name as Color}>
            <InfoContainer>
              <Description color="grey">
                Bulbasaur can be seen napping in bright sunlight.
                There is a seed on its back.
                By soaking up the sun's rays, the seed grows progressively larger.
              </Description>
              <PokedexData />
            </InfoContainer>
          </Container>
        )
      }
    </>
  );
};

export default About;
