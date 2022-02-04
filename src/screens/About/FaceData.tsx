import { useEffect, useState } from 'react';
import { Color, PokemonDataProps, PokemonProps } from '../../@types/pokemon';
import Badge from '../../components/badge';
import { ApplicationTitle, Description, FilterTitle, PokemonName, PokemonNumber } from '../../components/typography';
import correctName from '../../helpers/correctName';
import correctNumbers from '../../helpers/correctNumbers';
import pokemonDataMock from '../../mocks/pokemonDataMock';
import { BadgeContainer, FaceContainer, PokemonImage, FaceInfoContainer } from './styles';

interface FaceDataProps {
  pokemon: PokemonProps,
}

function FaceData({ pokemon }: FaceDataProps) {
  const [pokemonData, setPokemonData] = useState<PokemonDataProps>(pokemonDataMock);

  useEffect(() => {
    if (pokemon) {
      setPokemonData({
        id: correctNumbers(pokemon.id),
        type: pokemon.types[0].type.name as Color,
        typeList: pokemon.types,
        pokemonName: correctName(pokemon.name),
      })
    }
  }, [pokemon])

  const { id, pokemonName, typeList } = pokemonData && pokemonData;
  return (
    <FaceContainer>
      <PokemonImage 
        source={{ 
          uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png` 
        }}
      />
      <FaceInfoContainer>
        <FilterTitle color="number">#{id}</FilterTitle>
        <ApplicationTitle color="white">{pokemonName}</ApplicationTitle>
        <BadgeContainer>
          {typeList.length > 0 ? typeList.map(({ type }, index) => (
            <Badge type={type.name as Color} full key={index} style={{ marginRight: 5 }} />
          )) : (
            <Description color="grey">Loading...</Description>
          )}
        </BadgeContainer>
      </FaceInfoContainer>
    </FaceContainer>
  );
}

export default FaceData;
