import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { Pokemons } from '@screens/Pokemons';
import {useFonts, Lato_400Regular, Lato_700Bold, Lato_900Black} from '@expo-google-fonts/lato'

export default function App() {
  const [fontsLoaded] = useFonts({Lato_400Regular, Lato_700Bold, Lato_900Black});
  return (
    <ThemeProvider theme={theme}>

      {fontsLoaded ? <Pokemons /> : <ActivityIndicator/>}

    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
