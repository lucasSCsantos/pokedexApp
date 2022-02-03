import { HomeAppTitle, Container, HomeDescription, HomeTextField } from './styles';
import { useState } from 'react';

function Home() {
  const [text, setText] = useState('');
  const placeholder = "What Pokemon are you looking for?";

  return (
    <Container>
      <HomeAppTitle color="black">
        Pokédex
      </HomeAppTitle>
      <HomeDescription color="grey">
        Search for Pokémon by name or using the National Pokédex number.
      </HomeDescription>
      <HomeTextField
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Home;
