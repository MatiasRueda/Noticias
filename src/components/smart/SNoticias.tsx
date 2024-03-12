import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { home } from "../../auxiliar/home";
import DNoticia from "../dumb/DNoticia";
import { useTemaContext } from "../../context/TemaContext";

export default function SNoticias(): JSX.Element {
  const tema = useTemaContext();

  return (
    <SafeAreaView style={estilos.contenedor}>
      <FlatList
        data={home.results}
        keyExtractor={(e) => e.title}
        renderItem={(e) => (
          <DNoticia color={tema.color.texto} noticia={e.item} />
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
