import { PokemonType } from '../typography';
import { Container } from './styles';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from './config.json';
import React from 'react';
import theme from '../../styles/theme';
import { StyleProp } from 'react-native';
const Icon = createIconSetFromFontello(fontelloConfig, 'fontello', 'fontello.ttf');

interface BadgeProps {
  type: keyof typeof theme.color.type;
  full?: boolean;
  style: StyleProp<{}>;
}

function Badge({ type, full = false, style }: BadgeProps) {
  return (
    <Container type={type} full={full} style={style}>
      <Icon name={type} color="white" size={15} />
      { full && (
        <PokemonType color="white" style={{ marginLeft: 5 }}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </PokemonType>
      )}
    </Container>
  );
};

export default Badge;
