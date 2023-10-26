import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pokemons } from "@screens/Pokemons";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown:false }} initialRouteName="pokemons">
      <Screen name="pokemons" component={Pokemons} />
    </Navigator>
  );
}