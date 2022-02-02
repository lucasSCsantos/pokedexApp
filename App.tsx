import { ThemeProvider } from 'styled-components/native';
import Navigation from './src/Navigation';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}