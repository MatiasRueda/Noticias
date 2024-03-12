import { Image, StyleSheet, Text, TextStyle, View } from "react-native";
import { Noticia } from "../../types/type";

type Parametros = {
  color: string;
  noticia: Noticia;
};

export default function DNoticia({ ...rest }: Parametros): JSX.Element {
  const texto: TextStyle = {
    color: rest.color,
  };

  return (
    <View style={estilos.contenedor}>
      <View style={estilos.contenedorImagen}>
        <Image
          style={estilos.imagen}
          source={{
            uri: rest.noticia.multimedia
              ? rest.noticia.multimedia[0].url
              : rest.noticia.media?.length
              ? rest.noticia.media[0]["media-metadata"]![0].url
              : undefined,
          }}
        />
      </View>
      <Text style={texto}>{rest.noticia.title}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    padding: 20,
  },
  contenedorImagen: {
    height: 250,
    width: "100%",
  },
  imagen: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
});
