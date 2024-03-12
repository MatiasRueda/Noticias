import { ReactNode, createContext, useContext, useState } from "react";
import { Color, Tema } from "../types/type";

export const temas: Tema = {
  white: {
    texto: "#000000",
    textoSecundario: "#6666ff",
    fondo: ["#cccccc", "#d1d1d1"],
    fondoSecundario: "#ffffff",
  },

  black: {
    texto: "#ffffff",
    textoSecundario: "#ff6666",
    fondo: ["#000000", "#4c4c4c"],
    fondoSecundario: "#323232",
  },
};

type TemaContext = {
  color: Color;
  colores: [string, Color][];
  cambiarColor: (tema: keyof Tema) => void;
};

const Temas = createContext<TemaContext | undefined>(undefined);

export function useTemaContext(): TemaContext {
  return useContext(Temas)!;
}

export default function TemaContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [color, setColor] = useState<Color>(temas.white);

  const cambiarColor = (colorNuevo: keyof Tema): void => {
    setColor(temas[colorNuevo]);
  };

  return (
    <Temas.Provider
      value={{ color, colores: Object.entries(temas), cambiarColor }}
    >
      {props.children}
    </Temas.Provider>
  );
}
