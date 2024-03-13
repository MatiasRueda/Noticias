import { StyleSheet, Text, TextStyle } from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import DTitulo from "../components/dumb/DTitulo";
import SNInicio from "../components/smart/SNInicio";

export default function Inicio(): JSX.Element {
  const tema = useTemaContext();

  const texto: TextStyle = {
    color: tema.color.texto,
  };

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="News" color={tema.color.texto} />
      <Text style={[texto, estilos.descripcion]}>
        The most popular news of the day
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
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
});
