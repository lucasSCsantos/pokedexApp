import { useEffect, useState } from 'react';
import getPokemonDetails from '../../services/getPokemonDetails';
import Badge from '../badge';
import { PokemonName, PokemonNumber } from '../typography';
import { CardContainer, BadgeContainer, PokemonImage } from './styles';

interface PokemonCardsProps {
  name: string;
}

function PokemonCards({ name }: PokemonCardsProps) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async (name: string) => {
      const details = await getPokemonDetails(name);
      setPokemon(details);
    }
    getPokemon(name);
  }, [])

  return (
      <CardContainer>
        <PokemonNumber color="number">#{pokemon.id}</PokemonNumber>
        <PokemonName color="white">{pokemon.name}</PokemonName>
        <BadgeContainer>
          {pokemon.types.map(({ type }) => (
            <Badge type={type.name} full />
          ))}
        </BadgeContainer>
        <PokemonImage 
          source={{ 
            uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png` 
          }} 
        />
      </CardContainer>
  );
}

export default PokemonCards;
