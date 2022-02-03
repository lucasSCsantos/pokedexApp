import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Description, FilterTitle, PokemonType } from '../../components/typography';
import { PokedexDataContainer } from './styles';

interface PokedexDataProps {
}

function PokedexData() {

  // const renderItem = ({ item }) => (
  //   <View>
  //     <PokemonType color="black">
  //       {item.title}
  //     </PokemonType>
  //     <Description color="grey">
  //       {item.value}
  //     </Description>
  //   </View>
  // );

  return (
    <PokedexDataContainer>
      <FilterTitle color="black">PokedexData</FilterTitle>
      {/* <FlatList
        data={}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
    </PokedexDataContainer>
  );
}

export default PokedexData;
