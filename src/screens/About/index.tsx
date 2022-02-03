import { Text } from 'react-native';
import { Container, InfoContainer } from './styles';
import { useEffect, useState } from 'react';
import getPokemonDetails from '../../services/getPokemonDetails';
import { Color, PokedexDataProps, PokemonProps } from '../../@types/pokemon';
import { Description } from '../../components/typography';
import PokedexData from './PokedexData';
import getPokedexData from '../../helpers/getPokedexData';

function About() {
  const [pokemon, setPokemon] = useState<PokemonProps | false>(false);
  const [pokedexData, setPokedexData] = useState<PokedexDataProps | false>(false);
  const name = "bulbasaur"

  useEffect(() => {
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      const data = await getPokedexData(details);
      setPokedexData(data)
      setPokemon(details);
    }

    getPokemon(name);
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
