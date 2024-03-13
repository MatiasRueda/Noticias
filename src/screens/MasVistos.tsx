import Constants from "expo-constants";
import { StyleSheet, Text, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTemaContext } from "../context/TemaContext";
import DTitulo from "../components/dumb/DTitulo";
import SMasVistos from "../components/smart/SMasVistos";

export default function MasVistos(): JSX.Element {
  const tema = useTemaContext();

  const texto: TextStyle = {
    color: tema.color.texto,
  };

  return (
    <LinearGradient colors={tema.color.fondo} style={estilos.contenedor}>
      <DTitulo titulo="Most viewed" color={tema.color.texto} />
      <Text style={[texto, estilos.descripcion]}>
        Most viewed articles during the last day.
      </Text>
      <SMasVistos />
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
