import { Text } from 'react-native';
import PokemonCards from './PokemonCards';
import { Container } from './styles';

function PokemonsList() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <PokemonCards />
    </Container>
  );
};

export default PokemonsList;
