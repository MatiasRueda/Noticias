import { ReactNode, createContext, useContext, useState } from "react";

type SectionContext = {
  section: string;
  agregarSection: (nuevaSection: string) => void;
};

const Section = createContext<SectionContext | undefined>(undefined);

export function useSectionContext(): SectionContext {
  return useContext(Section)!;
}

export default function SectionContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [section, setSection] = useState<string>("");

  const agregarSection = (nuevaSection: string): void => {
    setSection(nuevaSection);
  };

  return (
    <Section.Provider value={{ section, agregarSection }}>
      {props.children}
    </Section.Provider>
  );
}
