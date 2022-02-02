import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';
import { ApplicationTitle, Description, FilterTitle, PokemonName, PokemonNumber, PokemonType, Title } from '../../components/typography';

function Home() {
  return (
    <Container>
      <Title color='black'>Home</Title>
    </Container>
  );
};

export default Home;
