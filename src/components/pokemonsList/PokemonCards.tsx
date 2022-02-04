import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dispatch } from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Color, PokemonDataProps, PokemonProps } from '../../@types/pokemon';
import correctName from '../../helpers/correctName';
import correctNumbers from '../../helpers/correctNumbers';
import pokemonDataMock from '../../mocks/pokemonDataMock';
import getPokemonDetails from '../../services/getPokemonDetails';
import { setName } from '../../store/pokemon/actions';
import Badge from '../badge';
import { Description, PokemonName, PokemonNumber } from '../typography';
import { CardContainer, BadgeContainer, PokemonImage } from './styles';

interface PokemonCardsProps {
  name: string;
  changeName: (value: string) => void;
}

function PokemonCards({ name, changeName }: PokemonCardsProps) {
  const [pokemon, setPokemon] = useState<PokemonProps | false>(false);
  const [pokemonData, setPokemonData] = useState<PokemonDataProps>(pokemonDataMock);
  const navigation = useNavigation<StackNavigationProp<any>>();


  useEffect(() => {
    let isMounted = true;
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      if (isMounted) setPokemon(details);
    }

    getPokemon(name);

    return () => {
      isMounted = false;
    };
  }, [name])

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

  const handlePress = () => {
    if (pokemon) changeName(pokemon.name);
    navigation.push('About')
  }

  const { type, id, pokemonName, typeList } = pokemonData && pokemonData;

  return (
    <CardContainer color={type} onPress={handlePress}>
      <PokemonNumber color="number">#{id}</PokemonNumber>
      <PokemonName color="white">{pokemonName}</PokemonName>
      <BadgeContainer>
        {typeList.length > 0 ? typeList.map(({ type }, index) => (
          <Badge type={type.name as Color} full key={index} style={{ marginRight: 5 }} />
        )) : (
          <Description color="grey">Loading...</Description>
        )}
      </BadgeContainer>
      <PokemonImage 
        source={{ 
          uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png` 
        }}
      />
    </CardContainer>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  changeName: (value: string) => dispatch(setName(value))
});

export default connect(null, mapDispatchToProps)(PokemonCards);
