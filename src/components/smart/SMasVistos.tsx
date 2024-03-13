import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { masVistos } from "../../auxiliar/masVistos";
import { useTemaContext } from "../../context/TemaContext";
import DMasVista from "../dumb/DMasVista";

export default function SMasVistos(): JSX.Element {
  const tema = useTemaContext();
  const noticias = masVistos.results;

  return (
    <SafeAreaView style={estilos.contenedor}>
      <FlatList
        data={noticias}
        keyExtractor={(e) => e.title}
        renderItem={(e) => (
          <DMasVista color={tema.color.texto} noticia={e.item} />
        )}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
