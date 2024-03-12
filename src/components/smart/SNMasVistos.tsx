import { masVistos } from "../../auxiliar/masVistos";
import SNoticias from "./SNoticias";

export default function SNMasVistos(): JSX.Element {
  return <SNoticias noticias={masVistos.results} />;
}
