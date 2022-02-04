import { Container } from './styles';
import { useState } from 'react';
import { ApplicationTitle, Description } from '../../components/typography';
import TextField from '../../components/textField';
import PokemonsList from '../../components/pokemonsList';
import { getWeaknesses } from '../../helpers/getPokedexData';

function Home() {
  const [text, setText] = useState('');
  const placeholder = "What Pokemon are you looking for?";
  getWeaknesses([
    {
      type: {
        name: "grass",
      }
    },
    {
      type: {
        name: "poison",
      }
    }
  ])
  return (
    <Container>
      <ApplicationTitle color="black" style={{ marginBottom: 10 }} >
        Pokédex
      </ApplicationTitle>
      <Description color="grey" style={{ marginBottom: 25 }} >
        Search for Pokémon by name.
      </Description>
      <TextField
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
      />
      <PokemonsList filter={text} />
    </Container>
  );
};

export default Home;
