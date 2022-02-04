import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Color, DataProps, PokedexDataProps } from '../../@types/pokemon';
import Badge from '../../components/badge';
import { Description, FilterTitle, PokemonType } from '../../components/typography';
import { PokedexDataContainer, DataContainer, WeaknessesContainer } from './styles';

interface PokedexDataComponentProps {
  data: PokedexDataProps,
}

function PokedexData({ data }: PokedexDataComponentProps) {

  const renderItem = ({ item }: { item: DataProps }) => (
    <DataContainer>
      <PokemonType color="black" style={{ minWidth: 85 }}>
        {item.title}
      </PokemonType>
      <Description color="grey">
        {typeof item.value !== 'object' ? item.value : 
          (
            <WeaknessesContainer>
              {item.value.map((weak) => (
                <Badge type={weak as Color} key={weak} style={{ marginRight: 10 }} />
              ))}
            </WeaknessesContainer>
          )
        }
      </Description>
    </DataContainer>
  );

  return (
    <PokedexDataContainer>
      <FilterTitle color="black">PokedexData</FilterTitle>
      <FlatList
        style={{ marginTop: 22 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </PokedexDataContainer>
  );
}

export default PokedexData;
