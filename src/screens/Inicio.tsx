import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function Inicio(): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Text>Estamos en el Home</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
