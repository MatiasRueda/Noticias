import Constants from "expo-constants";
import { View, Text, StyleSheet } from "react-native";

export default function MasVistos(): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Text>Articulos mas vistos</Text>
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
