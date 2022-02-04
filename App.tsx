import { useFonts } from '@expo-google-fonts/montserrat';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import Navigation from './src/Navigation';
import store from './src/store';
import theme from './src/styles/theme';

export default function App() {
  useFonts({
    'fontello': require('./src/assets/fontello.ttf'),
  });

  LogBox.ignoreAllLogs(true);
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
