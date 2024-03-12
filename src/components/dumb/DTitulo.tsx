import { Text, StyleSheet, View, ViewStyle, TextStyle } from "react-native";

type Parametros = {
  titulo: string;
  color: string;
};

export default function DTitulo({ ...rest }: Parametros): JSX.Element {
  const texto: TextStyle = {
    color: rest.color,
  };

  const border: ViewStyle = {
    borderColor: rest.color,
  };

  return (
    <View style={[border, estilos.contenedor]}>
      <Text style={[texto, estilos.texto]}>{rest.titulo}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  texto: {
    fontSize: 45,
  },
});
