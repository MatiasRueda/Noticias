import { Fragment } from "react";
import { Noticia } from "../../types/type";
import useObtenerNoticias from "../../hook/useObtenerNoticia";
import DCargando from "../dumb/DCargando";
import SMasVistos from "./SMasVistos";

export default function SNInicio(): JSX.Element {
  const noticias = useObtenerNoticias<Noticia>(
    `${process.env.EXPO_PUBLIC_API_URL_POPULAR}api-key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return (
    <Fragment>
      {noticias.cargando || !noticias.data ? (
        <DCargando />
      ) : (
        <SMasVistos noticias={noticias.data} />
      )}
    </Fragment>
  );
}
