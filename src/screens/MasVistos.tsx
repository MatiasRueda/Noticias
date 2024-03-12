import Constants from "expo-constants";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";

export default function MasVistos(): JSX.Element {
  const tema = useTemaContext();

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <Text>Articulos mas vistos</Text>
    </LinearGradient>
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
