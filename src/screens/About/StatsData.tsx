import React, { useState , useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Color } from '../../@types/pokemon';
import { Description, FilterTitle, PokemonType } from '../../components/typography';
import pokemonStatsMock from '../../mocks/pokemonStatsMock';
import getStatsDetails, { StatProps } from '../../services/getStatsDetails';
import StatBar from './StatBar';
import { StatsDataContainer, StatContainer } from './styles';

interface StatsDataProps {
  stats: StatProps[],
  type: Color,
}

function StatsData({ stats, type }: StatsDataProps) {
  const [statsList, setStatsList] = useState(pokemonStatsMock);

  useEffect(() => {
    const list = getStatsDetails(stats);
    setStatsList(list);
  }, [stats])

  const renderItem = ({ item }: { item: typeof pokemonStatsMock[0] }) => (
    <StatContainer>
      <PokemonType color="black" style={{ width: 44  }}>
        {item.name}
      </PokemonType>
      <Description color="grey" style={{ marginLeft: 10, width: 31, textAlign: 'right' }}>{item.base_stat}</Description>
      <StatBar size={item.base_stat} color={type} />
      <Description color="grey" style={{ width: 30, alignItems: 'flex-end' }}>{item.min_stat}</Description>
      <Description color="grey">{item.max_stat}</Description>
    </StatContainer>
  );

  return (
    <StatsDataContainer>
      <FilterTitle color="black">Stats</FilterTitle>
      <FlatList
        style={{ marginTop: 22 }}
        data={statsList}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </StatsDataContainer>
  );
}

export default StatsData;
