import Constants from "expo-constants";
import { View, Text, StyleSheet } from "react-native";

export default function Buscar(): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <Text>Buscar</Text>
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
