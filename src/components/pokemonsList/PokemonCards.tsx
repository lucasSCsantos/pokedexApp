import AppLoading from 'expo-app-loading';
import { useEffect, useState } from 'react';
import { Color, PokemonProps, TypeProps } from '../../@types/pokemon';
import correctName from '../../helpers/correctName';
import correctNumbers from '../../helpers/correctNumbers';
import getPokemonDetails from '../../services/getPokemonDetails';
import Badge from '../badge';
import { PokemonName, PokemonNumber } from '../typography';
import { CardContainer, BadgeContainer, PokemonImage } from './styles';

interface PokemonCardsProps {
  name: string;
}

function PokemonCards({ name }: PokemonCardsProps) {
  const [pokemon, setPokemon] = useState<PokemonProps | false>(false);
  const [id, setId] = useState("");
  const [type, setType] = useState<Color>();
  const [typeList, setTypeList] = useState<TypeProps | false>(false);
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    let isMounted = true;
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      if (isMounted) setPokemon(details);
    }

    getPokemon(name);

    return () => {
      isMounted = false;
    }
  }, [name])

  useEffect(() => {
    if (pokemon) {
      setId(correctNumbers(pokemon.id));
      setType(pokemon.types[0].type.name as Color);
      setTypeList(pokemon.types);
      setPokemonName(correctName(pokemon.name))
    }
  }, [pokemon])

  if (!pokemon) {
    return <AppLoading />;
  } else {
    return (
      <CardContainer color={type}>
        <PokemonNumber color="number">#{id}</PokemonNumber>
          <PokemonName color="white">{pokemonName}</PokemonName>
          <BadgeContainer>
            {typeList && typeList.map(({ type }, index) => (
              <Badge type={type.name as Color} full key={index} style={{ marginRight: 5 }} />
            ))}
          </BadgeContainer>
          <PokemonImage 
            source={{ 
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png` 
            }} 
          />
      </CardContainer>
    );
  }
}

export default PokemonCards;
