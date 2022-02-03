import Badge from '../badge';
import { PokemonName, PokemonNumber } from '../typography';
import { CardContainer, BadgeContainer, PokemonImage } from './styles';

interface PokemonCardsProps {
}

function PokemonCards({}: PokemonCardsProps) {
  return (
      <CardContainer>
        <PokemonNumber color="number">#001</PokemonNumber>
        <PokemonName color="white">Bulbassaur</PokemonName>
        <BadgeContainer>
          <Badge type="grass" full />
          <Badge type="poison" full />
        </BadgeContainer>
        <PokemonImage 
          source={{ 
            uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" 
          }} 
        />
      </CardContainer>
  );
}

export default PokemonCards;
