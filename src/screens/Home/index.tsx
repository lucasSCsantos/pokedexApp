import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Home;
