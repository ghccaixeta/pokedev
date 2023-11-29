
import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Text } from "./styles";
import { AppNavigatorRoutesProps } from "src/routes/app.routes";

type Props = {
  title: string,
  showBackButton?: boolean,
}

export function Header({ title, showBackButton }: Props) {

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.navigate('pokemons')
  }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
      <Text>{title}</Text>
    </Container>
  )
}