import { useEffect, useState } from 'react';
import correctNumbers from '../../helpers/correctNumbers';
import getPokemonDetails from '../../services/getPokemonDetails';
import Badge from '../badge';
import { PokemonName, PokemonNumber } from '../typography';
import { CardContainer, BadgeContainer, PokemonImage } from './styles';

interface PokemonCardsProps {
  name: string;
}

function PokemonCards({ name }: PokemonCardsProps) {
  const [pokemon, setPokemon] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      setPokemon(details);
    }

    getPokemon(name);
  }, [])

  useEffect(() => {
    if (pokemon) {
      setId(correctNumbers(pokemon.id));
    }
  }, [pokemon])

  return (
    <CardContainer>
      { pokemon && (
        <>
          <PokemonNumber color="number">#{id}</PokemonNumber>
          <PokemonName color="white">{pokemon.name}</PokemonName>
          <BadgeContainer>
            {pokemon.types.map(({ type }) => (
              <Badge type={type.name} full />
            ))}
          </BadgeContainer>
          <PokemonImage 
            source={{ 
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png` 
            }} 
          />
        </>
      )}
    </CardContainer>
  );
}

export default PokemonCards;
