import { Container } from './styles';
import { ApplicationTitle, Description } from '../../components/typography';
import TextField from '../../components/textField';
import { useState } from 'react';

function Home() {
  const [text, setText] = useState('');
  const placeholder = "What Pokemon are you looking for?";
  
  return (
    <Container>
      <ApplicationTitle color="black">
        Pokédex
      </ApplicationTitle>
      <Description color="grey">
        Search for Pokémon by name or using the National Pokédex number.
      </Description>
      <TextField
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Home;
