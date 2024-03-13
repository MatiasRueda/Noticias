import { View, Text, TextStyle, StyleSheet } from "react-native";

type Parametros = {
  color: string;
};
export default function DRecomendaciones({ ...rest }: Parametros): JSX.Element {
  const recomendaciones: string[] = [
    "arts",
    "automobiles",
    "fashion",
    "food",
    "health",
    "magazine",
    "movies",
  ];

  const texto: TextStyle = {
    color: rest.color,
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={[texto, estilos.textoRecomendacion]}>
        Some recommendations:
      </Text>
      <View style={estilos.recomendaciones}>
        {recomendaciones.map((recom, indice) => (
          <Text style={[texto, estilos.recomendacion]} key={indice}>
            {recom}
          </Text>
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    height: 200,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  textoRecomendacion: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recomendaciones: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  recomendacion: {
    margin: 10,
  },
});
