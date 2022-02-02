import { useState } from 'react';
import { Container, Input } from './styles';


function TextField() {
  const [text, setText] = useState("");
  return (
    <Container>
      <Input onChangeText={setText} value={text} placeholder="text" />
    </Container>
  );
};

export default TextField;
