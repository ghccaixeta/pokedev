import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Details } from "@screens/Details";
import { Pokemons } from "@screens/Pokemons";


type AppRoutes = {
  pokemons: undefined;
  details: {url: string};
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown:false }} initialRouteName="pokemons">
      <Screen name="pokemons" component={Pokemons} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}