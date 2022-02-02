import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

function About() {
  return (
    <Container>
      <Text>About</Text>
      <StatusBar style="auto" />
    </Container>
  );
};

export default About;
