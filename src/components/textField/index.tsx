import { useState } from 'react';
import { Container, Input } from './styles';
import Icon from '@expo/vector-icons/FontAwesome5';
import theme from '../../styles/theme';


function TextField() {
  const { defaultInput, pressedInput } = theme.color.background
  const [text, setText] = useState("");
  const [background, setBackground] = useState(defaultInput);

  const onFocus = () => {
    setBackground(pressedInput);
  };

  const onBlur = () => {
    setBackground(defaultInput);
  };

  return (
    <Container style={{ backgroundColor: background }}>
      <Icon name="search" size={16} color="#000" />
      <Input 
        onChangeText={setText}
        value={text}
        onFocus={ () => onFocus() }
        onBlur={ () => onBlur() }
        placeholder="What Pokemon are you looking for?"
      />
    </Container>
  );
};

export default TextField;
