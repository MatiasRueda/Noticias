import { TextStyle, View, StyleSheet, Image, Text } from "react-native";
import { Noticia } from "../../types/type";

type Parametros = {
  color: string;
  noticia: Noticia;
};

export default function DMasVista({ ...rest }: Parametros): JSX.Element {
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
      <View style={estilos.contenedorTexto}>
        <Text style={texto}>{rest.noticia.title}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  contenedorImagen: {
    height: 75,
    width: "30%",
  },
  imagen: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },

  contenedorTexto: {
    width: "65%",
    marginLeft: 15,
  },
});
