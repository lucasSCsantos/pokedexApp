import { Container, InfoContainer } from './styles';
import React, { useEffect, useState } from 'react';
import getPokemonDetails from '../../services/getPokemonDetails';
import { Color, PokedexDataProps, PokemonProps } from '../../@types/pokemon';
import { Description, FilterTitle } from '../../components/typography';
import PokedexData from './PokedexData';
import getPokedexData from '../../helpers/getPokedexData';
import pokedexDataMock from '../../mocks/pokedexDataMock';
import FaceData from './FaceData';
import getSpecieDetails from '../../services/getSpecieDetails';
import { connect } from 'react-redux';
import { PokemonState } from '../../store/pokemon/types';
import correctDescription from '../../helpers/correctDescription';
import StatsData from './StatsData';
import { ScrollView } from 'react-native-gesture-handler';

interface AboutProps {
  pokemonName: string,
}

function About({ pokemonName }: AboutProps) {
  const [pokemon, setPokemon] = useState<PokemonProps | false>(false);
  const [pokedexData, setPokedexData] = useState<PokedexDataProps>(pokedexDataMock);
  const [description, setDescription] = useState('');
  const name = pokemonName;

  useEffect(() => {
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      const data = await getPokedexData(details);
      setPokedexData(data)
      setPokemon(details);
    }

    getPokemon(name);
  }, [name])

  useEffect(() => {
    const getDescription = async (specie: string) => {
      const result = await getSpecieDetails(specie);
      const entries = result.flavor_text_entries;
      const text = correctDescription(entries);
      if (text) setDescription(text);
    }
    
    if (pokemon) getDescription(pokemon.species.name);
  }, [pokemon])

  return (
    <>
      {
        !!(pokemon && description) && (
          <Container color={pokemon && pokemon.types[0].type.name as Color}>
            <FaceData pokemon={pokemon} />
            <FilterTitle color="white" style={{position: "absolute", bottom: "65%"}}>
              About
            </FilterTitle>
            <InfoContainer>
              <ScrollView style={{ marginTop: 40 }} showsVerticalScrollIndicator={false}> 
                <Description color="grey">{`${description}`}</Description>
                <PokedexData data={pokedexData} />
                <StatsData stats={pokemon.stats} type={pokemon && pokemon.types[0].type.name as Color} />
              </ScrollView>
            </InfoContainer>
          </Container>
        )
      }
    </>
  );
};

const mapStateToProps = (state: PokemonState) => ({
  pokemonName: state.pokemon.pokemon,
});

export default connect(mapStateToProps, null)(About)
