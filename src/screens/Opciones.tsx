import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import SOpciones from "../components/smart/SOpciones";
import { useTemaContext } from "../context/TemaContext";
import { LinearGradient } from "expo-linear-gradient";
import DTitulo from "../components/dumb/DTitulo";

export default function Opciones(): JSX.Element {
  const tema = useTemaContext();

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="Options" color={tema.color.texto} />
      <SOpciones />
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
