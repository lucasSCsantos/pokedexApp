import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Description, FilterTitle, PokemonType } from '../../components/typography';
import pokemonStatsMock from '../../mocks/pokemonStatsMock';
import getStatsDetails, { StatProps } from '../../services/getStatsDetails';
import StatBar from './StatBar';
import { StatsDataContainer, StatContainer } from './styles';

interface StatsDataProps {
  stats: StatProps[]
}

function StatsData({ stats }: StatsDataProps) {
  const [statsList, setStatsList] = useState(pokemonStatsMock);

  useEffect(() => {
    const list = getStatsDetails(stats);
    setStatsList(list);
  }, [stats])

  const item = ({ item }: { item: typeof pokemonStatsMock[0] }) => (
    <StatContainer>
      <PokemonType color="black" style={{ width: 44, backgroundColor: 'grey', marginRight: 10  }}>
        {item.name}
      </PokemonType>
      <Description color="grey" style={{ paddingLeft: 12 }}>{item.base_stat}</Description>
      <StatBar size={item.base_stat} />
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
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </StatsDataContainer>
  );
}

export default StatsData;
