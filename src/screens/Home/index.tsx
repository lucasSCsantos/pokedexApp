import { Container } from './styles';
import { Title } from '../../components/typography';
import TextField from '../../components/textField';
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
  const [text, setText] = useState("");
  return (
    <Container>
      <Title color="black">Home</Title>
      <TextField 
        onChangeText={setText}
        value={text}
      />
    </Container>
  );
};

export default Home;
