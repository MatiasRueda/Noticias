import { Fragment } from "react";
import useObtenerNoticias from "../../hook/useObtenerNoticia";
import DCargando from "../dumb/DCargando";
import SNoticias from "./SNoticias";
import { Noticia } from "../../types/type";

export default function SNInicio(props: { section: string }): JSX.Element {
  const sectionElegida = props.section ? props.section : "home";
  const noticias = useObtenerNoticias<Noticia>(
    `${process.env.EXPO_PUBLIC_API_URL_SECTION}${sectionElegida}.json?api-key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return (
    <Fragment>
      {noticias.cargando || !noticias.data ? (
        <DCargando />
      ) : (
        <SNoticias noticias={noticias.data} />
      )}
    </Fragment>
  );
}
