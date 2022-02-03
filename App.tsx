import { useFonts } from '@expo-google-fonts/montserrat';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import Navigation from './src/Navigation';
import theme from './src/styles/theme';

export default function App() {
  useFonts({
    'fontello': require('./src/assets/fontello.ttf'),
  });

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
