import { ReactNode } from 'react';
import { PokemonType } from '../typography';
import { Container } from './styles';

interface BadgeProps {
  children: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <Container>
      <PokemonType color="white">{children}</PokemonType>
    </Container>
  );
};

export default Badge;
