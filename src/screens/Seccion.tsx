import { Text, StyleSheet, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import Constants from "expo-constants";
import DTitulo from "../components/dumb/DTitulo";
import SNInicio from "../components/smart/SNInicio";

export default function Seccion(): JSX.Element {
  const tema = useTemaContext();

  const texto: TextStyle = {
    color: tema.color.texto,
  };

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="More popular" color={tema.color.texto} />
      <Text style={[texto, estilos.descripcion]}>
        The most popular articles
      </Text>
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

  descripcion: {
    marginTop: 15,
    marginBottom: 15,
    width: "80%",
    fontSize: 20,
    textAlign: "center",
  },
});
