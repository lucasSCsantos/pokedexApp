import { Container } from './styles';
import { Title } from '../../components/typography';
import getDamageRelations from '../../services/getDamageRelations';

function Home() {
  console.log(

    getDamageRelations(
      {
        double_damage_from: [
          {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/"
          },
          {
            name: "psychic",
            url: "https://pokeapi.co/api/v2/type/14/"
          }
        ],
        double_damage_to: [
          {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/"
          },
          {
            name: "fairy",
            url: "https://pokeapi.co/api/v2/type/18/"
          }
        ],
      },
      {
        double_damage_from: [
          {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/"
          },
          {
            name: "rock",
            url: "https://pokeapi.co/api/v2/type/6/"
          },
          {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/"
          }
        ],
        double_damage_to: [
          {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/"
          },
          {
            name: "steel",
            url: "https://pokeapi.co/api/v2/type/9/"
          },
          {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/"
          },
          {
            name: "ice",
            url: "https://pokeapi.co/api/v2/type/15/"
          }
        ],
      }
    )
  )
  return (
    <Container>
      <Title color="black">Home</Title>
    </Container>
  );
};

export default Home;
