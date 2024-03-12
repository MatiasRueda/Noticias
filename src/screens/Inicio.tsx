import { StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import DTitulo from "../components/dumb/DTitulo";
import SNInicio from "../components/smart/SNInicio";

export default function Inicio(): JSX.Element {
  const tema = useTemaContext();

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="News" color={tema.color.texto} />
      <SNInicio />
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
