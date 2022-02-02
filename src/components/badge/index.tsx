import { PokemonType } from '../typography';
import { Container } from './styles';
import { useFonts } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from './config.json';
import React from 'react';
import theme from '../../styles/theme';
const Icon = createIconSetFromFontello(fontelloConfig, 'fontello', 'fontello.ttf');

interface BadgeProps {
  type: keyof typeof theme.color.type;
}

function Badge({ type }: BadgeProps) {
  let [fontsLoaded] = useFonts({
    'fontello': require('../../assets/fontello.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container type={type}>
        <Icon name={type} color="white" size={15} style={{ marginRight: 5 }} />
        <PokemonType color="white">{type.charAt(0).toUpperCase() + type.slice(1)}</PokemonType>
      </Container>
    );
  }
};

export default Badge;
