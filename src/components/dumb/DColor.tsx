import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type Parametros = {
  color: string;
  colorTexto: string;
  texto: string;
  press: () => void;
};

export default function DColor({ ...rest }: Parametros): JSX.Element {
  const color: ViewStyle = {
    backgroundColor: rest.color,
    borderColor: rest.colorTexto,
  };

  const texto: TextStyle = {
    color: rest.colorTexto,
  };

  return (
    <TouchableOpacity onPress={rest.press} style={estilos.contenedor}>
      <View style={[color, estilos.tema]}></View>
      <Text style={[texto, estilos.texto]}>{rest.texto}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 140,
    width: 150,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tema: {
    height: 100,
    width: 100,
    borderWidth: 2,
  },
  texto: {
    width: "100%",
    fontSize: 17,
    textAlign: "center",
  },
});
