import { Container } from './styles';
import { Title } from '../../components/typography';
import TextField from '../../components/textField';

function Home() {
  return (
    <Container>
      <Title color="black">Home</Title>
      <TextField />
    </Container>
  );
};

export default Home;
