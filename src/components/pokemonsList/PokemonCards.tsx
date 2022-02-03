import { ReactNode } from 'react';

import { View, Text } from 'react-native';
import Badge from '../badge';
import { PokemonName, PokemonNumber } from '../typography';
import { CardContainer, BadgeContainer } from './styles';

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
    </CardContainer>
  );
}

export default PokemonCards;
