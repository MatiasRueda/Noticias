import Constants from "expo-constants";
import { Text, StyleSheet, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import DTitulo from "../components/dumb/DTitulo";
import SFBusqueda from "../components/smart/SFBusqueda";
import DRecomendaciones from "../components/dumb/DRecomendaciones";

export default function Buscar(): JSX.Element {
  const tema = useTemaContext();

  const texto: TextStyle = {
    color: tema.color.texto,
  };

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="Search" color={tema.color.texto} />
      <Text style={[texto, estilos.descripcion]}>
        Search for the most important articles of the last day according to
        their section
      </Text>
      <SFBusqueda color={tema.color.texto} />
      <DRecomendaciones color={tema.color.texto} />
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  descripcion: {
    marginTop: 30,
    width: "80%",
    fontSize: 18,
    textAlign: "center",
  },
});
