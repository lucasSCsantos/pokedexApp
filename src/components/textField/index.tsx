import { Dispatch, SetStateAction, useState } from 'react';
import { Container, Input } from './styles';
import Icon from '@expo/vector-icons/FontAwesome5';
import theme from '../../styles/theme';

interface TextFieldProps {
  onChangeText: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
}

function TextField({ onChangeText, value, placeholder }: TextFieldProps) {
  const { defaultInput, pressedInput } = theme.color.background
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
        onChangeText={onChangeText}
        value={value}
        onFocus={ () => onFocus() }
        onBlur={ () => onBlur() }
        placeholder={placeholder}
      />
    </Container>
  );
};

export default TextField;
