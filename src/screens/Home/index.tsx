import { Container } from './styles';
import { Title } from '../../components/typography';
import Badge from '../../components/badge';

function Home() {
  return (
    <Container>
      <Title color='black'>Home</Title>
      <Badge type="fire"></Badge>
    </Container>
  );
};

export default Home;
