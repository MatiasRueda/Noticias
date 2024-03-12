import Constants from "expo-constants";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import DTitulo from "../components/dumb/DTitulo";
import SNoticias from "../components/smart/SNoticias";
import SNMasVistos from "../components/smart/SNMasVistos";

export default function MasVistos(): JSX.Element {
  const tema = useTemaContext();

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="Mas vistos" color={tema.color.texto} />
      <SNMasVistos />
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
