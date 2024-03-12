import { ReactNode, createContext, useContext, useState } from "react";
import { Color, Tema } from "../types/type";

export const temas: Tema = {
  blanco: {
    texto: "#000000",
    fondo: ["#cccccc", "#d1d1d1"],
  },

  negro: {
    texto: "#ffffff",
    fondo: ["#000000", "#4c4c4c"],
  },
};

type TemaContext = {
  color: Color;
  cambiarColor: (tema: keyof typeof temas) => void;
};

const Temas = createContext<TemaContext | undefined>(undefined);

export function useTemaContext(): TemaContext {
  return useContext(Temas)!;
}

export default function TemaContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [color, setColor] = useState<Color>(temas.blanco);

  const cambiarColor = (colorNuevo: keyof Tema): void => {
    setColor(temas[colorNuevo]);
  };

  return (
    <Temas.Provider value={{ color, cambiarColor }}>
      {props.children}
    </Temas.Provider>
  );
}
