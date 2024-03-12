export type Color = {
  texto: string;
  textoSecundario: string;
  fondo: string[];
  fondoSecundario: string;
};

export type Tema = {
  white: Color;
  black: Color;
};

type Multimedia = {
  url: string;
  height: number;
  width: number;
};

type Media = {
  "media-metadata": {
    url: string;
    height: number;
    width: number;
  }[];
};

export type Noticia = {
  section: string;
  title: string;
  abstract: string;
  multimedia?: Multimedia[];
  media?: Media[];
};
