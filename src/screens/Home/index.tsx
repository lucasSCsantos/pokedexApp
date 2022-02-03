import { Container } from './styles';
import { useState } from 'react';
import { ApplicationTitle, Description } from '../../components/typography';
import TextField from '../../components/textField';
import PokemonsList from '../../components/pokemonsList';

function Home() {
  const [text, setText] = useState('');
  const placeholder = "What Pokemon are you looking for?";

  return (
    <Container>
      <ApplicationTitle color="black" style={{ marginBottom: 10 }} >
        Pokédex
      </ApplicationTitle>
      <Description color="grey" style={{ marginBottom: 25 }} >
        Search for Pokémon by name or using the National Pokédex number.
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
