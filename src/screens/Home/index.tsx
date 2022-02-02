import { Container } from './styles';
import { Title } from '../../components/typography';
import getDamageRelations from '../../services/getDamageRelations';

function Home() {
  return (
    <Container>
      <Title color="black">Home</Title>
    </Container>
  );
};

export default Home;
