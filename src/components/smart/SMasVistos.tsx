import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useTemaContext } from "../../context/TemaContext";
import DMasVista from "../dumb/DMasVista";
import { Noticia } from "../../types/type";

export default function SMasVistos(props: {
  noticias: Noticia[];
}): JSX.Element {
  const tema = useTemaContext();

  return (
    <SafeAreaView style={estilos.contenedor}>
      <FlatList
        data={props.noticias}
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
