import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import DNoticia from "../dumb/DNoticia";
import { useTemaContext } from "../../context/TemaContext";
import { Noticia } from "../../types/type";

export default function SNoticias(props: { noticias: Noticia[] }): JSX.Element {
  const tema = useTemaContext();

  return (
    <SafeAreaView style={estilos.contenedor}>
      <FlatList
        data={props.noticias}
        keyExtractor={(e, indice) => indice.toString()}
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
