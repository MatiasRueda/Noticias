import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function DCargando(): JSX.Element {
  return (
    <View style={estilos.contenedor}>
      <ActivityIndicator size="small" color="blue" />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
