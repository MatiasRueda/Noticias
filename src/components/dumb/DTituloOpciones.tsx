import { StyleSheet, Text, TextStyle } from "react-native";
import { useTemaContext } from "../../context/TemaContext";

export default function DTituloOpciones(): JSX.Element {
  const tema = useTemaContext();
  const estilo: TextStyle = { color: tema.color.texto };
  return <Text style={[estilo, estilos.texto]}>Options</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 30,
  },
});
