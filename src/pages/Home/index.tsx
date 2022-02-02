import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Text style={{ fontSize: 30 }}>
        Hello World
      </Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Home;
