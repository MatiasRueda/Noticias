import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { useTemaContext } from "../../context/TemaContext";
import DColor from "../dumb/DColor";

export default function SOpciones(): JSX.Element {
  const tema = useTemaContext();

  const contenedor: ViewStyle = {
    borderColor: tema.color.texto,
    backgroundColor: tema.color.fondoSecundario,
  };

  const texto: TextStyle = {
    color: tema.color.texto,
  };

  const cambiarABlanco = (): void => {
    tema.cambiarColor("white");
  };

  const cambiarANegro = (): void => {
    tema.cambiarColor("black");
  };

  return (
    <View style={[contenedor, estilos.contenedor]}>
      <Text style={[texto, estilos.texto]}>Theme:</Text>
      <View style={estilos.opciones}>
        {tema.colores.map(([color, info], indice) => (
          <DColor
            key={indice}
            press={
              color.toLowerCase() === "white" ? cambiarABlanco : cambiarANegro
            }
            color={color}
            colorTexto={tema.color.texto}
            texto={color[0].toUpperCase() + color.slice(1).toLowerCase()}
          />
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 500,
    width: "90%",
    marginTop: 20,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    fontSize: 25,
    marginBottom: 20,
  },

  opciones: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
