import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import DTitulo from "../components/dumb/DTitulo";

export default function Buscar(): JSX.Element {
  const tema = useTemaContext();

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="Search" color={tema.color.texto} />
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
