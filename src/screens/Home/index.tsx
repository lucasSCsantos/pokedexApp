import { Container } from './styles';
import { Title } from '../../components/typography';
import FireSvg from '../../assets/icons/water.svg';

function Home() {
  return (
    <Container>
      <Title color='black'>Home</Title>
      <FireSvg width={30} height={30} styles={{ fill: 'red' }} />
    </Container>
  );
};

export default Home;
