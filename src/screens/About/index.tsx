import { Text } from 'react-native';
import { Container, InfoContainer } from './styles';
import { useEffect, useState } from 'react';
import getPokemonDetails from '../../services/getPokemonDetails';
import { Color, PokedexDataProps, PokemonProps } from '../../@types/pokemon';
import { Description, FilterTitle } from '../../components/typography';
import PokedexData from './PokedexData';
import getPokedexData from '../../helpers/getPokedexData';
import pokedexDataMock from '../../mocks/pokedexDataMock';
import FaceData from './FaceData';

function About() {
  const [pokemon, setPokemon] = useState<PokemonProps | false>(false);
  const [pokedexData, setPokedexData] = useState<PokedexDataProps>(pokedexDataMock);
  const name = "mewtwo"

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
            <FaceData pokemon={pokemon} />
            <FilterTitle color="white" style={{position: "absolute", bottom: "65%"}}>
              About
            </FilterTitle>
            <InfoContainer>
              <Description color="grey">
                Bulbasaur can be seen napping in bright sunlight.
                There is a seed on its back.
                By soaking up the sun's rays, the seed grows progressively larger.
              </Description>
              <PokedexData data={pokedexData} />
            </InfoContainer>
          </Container>
        )
      }
    </>
  );
};

export default About;
