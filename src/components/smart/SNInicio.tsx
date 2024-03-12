import { home } from "../../auxiliar/home";
import SNoticias from "./SNoticias";

export default function SNInicio(): JSX.Element {
  return <SNoticias noticias={home.results} />;
}
