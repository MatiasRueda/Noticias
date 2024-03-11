import { ReactNode, createContext, useContext, useState } from "react";
import { Tema } from "../types/type";

export const temas: Record<string, Tema> = {
  calido: {
    texto: "#ffffff",
    fondo: ["#bc4e9c", "#f80759"],
  },

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
  tema: Tema;
  cambiarColor: (tema: keyof typeof temas) => void;
};

const Temas = createContext<TemaContext | undefined>(undefined);

export function useTemaContext(): TemaContext {
  return useContext(Temas)!;
}

export default function TemaContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [tema, setTema] = useState<Tema>(temas.calido);

  const cambiarColor = (tema: keyof typeof temas): void => {
    setTema(temas[tema]);
  };

  return (
    <Temas.Provider value={{ tema, cambiarColor }}>
      {props.children}
    </Temas.Provider>
  );
}
